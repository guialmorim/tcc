import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import InputButton from './components/InputButton';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';

export default function Home() {
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		return onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					name: user.displayName,
					photoUrl: user.photoURL,
				});
			} else {
				setUser(null);
				router.push('/login');
			}
		});
	}, [router]);

	return (
		<Wrapper>
			<Map />
			<ActionItems>
				<Header user={user} />
				<ActionButtons />
				<InputButton />
			</ActionItems>
		</Wrapper>
	);
}

const Wrapper = tw.div`
  flex flex-col bg-gray-100 h-screen
`;

const ActionItems = tw.div`
  flex-1
  p-4
`;
