import Link from "next/link";
import { sharedContact } from "../../data/locations";

const MobileActionBar = () => {
  return (
    <nav className="mobile-action-bar" aria-label="Quick actions">
      <div className="inner">
        <a href={`tel:${sharedContact.phoneTel}`}>
          <i className="fal fa-phone" aria-hidden="true" />
          Call
        </a>
        <a href="#locations-list" className="is-primary">
          <i className="far fa-map-marker-alt" aria-hidden="true" />
          Locations
        </a>
        <Link href="/contact">
          <a>
            <i className="far fa-edit" aria-hidden="true" />
            Enroll
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default MobileActionBar;
