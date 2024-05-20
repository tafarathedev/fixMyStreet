import React, {useState} from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';


const center ={
  lat: -3.741,
  lng: -38.523
}
const points =[ 
  {
    lat: -3.742,
    lng: -38.525
},
{
  lat: -3.741,
  lng: -38.523
},
{
  lat: -3.741,
  lng: -38.522
}
];

function MyComponent() {
//state management
const [userLocation, setUserLocation] = useState(null);


//get useer function
const getUserLocation = () => { 
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position) => {
          // what to do once we have the position
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat:latitude, lng:longitude });
          <MarkerF position={userLocation} />
           
      },
      (error) => {
          // display an error if we cant get the users position
          console.error('Error getting user location:', error);
      }
  );
  }
 };

 getUserLocation()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDjR9t5dDhxozWMViMD-KKDf9B34ZBoNxc" //AIzaSyDjR9t5dDhxozWMViMD-KKDf9B34ZBoNxc
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
       mapContainerClassName='h-[89vh]'
        center={userLocation}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl:false,
          mapTypeControl:false
        }}
      >
        
        {
          points.map((point , i)=>{
             return  <MarkerF position={userLocation}></MarkerF>
          })
       } 
        { /* Child components, such as markers, info windows, etc. */ }
       
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)