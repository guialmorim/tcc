import tw from 'tailwind-styled-components';
import BackButton from './components/BackButton';

function Profile() {
	return (
		<Wrapper>
			<BackButton path="/" />
			<Text>Profile</Text>
		</Wrapper>
	);
}

const Wrapper = tw.div`
  bg-gray-200
  h-screen
  flex
  flex-col
  justify-center
  align-center
  px-3
`;

const Text = tw.h1`
     text-black
     text-xl
`;

export default Profile;
