const HUBSPOT_API_BASE = "https://api.hubapi.com";

export const splitName = (fullName = "") => {
  const parts = fullName.trim().split(/\s+/);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" "),
  };
};

const hubspotFetch = (path, options) =>
  fetch(`${HUBSPOT_API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
      ...options?.headers,
    },
  });

const upsertContact = async ({ email, firstName, lastName, phone }) => {
  const properties = {
    email,
    ...(firstName ? { firstname: firstName } : {}),
    ...(lastName ? { lastname: lastName } : {}),
    ...(phone ? { phone } : {}),
  };

  const createRes = await hubspotFetch("/crm/v3/objects/contacts", {
    method: "POST",
    body: JSON.stringify({ properties }),
  });

  if (createRes.ok) {
    return (await createRes.json()).id;
  }

  // 409 = a contact with this email already exists; update it instead.
  if (createRes.status === 409) {
    const updateRes = await hubspotFetch(
      `/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
      {
        method: "PATCH",
        body: JSON.stringify({ properties }),
      }
    );
    if (!updateRes.ok) {
      throw new Error(`HubSpot contact update failed: ${updateRes.status}`);
    }
    return (await updateRes.json()).id;
  }

  throw new Error(`HubSpot contact create failed: ${createRes.status}`);
};

const attachNote = async (contactId, noteBody) => {
  const res = await hubspotFetch("/crm/v3/objects/notes", {
    method: "POST",
    body: JSON.stringify({
      properties: {
        hs_note_body: noteBody,
        hs_timestamp: Date.now(),
      },
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: "HUBSPOT_DEFINED",
              associationTypeId: 202, // Note -> Contact
            },
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`HubSpot note create failed: ${res.status}`);
  }
};

/**
 * Best-effort sync of a website lead into HubSpot: upserts a Contact by
 * email, then attaches a Note with the full submission so nothing is lost
 * to HubSpot's limited default Contact properties. Never throws -- a
 * HubSpot outage or misconfiguration should never break the form's email
 * notification, which is the primary channel.
 */
export const pushLeadToHubSpot = async ({
  email,
  firstName,
  lastName,
  phone,
  noteBody,
}) => {
  if (!process.env.HUBSPOT_ACCESS_TOKEN) {
    console.warn("HUBSPOT_ACCESS_TOKEN is not configured; skipping HubSpot sync");
    return;
  }

  try {
    const contactId = await upsertContact({ email, firstName, lastName, phone });
    await attachNote(contactId, noteBody);
  } catch (err) {
    console.error("HubSpot sync failed:", err);
  }
};
