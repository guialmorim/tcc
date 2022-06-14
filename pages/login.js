import { FcGoogle } from 'react-icons/fc';
import tw from 'tailwind-styled-components';
import { useUserAuth } from '../contexts/UserAuthContext';
import {
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	useBreakpointValue,
	Center,
	Text,
} from '@chakra-ui/react';

function Login() {
	const { signIn } = useUserAuth();
	return (
		<Wrapper>
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
									bg: 'blue.400',
									zIndex: -1,
								}}
							>
								Parker
							</Text>
							<br />{' '}
							<Text color={'blue.400'} as={'span'}>
								Your Parking Helper!
							</Text>{' '}
						</Heading>
						<Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
							The project board is an exclusive resource for contract work. It
							{"'"}s perfect for freelancers, agencies, and moonlighters.
						</Text>
						<Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
							<Button
								onClick={() => signIn()}
								w={'full'}
								variant={'outline'}
								bgColor={'white'}
								leftIcon={<FcGoogle />}
							>
								<Center>
									<Text>Sign in with Google</Text>
								</Center>
							</Button>
						</Stack>
					</Stack>
				</Flex>
				<Flex flex={1}>
					<Image
						alt={'Login Image'}
						objectFit={'cover'}
						src={
							'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
						}
					/>
				</Flex>
			</Stack>
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

`;

export default Login;
