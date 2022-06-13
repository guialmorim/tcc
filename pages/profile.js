import { useEffect, useState } from 'react';
import {
	Heading,
	Avatar,
	Box,
	Center,
	Text,
	Stack,
	Button,
	CircularProgress,
	Badge,
} from '@chakra-ui/react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';

export default function SocialProfileSimple() {
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		return onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
				router.push('/login');
			}
		});
	}, [router]);

	console.log(user);

	return user ? (
		<Center py={6}>
			<Box
				maxW={'320px'}
				w={'full'}
				boxShadow={'2xl'}
				rounded={'lg'}
				p={6}
				textAlign={'center'}
			>
				<Avatar
					size={'xl'}
					src={user.photoURL}
					alt={'Avatar Alt'}
					mb={4}
					pos={'relative'}
					_after={{
						content: '""',
						w: 4,
						h: 4,
						bg: 'green.300',
						border: '2px solid white',
						rounded: 'full',
						pos: 'absolute',
						bottom: 0,
						right: 3,
					}}
				/>
				<Heading fontSize={'2xl'} fontFamily={'body'}>
					{user.displayName}
				</Heading>
				<Text fontWeight={600} color={'gray.500'} mb={4}>
					{user.email}
				</Text>
				<Text textAlign={'center'} px={3}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor.
				</Text>

				<Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
					<Badge px={2} py={1} fontWeight={'400'}>
						#easy
					</Badge>
					<Badge px={2} py={1} fontWeight={'400'}>
						#cars
					</Badge>
					<Badge px={2} py={1} fontWeight={'400'}>
						#parking
					</Badge>
				</Stack>

				<Stack mt={8} direction={'row'} spacing={4}>
					<Button
						onClick={signOut}
						flex={1}
						fontSize={'sm'}
						rounded={'full'}
						bg={'red.400'}
						color={'white'}
						boxShadow={
							'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
						}
						_hover={{
							bg: 'blue.500',
						}}
						_focus={{
							bg: 'blue.500',
						}}
					>
						Sair
					</Button>
				</Stack>
			</Box>
		</Center>
	) : (
		<Box h="100vh" flex={1} bg="white">
			<Box
				position="absolute"
				top="50%"
				left="50%"
				transform="translate(-50%, -50%)"
			>
				<CircularProgress isIndeterminate color="purple.500" />
			</Box>
		</Box>
	);
}
