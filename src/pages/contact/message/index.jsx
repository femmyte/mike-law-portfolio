import React, { useState, useEffect } from 'react';
import InputLine from '../../../components/admin/common/InputLine';
import { useParams } from 'react-router-dom';

import { dateConversion } from '../../../utils/contvertDate';
import { useFetch } from '../../../utils/services/hooks/useFetch';
import FullError from '../../../components/errors/FullError';
import FullLoader from '../../../components/loaders/FullLoaders';

const Message = () => {
	// const messages = await getMessage(id);
	// contact/${id}
	const [messages, setMessages] = useState(null);
	const params = useParams();
	const url = `contact/${params.id}`;

	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		url,
		`get-${url}`
	);
	useEffect(() => {
		if (isSuccess) {
			setMessages(data);
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
		<div className='px-[20px] w-full'>
			<InputLine
				placeholder='View new messages from your customer'
				btnText='Save'
			/>
			<div className='mt-[30px] md:mt-[45px]'>
				<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
					Sender Name
				</p>
				<p className='font-[400] text-[12px] leading-[16px] '>
					{messages?.senderName}
				</p>
				<div className='flex flex-col md:flex-row mt-[28px] gap-[24px]'>
					<div className=''>
						<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
							Subject
						</p>
						<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
							{messages?.subject}
						</p>
					</div>
					<div className=''>
						<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
							Detials
						</p>
						<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
							{dateConversion(messages?.createdAt)}
						</p>
					</div>
				</div>
				<div className='my-[28px]'>
					<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
						Email Address
					</p>
					<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
						{messages?.emailAddress}
					</p>
				</div>
				<div className='w-full md:w-[430px]'>
					<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
						Message
					</p>
					<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
						{removePTags(messages?.message)}
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
