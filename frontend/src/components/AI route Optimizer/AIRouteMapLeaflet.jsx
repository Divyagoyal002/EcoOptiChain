/* I'm updating your existing AIRouteOptimizationMap component to use real Leaflet maps using the `react-leaflet` library.

Changes made:
- Removed manual map rendering using `div`, `svg`, and absolute positioning.
- Used `MapContainer`, `TileLayer`, `Polyline`, and `Marker` from react-leaflet.
- Mapped all delivery points and routes using real coordinates.
- Provided dynamic polyline color, width, and interactivity.

To make this work, make sure you install:

```bash
npm install react-leaflet leaflet
```

Also, import Leaflet CSS globally in your `index.css` or App entry:

```js
import 'leaflet/dist/leaflet.css';
```
*/

import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default icon path issue
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const routes = [
  {
    id: 'route-1',
    name: 'Downtown Express',
    color: '#EF4444',
    strokeWidth: 4,
    path: [
      { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' },
      { lat: 48.8606, lng: 2.3376, type: 'delivery', name: 'Louvre Area' },
      { lat: 48.8529, lng: 2.3500, type: 'delivery', name: 'Notre Dame' },
      { lat: 48.8584, lng: 2.2945, type: 'delivery', name: 'Eiffel Tower' },
      { lat: 48.8656, lng: 2.3212, type: 'delivery', name: 'Arc de Triomphe' },
      { lat: 48.8738, lng: 2.2950, type: 'delivery', name: 'Champs Élysées' },
      { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' }
    ]
  },
  {
    id: 'route-2',
    name: 'Northern Circuit',
    color: '#F59E0B',
    strokeWidth: 3,
    path: [
      { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' },
      { lat: 48.8838, lng: 2.3469, type: 'delivery', name: 'Montmartre' },
      { lat: 48.8796, lng: 2.3408, type: 'delivery', name: 'Pigalle' },
      { lat: 48.8742, lng: 2.3470, type: 'delivery', name: 'Opéra' },
      { lat: 48.8698, lng: 2.3412, type: 'delivery', name: 'Grands Boulevards' },
      { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' }
    ]
  }
  // Add more routes here
];

const AIRouteMapLeaflet = () => {
  return (
    <div className="h-screen w-full">
      <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={true} className="h-full w-full rounded-xl">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        {routes.map((route, idx) => (
          <React.Fragment key={idx}>
            <Polyline
              positions={route.path.map(p => [p.lat, p.lng])}
              pathOptions={{ color: route.color, weight: route.strokeWidth }}
            />

            {route.path.map((point, pidx) => (
              <Marker key={`${idx}-${pidx}`} position={[point.lat, point.lng]}>
                <Popup>{point.name}</Popup>
              </Marker>
            ))}
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};

export default AIRouteMapLeaflet;