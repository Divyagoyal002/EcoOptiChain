import React from 'react';

const RouteMap = ({ routeData }) => {
    return (
        <div className="w-full h-full">
            <h2 className="text-center text-xl font-semibold text-light-blue-600">Optimized Route</h2>
            <div className="map-container">
                <p className="text-center">Map will be displayed here based on the route data.</p>
            </div>
        </div>
    );
};

export default RouteMap;