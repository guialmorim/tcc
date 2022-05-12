import { useState } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import NavigationBar from './components/NavigationBar';

function Search() {
	const [pickup, setPickup] = useState('');
	const [dropoff, setDropoff] = useState('');

	return (
		<Wrapper>
			<NavigationBar path="/" />
			<InputContainer>
				<InputBoxes>
					<Input
						placeholder="Enter pickup location"
						value={pickup}
						onChange={(e) => setPickup(e.target.value)}
					/>
					<Input
						placeholder="Where to?"
						value={dropoff}
						onChange={(e) => setDropoff(e.target.value)}
					/>
				</InputBoxes>
			</InputContainer>
			<Link
				href={{
					pathname: '/confirm',
					query: {
						pickup,
						dropoff,
					},
				}}
			>
				<ConfirmButtonContainer>Confirm Locations</ConfirmButtonContainer>
			</Link>
		</Wrapper>
	);
}

export default Search;

const Wrapper = tw.div`
  bg-gray-200
  h-screen
`;

const InputContainer = tw.div`
  bg-white
  flex
  px-4
`;

const InputBoxes = tw.div`
  flex
  flex-col
  flex-1
`;

const Input = tw.input`
  h-10
  bg-gray-200
  my-2
  rounded-lg
  p-2
  outline-none
  border-none
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
  rounded-lg
  cursor-pointer
`;
