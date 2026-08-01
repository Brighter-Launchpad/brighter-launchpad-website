import Link from "next/link";

const LocationRow = ({ location, reverse }) => {
  return (
    <div
      className={`location-row${reverse ? " reverse" : ""}`}
      id={location.slug}
    >
      <span className="location-row-number" aria-hidden="true">
        {location.number}
      </span>
      <div className="location-row-media">
        <img
          src={location.image}
          alt={location.imageAlt}
          width={640}
          height={480}
          loading="lazy"
        />
      </div>
      <div className="location-row-content">
        <h3>{location.name}</h3>
        <p className="location-row-desc">{location.description}</p>
        <ul className="location-row-meta">
          <li>
            <a
              href={location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open directions to ${location.name} in Google Maps`}
            >
              <i className="far fa-map-marker-alt" aria-hidden="true" />
              {location.address}
            </a>
          </li>
          <li>
            <a
              href={`tel:${location.phoneTel}`}
              aria-label={`Call ${location.name}`}
            >
              <i className="fal fa-phone" aria-hidden="true" />
              {location.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${location.email}`}
              aria-label={`Email ${location.name}`}
            >
              <i className="far fa-envelope" aria-hidden="true" />
              {location.email}
            </a>
          </li>
        </ul>
        <div className="location-row-links">
          <a href={`#${location.slug}`} className="location-text-link">
            View This Centre <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
          <a
            href={location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-text-link"
          >
            Get Directions <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
          <Link href="/contact">
            <a className="fl-btn st-9">
              <span className="inner">Enroll Now</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationRow;
