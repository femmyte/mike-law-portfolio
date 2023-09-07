import { useFetch } from '../../utils/services/hooks/useFetch';
import React, { useEffect, useState } from 'react';
import useFetchAll from '../../utils/services/hooks/useFetchAll';
import FullLoader from '../../components/loaders/FullLoaders';
import FullError from '../../components/errors/FullError';
import { useDataContext } from '../../utils/DataContext';
import CartItem from '../../components/pages/CartItem';
import { Link } from 'react-router-dom';
import Nav from '../../components/common/Nav';
const Cart = () => {
	const { cart, setCart } = useDataContext();
	const urls = cart.map((item) => `store/${item.id}`);
	const { data: products, isLoading, isError } = useFetchAll(urls);
	console.log(products);
	if (isLoading) <FullLoader />;
	if (isError) <FullError />;
	useEffect(() => {
		// this will set item to the local storage any time the cart is changed
		localStorage.setItem('products', JSON.stringify(cart));
	}, [cart]);
	function updateQuantity(id, quantity) {
		console.log(quantity);
		setCart((items) => {
			return quantity === 0
				? items.filter((i) => i.id !== id)
				: items.map((i) => (i.id === id ? { ...i, quantity } : i));
		});
	}

	const renderItem = (itemInCart) => {
		const { id, quantity } = itemInCart;
		const product = products?.find((p) => p._id === id);
		console.log(product);
		// const { price, name, coverImage } = product;
		return (
			<CartItem
				key={id}
				id={id}
				price={product?.price}
				name={product?.name}
				coverImage={product?.coverImage}
				quantity={quantity}
				updateQuantity={updateQuantity}
			/>
		);
	};
	const numItemsInCart = cart.reduce(
		(total, item) => total + item.quantity,
		0
	);
	return (
		<>
			<Nav />
			<div className='bg-black min-h-screen p-8'>
				<h1 className='text-white mb-6'>
					{numItemsInCart === 0
						? 'Your cart is empty'
						: `You have  ${numItemsInCart} Item${
								numItemsInCart > 1 ? 's' : ''
						  } in Your Cart`}
				</h1>
				{numItemsInCart === 0 && (
					<div className='w-screen h-screen flex items-center justify-center'>
						<Link to={'/store'}>
							<button className='py-3 px-6 bg-black text-white rounded-full'>
								Go Back to Store
							</button>
						</Link>
					</div>
				)}
				<div className='max-w-3xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
					{cart.map(renderItem)}
				</div>
			</div>
		</>
	);
};

export default Cart;
