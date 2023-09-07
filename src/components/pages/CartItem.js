// components/CartItem.js
const CartItem = ({
	id,
	name,
	price,
	coverImage,
	updateQuantity,
	quantity,
}) => {
	return (
		<div className='bg-white p-4 shadow-md rounded-md'>
			<img
				src={coverImage}
				alt={name}
				className='w-16 h-16 rounded-md mb-2'
			/>
			<h3 className='text-lg font-semibold'>{name}</h3>
			<p className='text-gray-500'>${price}</p>
			<p>
				<select
					aria-label={`Select quantity for ${name}`}
					onChange={(e) =>
						updateQuantity(id, parseInt(e.target.value))
					}
					value={quantity}
				>
					<option value='0'>Remove</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
					<option value='6'>6</option>
					<option value='7'>7</option>
					<option value='8'>8</option>
					<option value='9'>9</option>
					<option value='10'>10</option>
				</select>
			</p>
		</div>
	);
};

export default CartItem;
