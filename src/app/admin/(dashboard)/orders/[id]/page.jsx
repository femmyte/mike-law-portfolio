import InputLine from '@/components/admin/common/InputLine';
import React from 'react';
import axios from 'axios';

async function fetchData(productId) {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/store/${productId}`
		);
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

async function getOrder(id) {
	const order = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/order/${id}`
	).then((res) => res.json());
	return order;
}
export async function generateStaticParams() {
	const order = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/order/`
	).then((res) => res.json());

	return order.map((order) => ({
		id: order._id,
	}));
}

const Item = ({ title, text }) => {
	return (
		<div className='mb-[30px] '>
			<p className='text-[#929292] text-[0.75rem] font-[400] leading-[120%] mb-[10px]'>
				{title}
			</p>
			<p className='text-black text-[0.875rem] font-[500] leading-[120%]'>
				{text}
			</p>
		</div>
	);
};
const Page = async ({ params: { id } }) => {
	const order = await getOrder(id);
	const productId = order?.productId;

	let product;
	if (productId) {
		product = await fetchData(productId);
	}
	// const [product, setProduct] = useState([]);
	// const [order, setOrder] = useState([]);

	// const { data, isInitialLoading, isSuccess, isError } = useFetch(
	// 	`/order/${id}`,
	// 	'get-single-order-user'
	// );

	// useEffect(() => {
	// 	if (isSuccess) {
	// 		setOrder(data);
	// 		if (productId) {
	// 			fetchData(productId, setProduct);
	// 		}
	// 		// fetchData(productId, setProduct);/
	// 	}
	// }, [isSuccess, data, productId]);

	if (!productId) {
		return (
			<div className='flex h-screen w-full bg-black text-white items-center justify-center'>
				<p className='font-[700] text-[20px] text-white'>Loading...</p>
			</div>
		);
	}
	// if (isError) {
	// 	return <FullError />;
	// }

	return (
		<div className='px-[20px] w-full'>
			<InputLine
				placeholder='Edit Your Profile to Meet Up New Achievements'
				btnText='Save'
			/>
			<div className='mt-[40px]'>
				<Item title='Product Name' text={product?.name} />
				<Item
					title='Price'
					text={`#${Number(product?.price).toLocaleString()}`}
				/>
				<Item title='Customer Name' text={order?.customerName} />
				<Item title='Address' text={order?.address} />
				<Item title='State' text={order?.state} />
				<Item title='Country' text={order?.country} />
				<Item title='Email' text={order.emailAddress} />
				<Item title='Date' text={order?.createdAt} />
				<Item title='Phone Number' text={order?.phoneNumber} />
				<Item title='Status' text={order?.status} />
				<Item title='Type of Product' text={order?.type} />
			</div>
		</div>
	);
};

export default Page;
