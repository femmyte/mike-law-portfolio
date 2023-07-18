'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import FullLoader from '@/components/loaders/FullLoaders';
import FullError from '@/components/errors/FullError';
import { useFetch } from '@/utils/services/hooks/useFetch';
export const revalidate = 0;

const SingleStore = ({ params: { id } }) => {
	const [product, setProduct] = useState([]);

	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		`/store/${id}`,
		'get-single-product-user'
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
			<div className='md:flex gap-x-[120px] px-[20px] md:px-[70px] py-[20px] md:py-[70px] '>
				<div className='md:w-[830px] bg-[#F9F9F9] pb-[20px]'>
					<div className='w-full pb-[28px] h-max  rounded-t-[24px]'>
						{/* <img src='/images/barcaprec.png' alt='about' /> */}
						<img
							src={`${
								product.coverImage
									? product.coverImage
									: '/images/frame.png'
							}`}
							alt='video background'
							className='relativ w-[353px] h-[261px] md:w-[420px] md:h-[316px]'
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
					</div>
				</div>
				{/* <div className='w-full mt-[50px] mb-[20px]'>
					<p className='font-[400] text-[25px] md:text-[40px] leading-[33px] md:leading-[48px] mb-[37px] md:mb-[47px] mt-[20px] md:mt-0'>
						Pay for your Product with our safe and secure payment
						automation.
					</p>
					<div className=' border-b border-[mt-[20px] md:#B7B7B7] '>
						<input
							type='text'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='Your Name Here'
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<input
							type='text'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='Your email address here'
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<input
							type='text'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='Address'
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<input
							type='text'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='Country'
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<textarea
							type='text'
							id=''
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none h-[80px]'
							placeholder='Extra Information'
						></textarea>
					</div>
					<div className='flex flex-col md:flex-row items-center gap-y-[20px] gap-x-[20px] justify-end mt-[40px] '>
						{/* <button
							onClick={() => {
								setOpen(true);
							}}
							href='/'
							className='flex gap-x-[7px] items-center border border-black px-[20px] py-[10px] rounded-full w-max '
						>
							<span>Buy Ticket</span>
							<img
								src='/images/icons/arrowright.png'
								alt='arrow'
							/>
						</button> *
						<Link
							href='/'
							className='flex gap-x-[7px] items-center border border-black px-[20px] py-[10px] rounded-full w-max'
						>
							<span>Make Payment</span>
							<img
								src='/images/icons/arrowright.png'
								alt='arrow'
							/>
						</Link>
					</div>
					<p className='clear-right'></p>
				</div> */}
			</div>
		</>
	);
};

export default SingleStore;
