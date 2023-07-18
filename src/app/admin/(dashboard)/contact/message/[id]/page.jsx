'use client';
import React, { useState, useEffect } from 'react';
import InputLine from '../../../../../../components/admin/common/InputLine';
import { messages } from '../../../../../../appData/message';
import FullError from '@/components/errors/FullError';
import FullLoader from '@/components/loaders/FullLoaders';
import { useFetch } from '@/utils/services/hooks/useFetch';

const dateConversion = (dateStr) => {
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
export const revalidate = 0;
// async function getMessage(id) {
// 	const res = await fetch(`https://api.example.com/artist/${id}`);
// 	return res.json();
// }
const Message = ({ params: { id } }) => {
	// const messages = getArtist(id);

	const url = `/contact/${id}`;
	const [messages, setMessages] = useState([]);
	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		url,
		`get-${url}`
	);
	useEffect(() => {
		if (isSuccess) {
			setMessages(data);
		}
	}, [isSuccess, data]);
	console.log(data);
	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}
	// let [post] = messages
	// 	.map((post) => post)
	// 	.filter((post) => post.slug === slug);
	const removePTags = (text) => {
		const regex = /<p[^>]*>(.*?)<\/p>/g;
		return text?.replace(regex, '$1');
	};
	return (
		<div className='px-[20px] w-full'>
			<InputLine
				placeholder='Edit Your Profile to Meet Up New Achievements'
				btnText='Save'
			/>
			<div className='mt-[30px] md:mt-[45px]'>
				<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
					Sender Name
				</p>
				<p className='font-[400] text-[12px] leading-[16px] '>
					{messages.senderName}
				</p>
				<div className='flex flex-col md:flex-row mt-[28px] gap-[24px]'>
					<div className=''>
						<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
							Subject
						</p>
						<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
							{messages.subject}
						</p>
					</div>
					<div className=''>
						<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
							Detials
						</p>
						<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
							{dateConversion(messages.createdAt)}
						</p>
					</div>
				</div>
				<div className='my-[28px]'>
					<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
						Email Address
					</p>
					<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
						{messages.emailAddress}
					</p>
				</div>
				<div className='w-full md:w-[430px]'>
					<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
						Message
					</p>
					<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
						{removePTags(messages.message)}
					</p>
				</div>
			</div>
			<div className='mt-[30px] md:mt-[45px] w-full md:w-[430px]'>
				<textarea
					className='border border-black w-full rounded-[8px] h-[100px] md:h-[250px] px-[15px] mt-[20px]'
					placeholder='Reply Via Email'
				></textarea>

				<div className='flex gap-x-[20px] md:gap-x-[35px] justify-end mt-[20px] md:mt-[44px]'>
					<button className=''>Delete</button>
					<button
						type='submit'
						className='py-[10px] px-[20px] rounded-full bg-black  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
					>
						<span>Send</span>
						<img
							src={`/images/icons/arrowrightwhite.png`}
							className=' '
							alt='arrow logo'
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Message;
