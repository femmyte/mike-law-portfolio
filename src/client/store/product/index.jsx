import React, { useState, useEffect } from 'react';
import Article from '../../../components/pages/Article';
import Header from '../../../components/common/Header';
import OrderForm from '../../../components/forms/OrderForm';
import AddToCart from '../../../components/pages/AddToCart';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/services/hooks/useFetch';
import FullLoader from '../../../components/loaders/FullLoaders';
import FullError from '../../../components/errors/FullError';
import Nav from '../../../components/common/Nav';
import Footer from '../../../components/common/Footer';

const SingleStore = () => {
	const [product, setProduct] = useState(null);

	const params = useParams();
	const url = `/store/${params.id}`;

	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		url,
		`get-${url}`
	);
	useEffect(() => {
		if (isSuccess) {
			setProduct(data);
		}
	}, [isSuccess, data]);
	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}
	const removePTags = (text) => {
		const regex = /<p[^>]*>(.*?)<\/p>/g;
		return text?.replace(regex, '$1');
	};
	return (
		<>
			<Nav />
			<Header
				title={product?.name}
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>

			<div className='md:flex gap-x-[120px] px-[20px] md:px-[70px] py-[20px] md:py-[70px] '>
				<div className='md:w-[830px] bg-[#F9F9F9] pb-[20px]'>
					<div className='w-full pb-[28px] h-max  rounded-t-[24px]'>
						<img
							src={`${
								product?.coverImage
									? product?.coverImage
									: '/images/barcaprec.png'
							}`}
							alt='about'
						/>
						<p className='font-[400] text-[25px] md:text-[32px] leading-[33px] md:leading-[38px] px-[26px] mt-[20px] md:mt-[47px]'>
							{product?.name}
						</p>
						<p className='font-[400] text-[25px] md:text-[32px] leading-[33px] md:leading-[38px] px-[26px] mt-[20px] md:mt-[47px]'>
							#{Number(product?.price).toLocaleString()}
						</p>
					</div>
					<div className='px-[26px] bg-white h-max'>
						<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-[#B7B7B7] uppercase mt-[22px] mb-[12px]'>
							Description
						</p>
						<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-black mb-[22px] text-justify '>
							{removePTags(product?.description)}
						</p>
						<AddToCart id={params.id} />
					</div>
				</div>
				<OrderForm product={product} />
			</div>
			<section>
				<Article />
			</section>
			<Footer />
		</>
	);
};

export default SingleStore;
