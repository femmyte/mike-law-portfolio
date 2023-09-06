import InputLine from '../../../components/admin/common/InputLine';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/services/hooks/useFetch';
import FullLoader from '../../../components/loaders/FullLoaders';
import FullError from '../../../components/errors/FullError';

// async function fetchData(productId) {
// 	try {
// 		const response = await axios.get(
// 			`${process.env.REACT_APP_API_URL}/v1/store/${productId}`
// 		);
// 		return response.data;
// 	} catch (error) {
// 		console.error('Error fetching data:', error);
// 	}
// }

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
const OrderProduct = () => {
	const [product, setProduct] = useState(null);
	const [order, setOrder] = useState(null);
	const params = useParams();
	const url = `order/${params.id}`;

	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		url,
		`get-${url}`
	);
	useEffect(() => {
		if (isSuccess) {
			setOrder(data);
			async function fetchData() {
				try {
					const response = await axios.get(
						`${process.env.REACT_APP_API_URL}/v1/store/${order.productId}`
					);
					let fecthedData = await response.data;
					setProduct(fecthedData);
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			}
			fetchData();
		}
	}, [isSuccess, data]);
	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}

	return (
		<div className='px-[20px] w-full'>
			<InputLine placeholder='View Order Details' btnText='Save' />
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
				<Item title='Email' text={order?.emailAddress} />
				<Item title='Date' text={order?.createdAt} />
				<Item title='Phone Number' text={order?.phoneNumber} />
				<Item title='Status' text={order?.status} />
				<Item title='Type of Product' text={order?.type} />
			</div>
		</div>
	);
};

export default OrderProduct;
