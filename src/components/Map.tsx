
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = React.useState<string>("");

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // You would need to replace this with your actual Mapbox token
    // For now we'll use a temporary input field for the user to enter their token
    if (!mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    // Explicitly type as [number, number] to match LngLatLike
    const silvassaCoordinates: [number, number] = [73.0960, 20.2704]; // Coordinates for Silvassa
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: silvassaCoordinates,
      zoom: 14
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add a marker for the location
    new mapboxgl.Marker()
      .setLngLat(silvassaCoordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          '<h3>Daman Packaging</h3><p>SHED NO.2, PLOT NO. 50, GOVERNMENT INDUSTRIAL ESTATE, MASAT, SILVASSA</p>'
        )
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="w-full">
      {!mapboxToken && (
        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="mb-2 text-sm">To view the map, please enter your Mapbox public token:</p>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter your Mapbox token"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="mt-2 text-xs text-gray-500">
            You can get a token by creating an account at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">mapbox.com</a>
          </p>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-[400px] rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;
