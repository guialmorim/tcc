import React, { useState, useMemo, useEffect } from 'react';
import MapGl, {
	Marker,
	Popup,
	NavigationControl,
	FullscreenControl,
	ScaleControl,
	GeolocateControl,
} from 'react-map-gl';
import { Skeleton, Box, CircularProgress } from '@chakra-ui/react';
import Pin from './pin';
import PopUp from './PopUp';

import PARKINGS from '../../utils/parkings.json';

function Map({ userLocation }) {
	const [popupInfo, setPopupInfo] = useState(null);
	const [viewport, setViewport] = useState({ latitude: null, longitude: null });

	useEffect(() => {
		console.log(userLocation);
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				setViewport({
					latitude: pos.coords.latitude,
					longitude: pos.coords.longitude,
				});
			},
			(error) => console.error(error)
		);
	}, [userLocation]);

	const pins = useMemo(
		() =>
			PARKINGS.map((parking, index) => (
				<Marker
					key={`marker-${index}`}
					longitude={parking.longitude}
					latitude={parking.latitude}
					anchor="bottom"
					onClick={(e) => {
						e.originalEvent.stopPropagation();
						setPopupInfo(parking);
					}}
				>
					<Pin />
				</Marker>
			)),
		[]
	);

	if (!viewport.latitude || !viewport.longitude) {
		return (
			<Box h="100%" flex={1} bg="white">
				<Box
					position="absolute"
					top="50%"
					left="50%"
					transform="translate(-50%, -50%)"
				>
					<CircularProgress isIndeterminate color="blue.500" />
				</Box>
				<Skeleton flex={1} h="100%" startColor="gray.100" endColor="gray.300" />
			</Box>
		);
	}

	return (
		<MapGl
			initialViewState={{
				// latitude: viewport.latitude,
				// longitude: viewport.longitude,
				latitude: -23.714502527723095,
				longitude: -46.5396429507236,
				zoom: 15,
				bearing: 0,
				pitch: 0,
			}}
			style={{ flex: 1, height: '100%' }}
			mapStyle="mapbox://styles/mapbox/light-v10" //"mapbox://styles/mapbox/dark-v9"
			mapboxAccessToken="pk.eyJ1IjoiZ3VpYWxtb3JpbSIsImEiOiJjbDMwcnMyN2EwYnN2M2pvNTBoZGR5MnNmIn0.hoP1QX5JPC1gPv8S456jwg"
		>
			<GeolocateControl
				showUserHeading={false}
				showUserLocation={true}
				showAccuracyCircle={true}
				trackUserLocation={true}
				position="top-left"
				onGeolocate={(evt) => console.log('onGeolocate', evt)}
				onTrackUserLocationStart={(evt) =>
					console.log('onTrackUserLocationStart', evt)
				}
				onTrackUserLocationEnd={(evt) =>
					console.log('onTrackUserLocationEnd', evt)
				}
			/>
			<FullscreenControl position="top-left" />
			<NavigationControl position="top-left" />
			<ScaleControl />

			{pins}

			{popupInfo && (
				<Popup
					style={{ padding: 0, backgroundColor: 'transparent' }}
					longitude={Number(popupInfo.longitude)}
					latitude={Number(popupInfo.latitude)}
					onClose={() => setPopupInfo(null)}
					closeButton={false}
					closeOnMove={true}
					closeOnClick={true}
				>
					<PopUp onClosePopup={() => setPopupInfo(null)} parking={popupInfo} />
				</Popup>
			)}
		</MapGl>
	);
}

export default Map;
