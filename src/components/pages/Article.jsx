'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Animation from '../../components/common/Animation';
import useFetch from '../../utils/services/hooks/useFetch';
import FullLoader from '../loaders/FullLoaders';
import FullError from '../errors/FullError';
const Card = ({ img, title, text, link }) => {
	return (
		<div
			className={` w-full md:rounded-[80px] px-[20px] md:px-[52px] py-[15px] md:py-[21px] bg-white flex items-start gap-x-[17px] mb-[12px]`}
		>
			<img src={`/images/${img}.png`} alt='art image' />
			<div className='md:flex items-center justify-between w-full '>
				<div className=' mb-[15px] md:mb-0'>
					<p className='font-[500] text-[12px] md:text-[20px] leading-[16px] md:leading-[32px] '>
						{title}
					</p>
					<p className='font-[400] text-[12px] md:text-[20px] leading-[16px] md:leading-[32px] mt-[8px]'>
						{text}
					</p>
				</div>
				<Link href={link} className=''>
					<div className='py-[10px] text-[16px] px-[20px] rounded-full border border-black flex items-center gap-x-[7px]  w-max'>
						<span className=''> Read</span>
						<img
							src={`/images/icons/arrowright.png`}
							className=' '
							alt='arrow logo'
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};
const Article = () => {
	const [articles, setarticles] = useState([]);
	// const { data, isInitialLoading, isSuccess, isError, refetch } = useFetch(
	// 	'/articles',
	// 	'get-articles'
	// );

	// useEffect(() => {
	// 	if (isSuccess) {
	// 		setArticles(data.articles);
	// 	}

	// 	refetch();
	// }, [articles, isSuccess, data, refetch]);

	// if (isInitialLoading) {
	// 	return <FullLoader />;
	// }
	// if (isError) {
	// 	return <FullError />;
	// }
	return (
		<>
			<Animation style='zoom-in-left' placement='center-center'>
				<div className='py-[28px] md:py-[58px]  md:px-[70px] bg-[#F9F9F9]'>
					<p className='mb-[12px] font-[400] text-[12px] leading-[24px] uppercase'>
						more areas
					</p>
					<div className='w-full bg-black h-[1px] mb-[24px]'></div>
					<Card
						img='artimage'
						title='Tinubu’s Mount Everest Task of reconciling a fractured APC'
						text='Recalling My Article In the Sun Newspaper Of 14th February, 2018'
						link='/'
					/>
					<Card
						img='artimage'
						title='Tinubu’s Mount Everest Task of reconciling a fractured APC'
						text='Recalling My Article In the Sun Newspaper Of 14th February, 2018'
						link='/'
					/>
					<Card
						img='artimage'
						title='Tinubu’s Mount Everest Task of reconciling a fractured APC'
						text='Recalling My Article In the Sun Newspaper Of 14th February, 2018'
						link='/'
					/>
				</div>
			</Animation>
		</>
	);
};

export default Article;
