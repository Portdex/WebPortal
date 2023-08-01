// src/components/MapContainer.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ location }) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: location.latitude,
    lng: location.longitude,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC6BHUumQBE-fbEr2vyTRjId2PezBfbldA">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
