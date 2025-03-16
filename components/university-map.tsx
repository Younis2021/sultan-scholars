'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Placeholder component to show while map is loading
function MapPlaceholder() {
  return (
    <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
      <p className="text-muted-foreground">Loading map...</p>
    </div>
  );
}

type University = {
  id: string;
  name: string;
  city: string;
  coordinates?: [number, number];
  ranking: string;
  established: number;
  programs: any[];
  coverImage: string;
  tuitionRange: [number, number];
  internationalStudents: number;
};

type UniversityMapProps = {
  universities: University[];
};

// This is a client-side only component
function UniversityMapClient({ universities }: UniversityMapProps) {
  // Default coordinates for Turkey if no universities are provided
  const defaultCenter: [number, number] = [39.9334, 32.8597];
  
  // Add coordinates for each university
  const universitiesWithCoordinates = universities.map(uni => ({
    ...uni,
    coordinates: uni.coordinates || getDefaultCoordinates(uni.id)
  }));

  // Import these dynamically to avoid SSR issues
  const [MapComponents, setMapComponents] = useState<any>(null);

  useEffect(() => {
    // Only import on client side
    async function loadMap() {
      try {
        const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
        const L = await import('leaflet');
        
        // Fix for default marker icons
        const icon = L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        // Custom marker colors based on ranking
        const createCustomIcon = (ranking: string) => {
          const color = ranking.includes('500') ? '#e81c4f' :
                        ranking.includes('600') ? '#2563eb' :
                        ranking.includes('800') ? '#00b4d8' :
                        '#64748b';
          
          return L.divIcon({
            className: 'custom-div-icon',
            html: `
              <div style="
                background-color: ${color};
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 14px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                border: 2px solid white;
              ">
                <span style="color: white;">U</span>
              </div>
            `,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
          });
        };

        setMapComponents({
          MapContainer,
          TileLayer,
          Marker,
          Popup,
          icon,
          createCustomIcon,
          L
        });
      } catch (error) {
        console.error('Error loading map components:', error);
      }
    }

    loadMap();
  }, []);

  if (!MapComponents) {
    return <MapPlaceholder />;
  }

  const { MapContainer, TileLayer, Marker, Popup, createCustomIcon } = MapComponents;

  return (
    <MapContainer 
      center={defaultCenter} 
      zoom={6} 
      style={{ height: '600px', width: '100%' }}
      scrollWheelZoom={true}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {universitiesWithCoordinates.map((university) => (
        <Marker 
          key={university.id}
          position={university.coordinates}
          icon={createCustomIcon(university.ranking)}
        >
          <Popup>
            <div className="w-64">
              <img 
                src={university.coverImage} 
                alt={university.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="font-bold text-lg mb-2">{university.name}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>📍 {university.city}</p>
                  <p>🏆 {university.ranking}</p>
                  <p>📅 Est. {university.established}</p>
                  <p>💰 ${university.tuitionRange[0].toLocaleString()} - ${university.tuitionRange[1].toLocaleString()}/year</p>
                  <p>🌍 {university.internationalStudents.toLocaleString()}+ international students</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {university.programs && university.programs.slice(0, 3).map((program, index) => (
                    <span 
                      key={index}
                      className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                    >
                      {program.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

function getDefaultCoordinates(id: string): [number, number] {
  switch (id) {
    case 'istanbul-technical-university':
      return [41.1054, 29.0244];
    case 'middle-east-technical-university':
      return [39.8915, 32.7805];
    default:
      return [39.9334, 32.8597]; // Default coordinates for Turkey
  }
}

// Export a dynamic component with SSR disabled
export default dynamic(() => Promise.resolve(UniversityMapClient), {
  ssr: false,
  loading: () => <MapPlaceholder />
});