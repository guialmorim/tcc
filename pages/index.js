import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import NoGeolocation from './components/NoGeolocation';
//import { Toast } from '../utils/toast';

export default function Home() {
	const [error, setError] = useState(null);
	//const [loading, setLoading] = useState(false);
	const [userLocation, setUserLocation] = useState({
		latitude: null,
		longitude: null,
	});

	const TIMEOUT_TO_GET_USER_POSITION = 60000;

	function checkGeolocation() {
		//setLoading(true);
		if (navigator.geolocation) {
			//console.log('aaaaaa passei');
			navigator.geolocation.watchPosition(
				(position) => {
					//console.log(position);
					setUserLocation({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
					//setLoading(false);
				},
				(error) => {
					showError(error);
					//setLoading(false);
				},
				{
					maximumAge: Infinity,
					timeout: TIMEOUT_TO_GET_USER_POSITION,
					enableHighAccuracy: false,
				}
			);
		} else {
			console.warn('NO NAVIGATOR');
		}

		//console.log(userLocation);
	}

	//setInterval(checkGeolocation, TIMEOUT_TO_GET_USER_POSITION);

	function showError(error) {
		let errorMessage = '';
		switch (error.code) {
			case error.PERMISSION_DENIED:
				errorMessage =
					'Usuário negou a solicitação de acesso à geolocalização.';
				break;
			case error.POSITION_UNAVAILABLE:
				errorMessage = 'Informações de geolocalização indisponíveis.';
				break;
			case error.TIMEOUT:
				errorMessage = 'Tempo limite esgotado para acessar a geolocalização.';
				break;
			case error.UNKNOWN_ERROR:
				errorMessage = 'Um erro inesperado ocorreu.';
				break;
		}
		console.warn(errorMessage);

		setError(error);

		// Toast({
		// 	title: `Ops! ${error.message}`,
		// 	description: errorMessage,
		// 	status: 'error',
		// 	duration: 1000 * 60 * 60, // 1 Hour
		// });
	}

	useEffect(() => {
		checkGeolocation();
	}, []);

	return (
		<Wrapper>
			{userLocation.latitude && userLocation.longitude ? (
				<Map userLocation={userLocation} />
			) : (
				<NoGeolocation error={error} checkGeolocation={checkGeolocation} />
			)}
		</Wrapper>
	);
}

const Wrapper = tw.div`
  flex flex-col bg-gray-100 h-screen
`;
