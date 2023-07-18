'use client';
import InputLine from '@/components/admin/common/InputLine';
import React, { useState, useEffect } from 'react';
import { items } from '../../../../../appData/productData';
import FullLoader from '../../../../../components/loaders/FullLoaders';
import FullError from '../../../../../components/errors/FullError';
import { useFetch } from '../../../../../utils/services/hooks/useFetch';
import axios from 'axios';
import Orders from '../page';
export const revalidate = 0;

async function fetchData(productId, setProduct) {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/store/${productId}`
		);
		setProduct(response.data);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
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
const Page = ({ params: { id } }) => {
	const [product, setProduct] = useState([]);
	const [order, setOrder] = useState([]);

	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		`/order/${id}`,
		'get-single-order-user'
	);

	console.log(data);

	const productId = order?.productId;

	useEffect(() => {
		if (isSuccess) {
			setOrder(data);
			if (productId) {
				fetchData(productId, setProduct);
			}
			// fetchData(productId, setProduct);/
		}
	}, [isSuccess, data, productId]);

	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}

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
