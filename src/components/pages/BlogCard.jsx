import Link from 'next/link';
import React from 'react';
const dateCoversion = (dateStr) => {
	// const dateStr = '2023-07-14T19:40:47.204Z';
	const date = new Date(dateStr);
	const currentDate = new Date();

	let formattedTime = date.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});
	if (date.toDateString() === currentDate.toDateString()) {
		formattedTime = 'today ' + formattedTime;
	}
	return formattedTime;
};
const BlogCard = ({ title, date, tag, info, id, image }) => {
	return (
		<div className='relative'>
			<img
				src={`${image ? image : '/images/frame.png'}`}
				alt='video background'
				className='relativ w-[353px] h-[261px] md:w-[420px] md:h-[316px]'
			/>
			{/* <img
				src='/images/icons/vid-icon.png'
				alt='video icon'
				className='absolute top-[20px] right-[20px]'
			/> */}
			<button className='py-[10px] text-[16px] px-[20px] rounded-full border border-black w-max absolute top-[20px] right-[20px]'>
				{tag}
			</button>
			<Link
				href={`/blog/${id}`}
				className='mt-[20px] font-[500] text-[20px] leading-[28px]'
			>
				{title}
			</Link>
			<div className='h-[1px] bg-black w-full my-[12px]'></div>
			<div className='flex justify-between w-full'>
				<p className='font-[400] text-[16px] leading-[32px]'>
					{dateCoversion(date)}
				</p>
				<p className='font-[400] text-[12px] leading-[32px] text-gray-600'>
					{info}
				</p>
			</div>
		</div>
	);
};

export default BlogCard;
