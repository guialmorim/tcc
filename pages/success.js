import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useShoppingCart } from 'use-shopping-cart';
import { fetcher } from '../lib/utils';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';

const Success = () => {
	const {
		query: { session_id },
	} = useRouter();

	const { clearCart } = useShoppingCart();

	const { data, error } = useSWR(
		() => `/api/checkout_sessions/${session_id}`,
		fetcher
	);

	useEffect(() => {
		console.log(data);
		if (data) {
			clearCart();
		}
	}, [data]);

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
						Sorry, something went wrong!
					</Heading>
					<Text color={'gray.500'}>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua.
					</Text>
				</Box>
			) : !data ? (
				<div className="p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto">
					<p className="text-lg animate-pulse">Loading...</p>
				</div>
			) : (
				<Box textAlign="center" py={10} px={6}>
					<CheckCircleIcon boxSize={'50px'} color={'green.500'} />
					<Heading as="h2" size="xl" mt={6} mb={2}>
						Thanks for your order!
					</Heading>
					<Text color={'gray.500'}>Check your inbox for the receipt.</Text>
				</Box>
			)}
		</div>
	);
};

export default Success;
