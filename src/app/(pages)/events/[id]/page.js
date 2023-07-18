'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../../../components/common/Header';
import NestedModal from '../../../../components/pages/Modal';
import Link from 'next/link';
import { events } from '../eventList';
import FullError from '../../../../components/errors/FullError';
import FullLoader from '../../../../components/loaders/FullLoaders';
import { useFetch } from '../../../../utils/services/hooks/useFetch';
const EventPage = ({ params: { id } }) => {
	const { slug } = params;
	const [open, setOpen] = useState(false);

	const url = `/event/${id}`;
	const [event, setEvent] = useState([]);
	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		url,
		`get-${url}`
	);
	useEffect(() => {
		if (isSuccess) {
			setEvent(data);
		}
	}, [isSuccess, data]);
	console.log(data);
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
		<div>
			<NestedModal modalOpen={open} handleOpen={setOpen} />
			<Header
				title='Keep up with event, keep up with law and all'
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>
			<div className='md:flex gap-x-[120px] px-[20px] md:px-[70px] py-[20px] md:py-[70px] '>
				<div className='md:w-[830px] bg-[#F9F9F9] pb-[20px]'>
					<div className='w-full pb-[28px] h-max  rounded-t-[24px]'>
						<img src='/images/barcaprec.png' alt='about' />
						<p className='font-[400] text-[25px] md:text-[32px] leading-[33px] md:leading-[38px] px-[26px] mt-[20px] md:mt-[47px]'>
							{event?.name}
						</p>
					</div>
					<div className='px-[26px] bg-white h-max'>
						<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-[#B7B7B7] uppercase mt-[22px] mb-[12px]'>
							description
						</p>
						<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-black mb-[22px] text-justify '>
							{removePTags(event?.description)}
						</p>
						<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-[#B7B7B7] uppercase mt-[22px] mb-[12px]'>
							Location
						</p>
						<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-black mb-[22px] '>
							{event?.location}
						</p>
						<div className='flex flex-col md:flex-row justify-between w-full'>
							<div className=''>
								<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-[#B7B7B7] uppercase mt-[22px] mb-[12px]'>
									details
								</p>
								<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-black mb-[22px] '>
									{event?.date}
								</p>
							</div>
							<div className=''>
								<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-[#B7B7B7] uppercase mt-[22px] mb-[12px]'>
									type
								</p>
								<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-black mb-[22px] '>
									{event?.type}
								</p>
							</div>
						</div>
					</div>
					<div className='px-[26px] w-full flex justify-end'>
						<Link
							href='/'
							className='flex gap-x-[7px] items-center border border-black px-[20px] py-[10px] rounded-full mt-[20px] w-max ]'
						>
							<span>See Speakers</span>
							<img
								src='/images/icons/arrowright.png'
								alt='arrow'
							/>
						</Link>
					</div>
				</div>
				<div className='w-full mt-[50px] mb-[20px]'>
					<p className='font-[400] text-[25px] md:text-[40px] leading-[33px] md:leading-[48px] mb-[37px] md:mb-[47px] mt-[20px] md:mt-0'>
						We are glad that you will be in the event, reserve your
						space.
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
							placeholder='Company'
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<input
							type='text'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='Role'
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<textarea
							type='text'
							id=''
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none h-[80px]'
							placeholder='Your Expectations'
						></textarea>
					</div>
					<div className='flex flex-col md:flex-row items-center gap-y-[20px] gap-x-[20px] justify-end mt-[40px] '>
						<button
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
						</button>
						<Link
							href='/'
							className='flex gap-x-[7px] items-center border border-black px-[20px] py-[10px] rounded-full w-max'
						>
							<span>Reserve Space</span>
							<img
								src='/images/icons/arrowright.png'
								alt='arrow'
							/>
						</Link>
					</div>
					<p className='clear-right'></p>
				</div>
			</div>
		</div>
	);
};

export default EventPage;
