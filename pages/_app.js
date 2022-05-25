import '../styles/globals.css';
import '../styles/nprogress.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NProgress from 'nprogress';
import Router from 'next/router';

import CartProvider from '../pages/components/CartProvider';
import DrawerCart from '../pages/components/DrawerCart';
import NavigationBar from '../pages/components/NavigationBar';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
	const [isDrawerCartOpen, setIsDrawerCartOpen] = useState(false);

	return (
		<ChakraProvider>
			<CartProvider>
				<NavigationBar
					OpenCartDrawer={() => setIsDrawerCartOpen(!isDrawerCartOpen)}
				/>
				<Component {...pageProps} />
				<DrawerCart
					isOpen={isDrawerCartOpen}
					onClose={() => setIsDrawerCartOpen(false)}
				/>
			</CartProvider>
		</ChakraProvider>
	);
}

export default MyApp;
