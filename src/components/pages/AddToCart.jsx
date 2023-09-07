import { useDataContext } from '../../utils/DataContext';
import React, { useEffect } from 'react';

const AddToCart = ({ id }) => {
	// const [cart, setCart] = useState(
	// 	JSON.parse(localStorage.getItem('products')) ?? []
	// );
	const { cart, setCart } = useDataContext();
	const AddToCart = (id) => {
		// let option = window.confirm(
		// 	'Item has been Added to cart, click ok to  '
		// );
		alert('Item has been Added to cart');
		setCart((items) => {
			// this will return true if the item is already in cart
			let ItemInCart = items.find((i) => i.id === id);
			// if the item is already in cart increase the quantity instead of adding a new item to the cart else it will add a new Item to the cart
			if (ItemInCart) {
				return items.map((i) =>
					i.id === id ? { ...i, quantity: i.quantity + 1 } : i
				);
			} else {
				return [...items, { id, quantity: 1 }];
			}
		});
	};
	useEffect(() => {
		// this will set item to the local storage any time the cart is changed
		localStorage.setItem('products', JSON.stringify(cart));
	}, [cart]);

	return (
		<button
			className='py-3 px-6 bg-black text-white rounded-full'
			onClick={() => AddToCart(id)}
		>
			AddToCart
		</button>
	);
};

export default AddToCart;
