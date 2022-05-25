import tw from 'tailwind-styled-components';
import Link from 'next/link';

function NavigationBar({ path = '/', OpenCartDrawer }) {
	return (
		<ButtonContainer>
			<Link href={path}>
				<BackButton src="https://cdn-icons-png.flaticon.com/512/109/109618.png" />
			</Link>
			<a onClick={OpenCartDrawer}>carrinho</a>
		</ButtonContainer>
	);
}

const ButtonContainer = tw.div`
  bg-white
  px-4
  py-2
`;

const BackButton = tw.img`
  h-10
  cursor-pointer
`;

export default NavigationBar;
