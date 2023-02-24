import { memo } from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import RouteMachine from "../molecules/RouteMachine";

const Map = ({ tripId, startLocation, endLocation }) => {
  return (
    <MapContainer zoom={6} scrollWheelZoom={false} className="h-96 w-screen">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <RouteMachine
        tripId={tripId}
        startAddress={startLocation}
        endAddress={endLocation}
      />
    </MapContainer>
  );
};

export default memo(Map);
