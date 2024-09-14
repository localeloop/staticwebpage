import React, { lazy } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Spinner = lazy(() => import('./Spinner'))

const mapContainerStyle = {
    width: "100vw",
    height: "50vh"
};

const center = {
    lat: 51.214969635009766,
    lng: -0.7992956638336182
}

const GoogleMapComponent: React.FC = () => {
    const {isInView, elementRef} = useIntersectionObserver({
        threshold: 0.1
    })

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDRS0kNFrZUuCfm2kfaBwdkaI6KExNbScw'
    });

    if (!isLoaded) return <Spinner />

    return (
        <div ref={elementRef} aria-label="Google Map showing the location of the Queen's Head">
            {isInView && (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={19}
                >
                    <Marker position={center}/>
                </GoogleMap>
            )}
        </div>
    );
}

export default GoogleMapComponent