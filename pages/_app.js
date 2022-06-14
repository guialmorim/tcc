import '../styles/globals.css';
import '../styles/nprogress.css';
import '../styles/navbar.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';

import CartProvider from '../pages/components/CartProvider';
import DrawerCart from '../pages/components/DrawerCart';
import Navbar from '../pages/components/Navbar';
import { UserAuthContextProvider } from '../contexts/UserAuthContext';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter();
	const [isDrawerCartOpen, setIsDrawerCartOpen] = useState(false);

	const isLoginPage = pathname === '/login';

	return (
		<ChakraProvider>
			<CartProvider currency="BRL">
				<UserAuthContextProvider>
					<DrawerCart
						isOpen={isDrawerCartOpen}
						onClose={() => setIsDrawerCartOpen(false)}
					/>
					<Component {...pageProps} />
					{!isLoginPage && (
						<Navbar
							pathname={pathname}
							OpenCartDrawer={() => setIsDrawerCartOpen(!isDrawerCartOpen)}
						/>
					)}
				</UserAuthContextProvider>
			</CartProvider>
		</ChakraProvider>
	);
}

export default MyApp;
