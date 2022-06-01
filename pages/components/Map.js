import React, { useState, useMemo, useEffect } from 'react';
import MapGl, {
	Marker,
	Popup,
	NavigationControl,
	FullscreenControl,
	ScaleControl,
	GeolocateControl,
} from 'react-map-gl';
import { Skeleton } from '@chakra-ui/react';
import Pin from './pin';
import PopUpStyle from './PopUpStyle';

import PARKINGS from '../../utils/parkings.json';

function Map() {
	const [popupInfo, setPopupInfo] = useState(null);
	const [viewport, setViewport] = useState({ latitude: null, longitude: null });

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				setViewport({
					latitude: pos.coords.latitude,
					longitude: pos.coords.longitude,
				});
			},
			(error) => console.error(error)
		);
	}, []);

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
			<Skeleton
				style={{ flex: 1, height: '100%' }}
				height="20px"
				// startColor="pink.500"
				// endColor="orange.500"
			/>
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
			mapStyle="mapbox://styles/mapbox/dark-v9"
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
					<PopUpStyle
						onClosePopup={() => setPopupInfo(null)}
						parking={popupInfo}
					/>
				</Popup>
			)}
		</MapGl>
	);
}

export default Map;
