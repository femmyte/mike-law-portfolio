'use client';
import React, { useState, useEffect } from 'react';
import ProductCard from '../../../components/pages/ProductCard';
import Article from '../../../components/pages/Article';
import Header from '../../../components/common/Header';
import Animation from '../../../components/common/Animation';
import { products } from './products';
import FullError from '@/components/errors/FullError';
import FullLoader from '@/components/loaders/FullLoaders';
import { useFetch } from '@/utils/services/hooks/useFetch';

// export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getProducts(id) {
	const products = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/store/`
	).then((res) => res.json());
	return products;
}

const Store = () => {
	const [products, setProducts] = useState([]);
	console.log(getProducts());
	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		'/store/',
		'get-products-user'
	);
	useEffect(() => {
		if (isSuccess) {
			setProducts(data);
		}
	}, [isSuccess, data]);

	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}

	return (
		<>
			<Header
				title='Share from the wealth of knowledge and years of fervent experience'
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>
			<section className='px-[20px] md:px-[70px] py-[30px]  grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-[40px]'>
				{products?.length < 1 ? (
					<p className='text-[20px] text-center font-[700] text-black py-[20px]'>
						No Product available yet, check back later.
					</p>
				) : (
					products.map((product) => {
						return (
							<Animation style='zoom-in-left' key={product._id}>
								<ProductCard
									price={product.price}
									title={product.name}
									date={product.createdAt}
									info={product.description}
									image={product.coverImage}
									id={product._id}
								/>
							</Animation>
						);
					})
				)}
			</section>
			<section>
				<Article />
			</section>
		</>
	);
};

export default Store;
