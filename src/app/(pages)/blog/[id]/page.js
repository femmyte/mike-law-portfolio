'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../../../components/common/Header';
import { links } from '../link';
import Article from '../../../../components/pages/Article';
import { useFetch } from '@/utils/services/hooks/useFetch';
import FullLoader from '@/components/loaders/FullLoaders';
import FullError from '@/components/errors/FullError';
// export const dynamic = 'force-dynamic';
export const revalidate = 0;
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
const Blog = ({ params: { id } }) => {
	const url = `/blog/${id}`;
	const [blogs, setBlogs] = useState([]);
	// const [readingSpeed, setReadingSpeed] = useState(10);
	// const [readingMinutes, setReadingMinutes] = useState(0);
	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		url,
		`get-${url}`
	);
	console.log(blogs);
	let readingSpeed = 50;
	let readingMinutes = 0;
	useEffect(() => {
		if (isSuccess) {
			setBlogs(data);
		}
	}, [isSuccess, data]);
	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}

	const wordCount = blogs?.blogContent?.trim().split(/\s+/).length;
	const minutes = Math.ceil(wordCount / readingSpeed);

	readingMinutes = minutes;

	const removePTags = (text) => {
		const regex = /<p[^>]*>(.*?)<\/p>/g;
		return text?.replace(regex, '$1');
	};
	return (
		<>
			<Header
				title={blogs?.title}
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>
			<section className='px-[20px] md:px-[70px] py-[30px]'>
				<div className='relative max-w-[284px] md:float-left md:mr-[20px]'>
					<img
						src={`${
							blogs?.media
								? blogs?.media
								: '/images/smallframe.png'
						}`}
						alt='video background'
						className='relative'
					/>

					<button className='py-[10px] text-[16px] px-[20px] rounded-full border border-black w-max absolute top-[20px] right-[20px]'>
						{/* {blogs?.tags[0]} */}
					</button>
				</div>
				<div>
					<p className='font-[400] text-[12px] leading-[32px] text-gray-600'>
						{removePTags(blogs?.blogContent)}
					</p>
				</div>
				<div className='h-[1px] bg-black w-full mt-[48px] mb-[12px]'></div>
				<div className='flex justify-end w-full gap-x-[30px]'>
					<p className='font-[400] text-[15px] leading-[28px] md:leading-[32px] mt-[33px] md:mt-0 text-justify'>
						{dateCoversion(blogs?.createdAt)}
					</p>
					<p className='font-[400] text-[15px] leading-[28px] md:leading-[32px] mt-[33px] md:mt-0 text-justify'>
						{readingMinutes} minutes Reading
					</p>
				</div>
			</section>

			<section>
				<Article />
			</section>
		</>
	);
};

export default Blog;
