import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

export const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAEPcdt6CnpSl0n9LFfDdpUwmsJaRl768o">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  );
};
