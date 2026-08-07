import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";

const buildIcon = (isActive) =>
  L.divIcon({
    className: "",
    html: renderToStaticMarkup(
      <span className={`location-marker-pin${isActive ? " is-active" : ""}`} />
    ),
    iconSize: [34, 34],
    iconAnchor: [17, 34],
  });

const PanToSelected = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.panTo([location.latitude, location.longitude]);
    }
  }, [location, map]);
  return null;
};

const LocationMapView = ({ locations, selectedId, onSelect }) => {
  const center = [46.05, -66.2];

  return (
    <MapContainer
      center={center}
      zoom={9}
      scrollWheelZoom={false}
      aria-label="Map of Brighter Launchpad centre locations"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          icon={buildIcon(location.id === selectedId)}
          eventHandlers={{ click: () => onSelect(location.id) }}
          alt={location.navName}
        />
      ))}
      <PanToSelected
        location={locations.find((location) => location.id === selectedId)}
      />
    </MapContainer>
  );
};

export default LocationMapView;
