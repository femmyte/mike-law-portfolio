import React, { useState, useEffect } from 'react';
import InputLine from '../../../components/admin/common/InputLine';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/services/hooks/useFetch';
import FullError from '../../../components/errors/FullError';
import FullLoader from '../../../components/loaders/FullLoaders';

const Feedback = () => {
	// const feedbacks = await getMessage(id);
	// const { data } = useFetch('/feedback','fetch-feedback')
	const [feedbacks, setFeedbacks] = useState(null);
	const params = useParams();
	const url = `feedback/${params.id}`;

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

	const removePTags = (text) => {
		const regex = /<p[^>]*>(.*?)<\/p>/g;
		return text?.replace(regex, '$1');
	};
	// const dateCoversion = (dateStr) => {
	// 	// const dateStr = '2023-07-14T19:40:47.204Z';
	// 	const date = new Date(dateStr);
	// 	const currentDate = new Date();

	// 	let formattedTime = date.toLocaleTimeString([], {
	// 		hour: '2-digit',
	// 		minute: '2-digit',
	// 	});
	// 	if (date.toDateString() === currentDate.toDateString()) {
	// 		formattedTime = 'today ' + formattedTime;
	// 	}
	// 	return formattedTime;
	// };
	const dateConversion = (dateStr) => {
		// const dateStr = '2023-07-14T19:40:47.204Z';
		const date = new Date(dateStr);
		const currentDate = new Date();

		let formattedDateTime = date.toLocaleString([], {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		});

		if (date.toDateString() === currentDate.toDateString()) {
			formattedDateTime = 'Today ' + formattedDateTime.split(' ')[1]; // Extract time part
		}

		return formattedDateTime;
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
					{feedbacks?.senderName}
				</p>
				<div className='flex flex-col md:flex-row mt-[28px] gap-[24px]'>
					<div className=''>
						<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
							Detials
						</p>
						<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
							{dateConversion(feedbacks?.createdAt)}
						</p>
					</div>
				</div>
				<div className='my-[28px]'>
					<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
						Email Address
					</p>
					<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
						{feedbacks?.emailAddress}
					</p>
				</div>
				<div className='w-full md:w-[430px]'>
					<p className='font-[700] text-[12px] leading-[16px] mb-[5px]'>
						Message
					</p>
					<p className='font-[400] text-[12px] leading-[16px] mb-[5px]'>
						{removePTags(feedbacks?.message)}
					</p>
				</div>
			</div>
			<p className='font-[700] text-[20px] leading-[23px] mb-[18px] mt-[25px] md:mt-[68px]'>
				Approve as a testimonials on homepage?
			</p>
			<div className='flex gap-x-[20px] md:gap-x-[35px] justify-center '>
				<button
					type='submit'
					className='py-[10px] px-[20px] rounded-full border border-black  text-black   w-max mr-[20px]'
				>
					Delete
				</button>
				<button
					type='submit'
					className='py-[10px] px-[20px] rounded-full bg-black  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
				>
					<span>Yes</span>
					<img
						src={require(`../../../images/icons/arrowrightwhite.png`)}
						className=' '
						alt='arrow logo'
					/>
				</button>
			</div>
		</div>
	);
};

export default Feedback;
