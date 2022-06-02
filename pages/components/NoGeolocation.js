import { useState } from 'react';
import {
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen({ checkGeolocation }) {
	const [loading, setLoading] = useState(false);

	function delay(delayInms) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(2);
			}, delayInms);
		});
	}

	async function tryAgain() {
		setLoading(true);

		await delay(1000);

		if (typeof checkGeolocation === 'function') {
			checkGeolocation();
		}
		setLoading(false);
	}

	return (
		<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
			<Flex p={8} flex={1} align={'center'} justify={'center'}>
				<Stack spacing={6} w={'full'} maxW={'lg'}>
					<Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
						<Text
							as={'span'}
							position={'relative'}
							_after={{
								content: "''",
								width: 'full',
								height: useBreakpointValue({ base: '20%', md: '30%' }),
								position: 'absolute',
								bottom: 1,
								left: 0,
								bg: 'purple.400',
								zIndex: -1,
							}}
						>
							Ops!
						</Text>
						<br />{' '}
						<Text color={'purple.400'} as={'span'}>
							Parece que sua localização está desativada!
						</Text>{' '}
					</Heading>
					<Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
						Permita que a aplicação acesse sua localização e tente novamente
						clicando no botão abaixo.
					</Text>
					<Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
						<Button
							isLoading={loading}
							loadingText="Carregando..."
							rounded={'full'}
							bg={'purple.400'}
							color={'white'}
							_hover={{
								bg: 'purple.500',
							}}
							onClick={tryAgain}
						>
							Tentar Novamente
						</Button>
					</Stack>
				</Stack>
			</Flex>
		</Stack>
	);
}
