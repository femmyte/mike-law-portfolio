'use client';
import React, { useState, useEffect } from 'react';
import Video from '../../../components/pages/Video';
import Article from '../../../components/pages/Article';
import Header from '../../../components/common/Header';
import FullLoader from '../../../components/loaders/FullLoaders';
import FullError from '../../../components/errors/FullError';
import { useFetch } from '@/utils/services/hooks/useFetch';
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
const Portfolio = () => {
	const [portfolios, setPortfolio] = useState([]);

	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		'/portfolio/',
		'get-portfolio'
	);
	console.log(data);
	useEffect(() => {
		if (isSuccess) {
			setPortfolio(data);
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
			<Header
				title='Constitutional Lawyer, Human Rights Activist, and Senior Advocate of Nigeria'
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>
			<section className='px-[20px] md:px-[70px] py-[30px]  grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-[40px]'>
				{portfolios?.length < 1 ? (
					<p className='text-[20px] text-center font-[700] text-black py-[20px]'>
						No Blog post available
					</p>
				) : (
					portfolios?.map((portfolio) => (
						<div key={portfolio._id}>
							<Video
								title={portfolio.title}
								date={portfolio.createdAt}
								imgUrl={portfolio.imageUrl}
								url={portfolio.url}
							/>
						</div>
					))
				)}
				{/* <Video
					title="Ozekhome_with_femiFalana @ GaniFawehinmi's protest 1998"
					date='May 24, 2020'
				/>
				<Video
					title='EFFC-DSS Clash a National Embarrassment'
					date='May 24, 2020'
				/>
				<Video
					title='Fixing Nigeria Election: Chief Mike Agbedor Abu Ozekhome,'
					date='May 24, 2020'
				/> */}
			</section>
			<section>
				<Article />
			</section>
		</>
	);
};

export default Portfolio;
