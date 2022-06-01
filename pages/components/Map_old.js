import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1IjoiZ3VpYWxtb3JpbSIsImEiOiJjbDMwcnMyN2EwYnN2M2pvNTBoZGR5MnNmIn0.hoP1QX5JPC1gPv8S456jwg';

function Map({ pickupCoordinates, dropoffCoordinates }) {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-46.53958927671869, -23.714671828849255],
			zoom: 10,
		});

		if (pickupCoordinates) addToMap(map, pickupCoordinates);
		if (dropoffCoordinates) addToMap(map, dropoffCoordinates);
		if (pickupCoordinates && dropoffCoordinates) {
			map.fitBounds([pickupCoordinates, dropoffCoordinates], {
				padding: 60,
			});
		}
	}, [pickupCoordinates, dropoffCoordinates]);

	const addToMap = (map, coordinates) => {
		const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
	};

	return <MapWrapper id="map"></MapWrapper>;
}

const MapWrapper = tw.div`
  bg-red-500 flex-1
`;

export default Map;
