import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';
import { useShoppingCart } from 'use-shopping-cart';
import { fetcher } from '../lib/utils';
import { useUserAuth } from '../contexts/UserAuthContext';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import axios from 'axios';

const Success = () => {
	const [ticketSaved, setTicketSaved] = useState(false);

	const {
		query: { session_id },
	} = useRouter();

	const { clearCart } = useShoppingCart();
	const { user } = useUserAuth();

	const { data, error } = useSWR(
		() => `/api/checkout_sessions/${session_id}`,
		fetcher
	);

	//console.log(user);

	function saveTicketInDatabase() {
		const { id } = data;
		const { email } = user;

		axios
			.post('/api/tickets', {
				paymentId: id,
				userId: email,
			})
			.then(function ({ data, status }) {
				const { success } = data;
				return success && status === 200;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	useEffect(() => {
		if (data && user && !ticketSaved) {
			const ticketSaved = saveTicketInDatabase();
			setTicketSaved(ticketSaved);
			clearCart();
		}
	}, [data, user]);

	return (
		<div className="container h-screen xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
			{error ? (
				<Box textAlign="center" py={10} px={6}>
					<Box display="inline-block">
						<Flex
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							bg={'red.500'}
							rounded={'50px'}
							w={'55px'}
							h={'55px'}
							textAlign="center"
						>
							<CloseIcon boxSize={'20px'} color={'white'} />
						</Flex>
					</Box>
					<Heading as="h2" size="xl" mt={6} mb={2}>
						Ops, algo deu errado!
					</Heading>
					<Text color={'gray.500'}>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua.
					</Text>
				</Box>
			) : !data || !user ? (
				<div className="p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto">
					<p className="text-lg animate-pulse">Carregando...</p>
				</div>
			) : (
				<Box textAlign="center" py={10} px={6}>
					<CheckCircleIcon boxSize={'50px'} color={'green.500'} />
					<Heading as="h2" size="xl" mt={6} mb={2}>
						Obrigado pelo seu pedido!
					</Heading>
					<Text color={'gray.500'}>
						Cheque seu inbox para visualizar o recibo.
					</Text>
					<Text color={'blue.400'} as="u">
						<Link href="/">
							<a>Voltar para o início</a>
						</Link>
					</Text>
				</Box>
			)}
		</div>
	);
};

export default Success;
