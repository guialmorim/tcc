import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAHE6UfjtjPRhONnCET6cEOBCMiH9KmDxE',
	authDomain: 'tcc-unip-3942e.firebaseapp.com',
	projectId: 'tcc-unip-3942e',
	storageBucket: 'tcc-unip-3942e.appspot.com',
	messagingSenderId: '404231992737',
	appId: '1:404231992737:web:0f6dbfa174886ab3cc87e0',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
