import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import InputButton from './components/InputButton';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import products from '../products';
import ProductCard from './components/ProductCard';

export default function Home() {
	const [user, setUser] = useState(null);
	const router = useRouter();
	const [disabled, setDisabled] = useState(false);

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
			{/* <ActionItems>
				<Header user={user} />
				<ActionButtons />
				<InputButton />
			</ActionItems> */}

			{/* <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							disabled={disabled}
							onClickAdd={() => setDisabled(true)}
							onAddEnded={() => setDisabled(false)}
							{...product}
						/>
					))}
				</div>
			</div> */}
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
