import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Article from '../../../components/pages/Article';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/services/hooks/useFetch';
import FullLoader from '../../../components/loaders/FullLoaders';
import FullError from '../../../components/errors/FullError';
import Nav from '../../../components/common/Nav';
import Footer from '../../../components/common/Footer';

import renderHtml from '../../../utils/renderHtml';

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
const Blog = () => {
	const params = useParams();
	const [blogs, setBlogs] = useState(null);
	const url = `/blog/${params.id}`;
	const { data, isInitialLoading, isSuccess, isError, refetch } = useFetch(
		url,
		`get-single-${url}`
	);
	useEffect(() => {
		if (isSuccess) {
			setBlogs(data);
		}
		refetch();
	}, [isSuccess, data, refetch]);
	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}

	let readingSpeed = 150;
	let readingMinutes = 0;
	const wordCount = blogs?.blogContent?.trim().split(/\s+/).length;
	const minutes = Math.ceil(wordCount / readingSpeed);

	readingMinutes = minutes;

	const removePTags = (text) => {
		const regex = /<p[^>]*>(.*?)<\/p>/g;
		return text?.replace(regex, '$1');
	};
	return (
		<>
			<Nav />
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
								: require('../../../images/smallframe.png')
						}`}
						alt='video background'
						className='relative'
					/>

					{/* <button className='py-[10px] text-[16px] px-[20px] rounded-full border border-black w-max absolute top-[20px] right-[20px]  '>
						<span className='text-white shadow-md'>
							{blogs?.tags[0]}
						</span>
					</button> */}
				</div>
				<div>
					<p className='font-[400] text-[16px] leading-[32px] text-gray-600 text-justify'>
						{/* {removePTags(blogs?.blogContent)} */}
						{renderHtml(blogs?.blogContent)}
					</p>
				</div>
				<div className='w-full clear-both'>
					<div className='h-[1px] bg-black w-full mt-[48px] mb-[12px]'></div>
					<div className='flex justify-end w-full gap-x-[30px]'>
						<p className='font-[400] text-[15px] leading-[28px] md:leading-[32px] mt-[33px] md:mt-0 text-justify'>
							{dateCoversion(blogs?.createdAt)}
						</p>
						<p className='font-[400] text-[15px] leading-[28px] md:leading-[32px] mt-[33px] md:mt-0 text-justify'>
							{readingMinutes} minutes Reading
						</p>
					</div>
				</div>
			</section>

			<section>
				<Article />
			</section>
			<Footer />
		</>
	);
};

export default Blog;
