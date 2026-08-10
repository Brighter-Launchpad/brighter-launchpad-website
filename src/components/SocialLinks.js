import { sharedContact } from "../data/locations";

const SocialLinks = ({ className }) => (
  <ul className={`social-links${className ? ` ${className}` : ""}`}>
    <li>
      <a
        href={sharedContact.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Brighter Launchpad on Facebook"
      >
        <i className="fab fa-facebook-f" />
      </a>
    </li>
    <li>
      <a
        href={sharedContact.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Brighter Launchpad on Instagram"
      >
        <i className="fab fa-instagram" />
      </a>
    </li>
    <li>
      <a
        href={sharedContact.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Brighter Launchpad on LinkedIn"
      >
        <i className="fab fa-linkedin-in" />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
