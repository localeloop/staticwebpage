import React, { lazy } from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Spinner = lazy(() => import('./Spinner'))

const mapContainerStyle = {
    width: "100vw",
    height: "50vh"
};

const position = {
    lat: 51.214969635009766,
    lng: -0.7992956638336182
}

const GoogleMapComponent: React.FC = () => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';
    const mapID = process.env.REACT_APP_GOOGLE_MAP_ID as string;
    const {isInView, elementRef} = useIntersectionObserver({
        threshold: 0.1
    })


    // if (!isLoaded) return <Spinner />

    return (
        <div ref={elementRef} aria-label="Google Map showing the location of the Queen's Head">
            { isInView && (   
                <APIProvider apiKey={ googleMapsApiKey }>
                    <Map center={position} zoom={18} style={mapContainerStyle} mapId={mapID}>
                        <AdvancedMarker position={position} />
                    </Map>
                </APIProvider>
            )}
        </div>
    );
}

export default GoogleMapComponent

