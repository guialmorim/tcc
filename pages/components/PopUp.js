import {
	Flex,
	Circle,
	Box,
	Image,
	Badge,
	useColorModeValue,
	Button,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { ArrowForwardIcon, SmallCloseIcon, AddIcon } from '@chakra-ui/icons';
import { Toast } from '../../utils/toast';
import { useShoppingCart } from 'use-shopping-cart';
import { formatCurrency } from '../../lib/utils';

function Rating({ rating, numReviews }) {
	return (
		<Flex p={5} w="full" alignItems="center" justifyContent="space-between">
			<Box>
				{Array(5)
					.fill('')
					.map((_, i) => {
						const roundedRating = Math.round(rating * 2) / 2;
						if (roundedRating - i >= 1) {
							return (
								<BsStarFill
									key={i}
									style={{ marginLeft: '1' }}
									color={i < rating ? 'teal.500' : 'gray.300'}
								/>
							);
						}
						if (roundedRating - i === 0.5) {
							return <BsStarHalf key={i} style={{ marginLeft: '0' }} />;
						}
						return <BsStar key={i} style={{ marginLeft: '0' }} />;
					})}
			</Box>
			<Box as="span" ml="0" color="gray.600" fontSize="sm">
				{numReviews} review{numReviews > 1 && 's'}
			</Box>
		</Flex>
	);
}

const configAddressName = (address = '') => address.replaceAll(' ', '+');

function generateGoogleMapsDeepLink(address) {
	const GOOGLE_MAPS_SEARCH_URL =
		'https://www.google.com/maps/search/?api=1&query=';

	const configuredGoogleMapsSearchUrl = `${GOOGLE_MAPS_SEARCH_URL}${configAddressName(
		address
	)}`;

	return configuredGoogleMapsSearchUrl;
}

function PopUp({ onClosePopup, parking }) {
	const { addItem } = useShoppingCart();

	const handleOnAddToCart = (event) => {
		event.preventDefault();
		addItem(parking);
		Toast({
			title: 'Ok!',
			description: 'Ticket adicionado no carrinho',
			status: 'success',
		});
	};

	return (
		<Flex p={0} w="full" alignItems="center" justifyContent="center">
			<Box
				bg={useColorModeValue('white', 'gray.800')}
				maxW="md"
				borderWidth="1px"
				rounded="lg"
				shadow="lg"
				position="relative"
			>
				{true && (
					<Circle
						size="10px"
						position="absolute"
						top={2}
						right={2}
						bg="gray.200"
						p={2}
						onClick={onClosePopup}
					>
						<SmallCloseIcon />
					</Circle>
				)}

				<Image
					src={parking.image}
					alt={`Picture of ${parking.name}`}
					roundedTop="lg"
				/>

				<Box p={3}>
					<Box d="flex" alignItems="baseline">
						{true && (
							<Badge rounded="full" px="2" fontSize="1.1em" colorScheme="gray">
								{formatCurrency(parking.price)}
							</Badge>
						)}
					</Box>
					<Flex mt="1" justifyContent="space-between" alignContent="center">
						<Box
							fontSize="md"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight"
							py={1}
						>
							{parking.name}
						</Box>
						<Box
							fontSize="sm"
							color={useColorModeValue('gray.800', 'white')}
						></Box>
					</Flex>

					<Flex justifyContent="space-between" alignContent="center" py={2}>
						{/* <Rating rating={parking.rating} numReviews={parking.numReviews} /> */}
						<Button
							as="a"
							size="xs"
							colorScheme="purple"
							rightIcon={<ArrowForwardIcon />}
							variant="outline"
							target="_blank"
							href={generateGoogleMapsDeepLink(parking.address)}
						>
							Ir para
						</Button>
						<Button
							size="xs"
							colorScheme="purple"
							rightIcon={<AddIcon />}
							onClick={handleOnAddToCart}
						>
							Comprar Ticket
						</Button>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
}

export default PopUp;
