import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
	Box,
	chakra,
	Container,
	Flex,
	SkeletonCircle,
	SkeletonText,
	SimpleGrid,
	Heading,
	Text,
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { fetcher } from '../lib/utils';
import QRCode from 'react-qr-code';

function Ticket(props) {
	const { createdAt, expirationDate, paymentId, _id } = props;
	console.log(_id);
	return (
		<Flex
			boxShadow={'lg'}
			maxW={'640px'}
			direction={{ base: 'column-reverse', md: 'row' }}
			width={'full'}
			rounded={'xl'}
			p={10}
			justifyContent={'space-between'}
			position={'relative'}
		>
			<Flex
				direction={'column'}
				textAlign={'left'}
				justifyContent={'space-between'}
			>
				<chakra.p fontWeight={'medium'} fontSize={'15px'} pb={4} pt={2}>
					{paymentId}
				</chakra.p>
				<chakra.p fontWeight={'bold'} fontSize={14}>
					Data da compra:
					<chakra.span fontWeight={'medium'} color={'gray.500'} ml={1}>
						{new Date(createdAt).toLocaleString()}
					</chakra.span>
				</chakra.p>
				<chakra.p fontWeight={'bold'} fontSize={14}>
					Data da expiração:
					<chakra.span fontWeight={'medium'} color={'gray.500'} ml={1}>
						{new Date(expirationDate).toLocaleString()}
					</chakra.span>
				</chakra.p>
			</Flex>
			<QRCode value={_id} />
		</Flex>
	);
}

export default function TicketsGrid() {
	const [tickets, setTickets] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const endpoint = 'http://localhost:3000/api/tickets';
		fetcher(endpoint)
			.then(({ success, data, error }) => {
				if (success) {
					console.log(data);
					setTickets(data);
				} else {
					console.log(error);
				}
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);

	return loading ? (
		<Container>
			<Box h="100vh" padding="6" boxShadow="lg" bg="white">
				<SkeletonCircle size="10" />
				<SkeletonText mt="4" noOfLines={4} spacing="4" />
			</Box>
		</Container>
	) : tickets && tickets.length > 0 ? (
		<Container h="100%">
			<Flex
				textAlign={'center'}
				my={10}
				justifyContent={'center'}
				direction={'column'}
				width={'full'}
			>
				<Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
					<chakra.h1 py={5} fontSize={48} fontWeight={'bold'}>
						Meus Tickets
					</chakra.h1>
				</Box>
				<SimpleGrid columns={{ base: 1, xl: 2 }} spacing={'7'} mx={'auto'}>
					{tickets.map((ticket, index) => (
						<Ticket key={index} {...ticket} index={index} />
					))}
				</SimpleGrid>
			</Flex>
		</Container>
	) : (
		<Container>
			<Box h="100vh" textAlign="center" py={10} px={6}>
				<WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
				<Heading as="h2" size="xl" mt={6} mb={2}>
					Sem Tickets no Momento
				</Heading>
				<Text color={'gray.500'}>
					Encontre um estacionamento perto de você e compre um ticket{' '}
					<Link href="/">
						<a className="text-primary">aqui!</a>
					</Link>
				</Text>
			</Box>
		</Container>
	);
}
