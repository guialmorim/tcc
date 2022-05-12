import Link from 'next/link';
import tw from 'tailwind-styled-components';

function BackButton({ path = '/' }) {
	return (
		<ButtonContainer>
			<Link href={path}>
				<BackButtonImage src="https://cdn-icons-png.flaticon.com/512/109/109618.png" />
			</Link>
		</ButtonContainer>
	);
}

const ButtonContainer = tw.div`
  rounded-full
  absolute
  top-4
  left-4
  z-10
  bg-white
  shadow-md
  h-11
  p-2
`;

const BackButtonImage = tw.img`
     h-full
     object-contain
`;

export default BackButton;
