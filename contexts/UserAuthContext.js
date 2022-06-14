import { createContext, useState, useContext, useEffect } from 'react';
import {
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut as signOutFirebase,
} from 'firebase/auth';

import { auth, provider } from '../firebase';
import { useRouter } from 'next/router';

export const UserAuthContext = createContext({});
export const useUserAuth = () => useContext(UserAuthContext);

export const UserAuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const router = useRouter();

	function signIn() {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				setUser(user);
				router.push('/');
			})
			.catch((error) => {
				console.error(error);
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	}

	function signOut() {
		signOutFirebase(auth);
		setUser(null);
		router.push('/login');
	}

	useEffect(() => {
		return onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				console.log(user);
			} else {
				setUser(null);
				router.push('/login');
			}
		});
	}, []);

	return (
		<UserAuthContext.Provider
			value={{
				user,
				signIn,
				signOut,
			}}
		>
			{children}
		</UserAuthContext.Provider>
	);
};
