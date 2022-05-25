import React, { ReactNode } from 'react';
import { CartProvider as CartProviderShoppingCart } from 'use-shopping-cart';
import getStripe from '../../lib/get-stripe';

const CartProvider = ({ children }) => (
	<CartProviderShoppingCart mode="checkout-session" currency="brl">
		<>{children}</>
	</CartProviderShoppingCart>
);

export default CartProvider;
