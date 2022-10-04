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
	Button,
} from '@chakra-ui/react';
import { WarningTwoIcon, RepeatClockIcon } from '@chakra-ui/icons';
import { fetcher } from '../lib/utils';
import QRCode from 'react-qr-code';
import { useUserAuth } from '../contexts/UserAuthContext';

function Ticket(props) {
	const { createdAt, expirationDate, paymentId, _id } = props;
	return (
		<Flex
			key={_id}
			boxShadow={'lg'}
			width={'full'}
			direction={'column-reverse'}
			rounded={'xl'}
			p={10}
			justifyContent={'space-between'}
			position={'relative'}
			margin="auto"
		>
			<Flex
				direction={'column'}
				textAlign={'left'}
				justifyContent={'space-between'}
				flex="1"
			>
				<chakra.p fontWeight={'medium'} fontSize={'10px'} pb={4} pt={2}>
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
			<Flex margin="auto">
				<QRCode value={paymentId} />
			</Flex>
		</Flex>
	);
}

export default function TicketsGrid({ host }) {
	const { user } = useUserAuth();
	console.log('Host: ', host);
	const [tickets, setTickets] = useState([]);
	const [loading, setLoading] = useState(true);

	function configRequestBaseUrl() {
		const env = process.env.NODE_ENV;
		if (env == 'development') {
			return 'http://localhost:3000';
		} else if (env == 'production') {
			return 'https://tcc-steel.vercel.app';
		}
	}

	useEffect(() => {
		if (user) {
			const endpoint = `${configRequestBaseUrl()}/api/tickets/${user.email}`;
			console.log('endpoint', endpoint);
			fetcher(endpoint)
				.then(({ success, data, error }) => {
					if (success) {
						//console.log('data', data);
						setTickets(data);
					} else {
						console.log('error', error);
					}
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
					setLoading(false);
				});
		}
	}, [user]);

	return loading ? (
		<Container>
			<Box h="100vh" padding="6" boxShadow="lg" bg="white">
				<SkeletonCircle size="10" />
				<SkeletonText mt="4" noOfLines={4} spacing="4" />
			</Box>
		</Container>
	) : tickets && tickets.length > 0 ? (
		<Container>
			<Flex
				textAlign={'center'}
				my={10}
				justifyContent={'center'}
				direction={'column'}
				width={'full'}
			>
				<Box width={'full'} margin={'auto'}>
					<chakra.h1 py={5} fontSize={48} fontWeight={'bold'}>
						Meus Tickets
					</chakra.h1>
				</Box>
				<SimpleGrid
					columns={1}
					spacing={'7'}
					mx={'auto'}
					mb={'var(--navigation-bar-height)'}
				>
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
						<a className="text-purple-400 hover:text-purple-300">aqui!</a>
					</Link>
				</Text>
				<Button
					my={2}
					rightIcon={<RepeatClockIcon />}
					colorScheme="purple"
					variant="outline"
					size="sm"
					onClick={() => window.location.reload()}
				>
					Recarregar
				</Button>
			</Box>
		</Container>
	);
}
