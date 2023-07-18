'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useFetch } from '@/utils/services/hooks/useFetch';
import FullError from '@/components/errors/FullError';
import FullLoader from '@/components/loaders/FullLoaders';
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
const Card = ({ name, email, date, id }) => {
	return (
		<div className='flex flex-wrap gap-y-4 md:flex-row rounded-[10px] py-[9px] px-[10px] md:px-[24px] md:rounded-full bg-white border border-black shadow w-full justify-between items-center md:h-[64px] mb-[14px]'>
			<div className='flex gap-x-[15px] items-center'>
				<div className='w-[24px] h-[24px] rounded-full bg-black'></div>
				<p className='font-[500] text-[15px] md:text-[10px] leading-[16px] md:w-[176px]'>
					{name}
				</p>
			</div>
			<p className='hidden md:block font-[500] text-[10px] leading-[16px] md:w-[176px]'>
				{email}
			</p>
			<p className='hidden md:block font-[500] text-[10px] leading-[16px] md:w-[176px]'>
				{dateCoversion(date)}
			</p>
			<Link
				href={`/admin/contact/message/${id}`}
				type='submit'
				className='p-[10px] rounded-full bg-black text-white  flex items-center gap-x-[10px] w-max '
			>
				<span>View</span>
				<img
					src={`/images/icons/arrowrightwhite.png`}
					className=' '
					alt='arrow logo'
				/>
			</Link>
		</div>
	);
};

const Feedback = () => {
	const url = '/feedback';
	const [feedbacks, setFeedbacks] = useState([]);
	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		url,
		`get-${url}`
	);
	useEffect(() => {
		if (isSuccess) {
			setFeedbacks(data);
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
			{feedbacks.length === 0 && (
				<p className='font-[500] text-[15px] leading-[16px] text-center my-[30px] '>
					No Feedback Yet
				</p>
			)}
			{feedbacks?.map((item) => (
				<div key={item?._id}>
					<Card
						name={item?.senderName}
						email={item?.emailAddress}
						date={item?.createdAt}
						id={item?._id}
					/>
				</div>
			))}
		</>
	);
};

export default Feedback;
