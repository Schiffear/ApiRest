import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Nav from '../Nav';


const libraries = ['places'];
const mapContainerStyle = {
width: '100%',
height: '100vh'
};
const center = {
lat: -37.48,
lng: 144.57,
};

const Map = () => {
const { isLoaded } = useLoadScript({
googleMapsApiKey: 'AIzaSyBN543ZhuosOOOSSWbE9BFKtUyZRWTkszA',
libraries
});

const renderMap = () => {
return (
<>
<GoogleMap
       zoom={14}
       center={center}
       mapContainerClassName='map-container'
       mapContainerStyle={mapContainerStyle}
     >
<Marker position={center} />
</GoogleMap>
</>
);
};

return isLoaded ? renderMap() : <div>Loading...</div>;
};

export default Map;