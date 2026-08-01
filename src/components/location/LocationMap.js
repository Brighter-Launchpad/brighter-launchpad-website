import dynamic from "next/dynamic";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { locations } from "../../data/locations";
import { LeftArrow, RightArrow } from "../../Icons";

const LocationMapView = dynamic(() => import("./LocationMapView"), {
  ssr: false,
  loading: () => (
    <div className="location-map-canvas" aria-hidden="true" />
  ),
});

const LocationMap = () => {
  const [selectedId, setSelectedId] = useState(locations[0].id);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const selected = locations.find((location) => location.id === selectedId);

  return (
    <section className="tf-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-heading st-2">
              <div className="sub-heading clr-pri-3 f-mulish">
                <LeftArrow />
                <span className="inner-sub st-1">Find Your Way</span>
                <RightArrow />
              </div>
              <h2 className="title clr-pri-2">
                Visit a Brighter Launchpad Near You.
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="location-map-section">
              <div className="location-map-selector" role="group" aria-label="Choose a centre">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    type="button"
                    aria-pressed={selectedId === location.id}
                    onClick={() => setSelectedId(location.id)}
                  >
                    <strong>{location.name}</strong>
                    <span>{location.address}</span>
                  </button>
                ))}
                {selected && (
                  <div className="selected-actions">
                    <a
                      href={selected.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-text-link"
                    >
                      Get Directions
                    </a>
                    <a
                      href={`tel:${selected.phoneTel}`}
                      className="location-text-link"
                      aria-label={`Call ${selected.name}`}
                    >
                      Call This Centre
                    </a>
                    <a
                      href={`#${selected.slug}`}
                      className="location-text-link"
                    >
                      View Centre
                    </a>
                  </div>
                )}
              </div>
              <ReactVisibilitySensor
                onChange={(isVisible) => isVisible && setShouldLoadMap(true)}
                partialVisibility
                delayedCall
              >
                <div className="location-map-canvas">
                  {shouldLoadMap ? (
                    <LocationMapView
                      locations={locations}
                      selectedId={selectedId}
                      onSelect={setSelectedId}
                    />
                  ) : (
                    <span className="map-visually-hidden">
                      Map showing Brighter Launchpad centres in Minto,
                      Chipman, and New Maryland, New Brunswick.
                    </span>
                  )}
                </div>
              </ReactVisibilitySensor>
              <p className="map-visually-hidden">
                Brighter Launchpad centres:{" "}
                {locations.map((location) => location.address).join("; ")}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
