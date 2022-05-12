import { useEffect, useState } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import BackButton from './components/BackButton';
import { useRouter } from 'next/router';

function Confirm() {
	const router = useRouter();

	const { pickup, dropoff } = router.query;

	const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
	const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
	const [rideDuration, setRideDuration] = useState(0);

	const getPickupCoordinates = (pickup) => {
		const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`;
		fetch(
			endpoint +
				new URLSearchParams({
					access_token:
						'pk.eyJ1IjoiZ3VpYWxtb3JpbSIsImEiOiJjbDMwcnMyN2EwYnN2M2pvNTBoZGR5MnNmIn0.hoP1QX5JPC1gPv8S456jwg',
					limit: 1,
				})
		)
			.then((response) => response.json())
			.then((data) => setPickupCoordinates(data.features[0].center))
			.catch((error) => console.error(error));
	};

	const getDropoffCoordinates = (dropoff) => {
		const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`;
		fetch(
			endpoint +
				new URLSearchParams({
					access_token:
						'pk.eyJ1IjoiZ3VpYWxtb3JpbSIsImEiOiJjbDMwcnMyN2EwYnN2M2pvNTBoZGR5MnNmIn0.hoP1QX5JPC1gPv8S456jwg',
					limit: 1,
				})
		)
			.then((response) => response.json())
			.then((data) => setDropoffCoordinates(data.features[0].center))
			.catch((error) => console.error(error));
	};

	const getRideDuration = () => {
		const endpoint =
			`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
			new URLSearchParams({
				access_token:
					'pk.eyJ1IjoiZ3VpYWxtb3JpbSIsImEiOiJjbDMwcnMyN2EwYnN2M2pvNTBoZGR5MnNmIn0.hoP1QX5JPC1gPv8S456jwg',
			});

		fetch(endpoint)
			.then((response) => response.json())
			.then((data) => setRideDuration(data.routes[0].duration))
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		getPickupCoordinates(pickup);
		getDropoffCoordinates(dropoff);
	}, [pickup, dropoff]);

	return (
		<Wrapper>
			<BackButton path="/search" />
			<Map
				pickupCoordinates={pickupCoordinates}
				dropoffCoordinates={dropoffCoordinates}
			/>
			<RideContainer>
				<ConfirmButtonContainer onClick={getRideDuration}>
					Ride Duration
				</ConfirmButtonContainer>
				Ride Duration: {rideDuration} segundos
			</RideContainer>
		</Wrapper>
	);
}

export default Confirm;

const Wrapper = tw.div`
     flex
     h-screen
     flex-col
`;

const RideContainer = tw.div`
     flex-1
`;

const ConfirmButtonContainer = tw.div`
  bg-black
  text-white
  text-center
  mt-2
  mx-4
  px-4
  py-3
  text-2xl
  cursor-pointer
`;
