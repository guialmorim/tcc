import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';

function Login() {
	const router = useRouter();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				router.push('/');
			}
		});
	});

	return (
		<Wrapper>
			<SignInButton onClick={() => signInWithPopup(auth, provider)}>
				Sign In With Google
			</SignInButton>
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
  px-3
`;

const SignInButton = tw.button`
     bg-black
     text-white
     text-center
     px-4
     py-3
     text-2xl
     rounded-lg
     cursor-pointer
     w-full
`;

export default Login;
