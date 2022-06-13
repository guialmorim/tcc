import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import NoGeolocation from './components/NoGeolocation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import { Toast } from '../utils/toast';

export default function Home() {
	const [user, setUser] = useState(null);
	const router = useRouter();
	const [error, setError] = useState(null);
	const [userLocation, setUserLocation] = useState({
		latitude: null,
		longitude: null,
	});

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

		//setError(error);

		// Toast({
		// 	title: `Ops! ${error.message}`,
		// 	description: errorMessage,
		// 	status: 'error',
		// 	duration: 1000 * 60 * 60, // 1 Hour
		// });
	}

	function checkGeolocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) =>
					setUserLocation({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					}),
				(error) => showError(error)
			);
			navigator.geolocation.watchPosition(
				(position) =>
					setUserLocation({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					}),
				(error) => showError(error)
			);
		} else {
			console.warn('NO NAVIGATOR');
		}
	}

	useEffect(() => {
		return onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					name: user.displayName,
					photoUrl: user.photoURL,
				});
			} else {
				setUser(null);
				router.push('/login');
			}
		});
	}, [router]);

	useEffect(() => {
		checkGeolocation();
	}, [userLocation]);

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
