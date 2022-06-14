import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useShoppingCart } from 'use-shopping-cart';
import axios from 'axios';
import { formatCurrency } from '../../lib/utils';
import getStripe from '../../lib/get-stripe';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';
import { WarningTwoIcon } from '@chakra-ui/icons';
import {
	Button,
	Flex,
	IconButton,
	Stack,
	Box,
	Heading,
	Text,
} from '@chakra-ui/react';

const Cart = () => {
	const {
		cartDetails,
		totalPrice,
		cartCount,
		incrementItem,
		decrementItem,
		removeItem,
		clearCart,
	} = useShoppingCart();
	const [redirecting, setRedirecting] = useState(false);

	const redirectToCheckout = async () => {
		// Create Stripe checkout
		const {
			data: { id },
		} = await axios.post('/api/checkout_sessions', {
			items: Object.entries(cartDetails).map(([_, product]) => {
				const { id, quantity } = product;

				//console.log(product);

				return {
					price: id,
					quantity,
				};
			}),
		});

		// Redirect to checkout
		const stripe = await getStripe();
		await stripe.redirectToCheckout({ sessionId: id });
	};

	const PackageTier = ({ product }) => {
		return (
			<Stack
				p={3}
				justifyContent={{
					base: 'flex-start',
					md: 'space-around',
				}}
				direction={{
					base: 'column',
					md: 'row',
				}}
				alignItems={{ md: 'center' }}
			>
				<Heading fontSize={23}>{product.name}</Heading>

				{/* Price + Actions */}
				<Flex alignItems="center" justifyContent="space-between">
					{/* Quantity */}
					<Flex alignItems="center" justifyContent="space-between">
						<IconButton
							onClick={() => decrementItem(product.id)}
							disabled={product?.quantity <= 1}
							variant="outline"
							colorScheme="yellow"
							fontSize="10px"
							icon={<MinusIcon />}
						/>

						<Text mx={2}>{product.quantity}</Text>

						<IconButton
							onClick={() => incrementItem(product.id)}
							variant="outline"
							colorScheme="green"
							icon={<AddIcon />}
						/>
					</Flex>

					{/* Price */}
					<Text>{formatCurrency(product.price)}</Text>

					{/* Remove item */}
					<Button
						colorScheme="red"
						variant="outline"
						onClick={() => removeItem(product.id)}
					>
						<DeleteIcon />
					</Button>
				</Flex>
			</Stack>
		);
	};

	return (
		<div className="w-screen h-screen">
			<Head>
				<title>Meu Carrinho</title>
			</Head>
			<div className="mx-auto py-12 px-6">
				{cartCount > 0 ? (
					<>
						<h2 className="text-4xl font-semibold">Meu Carrinho</h2>
						<p className="mt-1 text-xl">
							{cartCount} itens{' '}
							<button
								onClick={clearCart}
								className="opacity-50 hover:opacity-100 text-base capitalize"
							>
								(Limpar carrinho)
							</button>
						</p>
					</>
				) : (
					<Box textAlign="center" py={10} px={6}>
						<WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
						<Heading as="h2" size="xl" mt={6} mb={2}>
							Seu carrinho está vazio.
						</Heading>
						<Text color={'gray.500'}>
							Procure um estacionamento perto de você{' '}
							<Link href="/">
								<a className="text-red-500 underline">aqui!</a>
							</Link>
						</Text>
					</Box>
				)}

				{cartCount > 0 ? (
					<Box mt={12}>
						{Object.entries(cartDetails).map(([key, product]) => (
							<PackageTier key={key} product={product} />
						))}

						<div className="flex flex-row items-center justify-between border-t py-4 mt-8">
							<Heading size={'sm'}>{formatCurrency(totalPrice)}</Heading>

							<Button
								onClick={redirectToCheckout}
								disabled={redirecting}
								colorScheme="purple"
							>
								{redirecting ? 'Redirecionando...' : 'Confirmar Compra'}
							</Button>
						</div>
					</Box>
				) : null}
			</div>
		</div>
	);
};

export default Cart;
