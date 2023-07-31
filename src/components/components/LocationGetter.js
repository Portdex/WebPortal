// src/components/LocationGetter.js
import React, { useEffect, useState } from 'react';

const LocationGetter = ({ onLocationReceived }) => {
  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationReceived({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [onLocationReceived]);

  return null;
};

export default LocationGetter;
