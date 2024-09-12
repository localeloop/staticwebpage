import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    width: "100vw",
    height: "50vh"
};

const center = {
    lat: 51.214969635009766,
    lng: -0.7992956638336182
}

const GoogleMapComponent: React.FC = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDRS0kNFrZUuCfm2kfaBwdkaI6KExNbScw'
    });

    if (!isLoaded) return <div>is loading...</div>

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={19}
        >
            <Marker position={center}/>
        </GoogleMap>
    )
}

export default GoogleMapComponent