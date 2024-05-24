import React, { useCallback,useState,useEffect } from 'react'
import { GoogleMap, MarkerF,Polygon, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios'
/* 
const center ={
  lat:-15.415,
  lng:28.277
} */

function MyComponent({coords}) {
  const [points, setPoints] = useState([]);
const lat = Number(coords.lat)
const lng = Number(coords.lng)



//center position 
const center =  {
  lat,
  lng
}

//points axios fetch from db 
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/reports');
      const coordinates = response.data 
      coordinates.map((coords)=>{
            const pnt = coords.coords
            console.log(points)
            return setPoints(pnt)
      })
      setPoints(response.data);
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


  // Function to calculate new latitude and longitude based on distance
  const calculateLatLng = (origin, distance) => {
    // Earth radius in kilometers
    const earthRadius = 6371;

    // Convert distance to radians
    const radDist = distance / earthRadius;

    // Convert latitude and longitude to radians
    const radLat = origin.lat * Math.PI / 180;
    const radLng = origin.lng * Math.PI / 180;

    // Calculate new latitude
    const newLat = radLat + radDist * (180 / Math.PI);

    // Calculate new longitude based on latitude
    const newLng = radLng + radDist * (180 / Math.PI) / Math.cos(origin.lat * Math.PI / 180);

    // Convert new latitude and longitude to degrees
    const newLatDeg = newLat * 180 / Math.PI;
    const newLngDeg = newLng * 180 / Math.PI;

    return { lat: newLatDeg, lng: newLngDeg };
  };

  // Calculate new bounds around the center
  const distance = 1; // 5 kilometers
  const newLatLng = calculateLatLng(center, distance);

  const bounds = {
    north: center.lat + (newLatLng.lat - center.lat),
    south: center.lat - (newLatLng.lat - center.lat),
    east: center.lng + (newLatLng.lng - center.lng),
    west: center.lng - (newLatLng.lng - center.lng)
  };

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDjR9t5dDhxozWMViMD-KKDf9B34ZBoNxc" //AIzaSyDjR9t5dDhxozWMViMD-KKDf9B34ZBoNxc
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = useCallback(function callback(map) {
       // Calculate bounds using the center position
    const newBounds = new window.google.maps.LatLngBounds(bounds);
    map.fitBounds(newBounds);
  
      setMap(map)
    }, [])
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
//marker customisation 
    const customMarkerIcon = {
     
      scaledSize: { width: 200, height: 200 }, // Size of the icon
    };

  return isLoaded ? (
      <GoogleMap
         mapContainerClassName='h-[89vh]'
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
        options={
          {StreetViewControl:false,
          mapTypeControl:false}
        }

      >

        
{
            points.map((point, i)=>{
              const marker = point.coords
              console.log(marker)
              return  <MarkerF position={marker} options={{icon:customMarkerIcon}}></MarkerF>
            })
             }
      
       {/*  <MarkerF position={center}></MarkerF> */}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)