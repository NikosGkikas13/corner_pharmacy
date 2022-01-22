import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "460px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 38.087542830166754,
    lng: 23.976051242885656,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAdfvp1ogCieWZuR4J77EWDtny8UA521L4">
      <GoogleMap
        mapContainerClassName="map-class"
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
