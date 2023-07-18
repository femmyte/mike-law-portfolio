import Link from 'next/link';
import React from 'react';

const ProductCard = ({ title, date, price, info, id }) => {
	return (
		<div className='relative'>
			<img
				src='/images/frame.png'
				alt='video background'
				className='relative'
			/>

			{/* <button className='py-[10px] text-[16px] px-[20px] rounded-full border border-black w-max absolute top-[20px] right-[20px]'>
				{tag}
			</button> */}
			<img
				src='/images/logo2.png'
				alt='logo'
				className='absolute top-0 right-[40px]'
			/>
			<div className='flex justify-between mt-[20px]'>
				<Link
					href={`/events/${id}`}
					className=' font-[500] text-[20px] leading-[28px]'
				>
					{title}
				</Link>
				<p className='font-[500] text-[20px] leading-[28px]'>{price}</p>
			</div>
			<div className='h-[1px] bg-black w-full my-[12px]'></div>
			<div className='flex justify-between w-full'>
				<p className='font-[400] text-[16px] leading-[32px]'>{date}</p>
				<p className='font-[400] text-[12px] leading-[32px] text-gray-600'>
					{info}
				</p>
			</div>
		</div>
	);
};

export default ProductCard;
