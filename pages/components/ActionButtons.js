import Link from 'next/link';
import tw from 'tailwind-styled-components';

function ActionButtons() {
	return (
		<ActionButtonsWrapper>
			<Link href="/search">
				<ActionButton>
					<ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1636501380/assets/7c/0d98ca-0968-4985-9eae-693ec18fde03/original/UberX-Share-Icon.png" />
					Ride
				</ActionButton>
			</Link>
			<ActionButton>
				<ActionButtonImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Circle-icons-bike.svg/2048px-Circle-icons-bike.svg.png" />
				Wheels
			</ActionButton>
			<ActionButton>
				<ActionButtonImage src="https://www.atepi.com.br/wp-content/uploads/2018/06/calendar-icon-300x300.png" />
				Reserve
			</ActionButton>
		</ActionButtonsWrapper>
	);
}

const ActionButtonsWrapper = tw.div`
     flex
`;

const ActionButton = tw.div`
     flex
     bg-gray-200
     flex-1
     m-1
     h-32
     items-center
     flex-col
     justify-center
     rounded-lg
     transform
     hover:scale-105
     transition
     text-xl
	cursor-pointer
`;

const ActionButtonImage = tw.img`
     h-3/5
`;

export default ActionButtons;
