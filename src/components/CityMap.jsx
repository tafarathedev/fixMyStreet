import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const CityMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDjR9t5dDhxozWMViMD-KKDf9B34ZBoNxc',
    libraries: ['places'],
  });

  const [places, setPlaces] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (isLoaded) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -15.4167, lng: 28.2833 },
        zoom: 12,
      });

      const service = new window.google.maps.places.PlacesService(map);

      // Define the center and radius of the area to search (e.g., Makeni Area)
      const center = { lat: -15.3704, lng: 28.3041 }; // Example: Makeni Area
      const radius = 5000; // 5000 meters (5 kilometers)

      // Define the search request
      const request = {
        location: center,
        radius: radius,
        keyword: 'place of interest', // You can specify any keyword here
      };

      // Perform the nearby search
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
        }
      });
    }
  }, [isLoaded]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    // Perform search with inputValue if needed
    console.log('Searching for:', inputValue);
  };

  if (loadError) return <div>Error loading maps</div>;
  return (
    <div>
      <input id="autocomplete" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <div id="map" style={{ height: '400px', width: '100%' }} />
      {isLoaded && (
        <ul>
          {places.map(place => (
            <li key={place.place_id}>{place.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityMap;
