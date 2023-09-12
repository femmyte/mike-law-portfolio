import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Animation from '../../components/common/Animation';
import useFetch from '../../utils/services/hooks/useFetch';
import FullLoader from '../loaders/FullLoaders';
import FullError from '../errors/FullError';
import renderHtml from '../../utils/renderHtml';
function truncateText(text, maxLength) {
	if (text.length <= maxLength) {
		return text;
	} else {
		return text.substring(0, maxLength) + '...';
	}
}

const truncatedText = (text) => {
	return truncateText(text, 80);
};

const removePTags = (text) => {
	const regex = /<p[^>]*>(.*?)<\/p>/g;
	let newText = text?.replace(regex, '$1');
	return truncateText(newText, 80);
};

const Card = ({ img, title, text, id }) => {
	return (
		<div
			className={` w-full md:rounded-[80px] px-[20px] md:px-[52px] py-[15px] md:py-[21px] bg-white flex items-start gap-x-[17px] mb-[12px]`}
		>
			<img
				src={`${img ? img : require('../../images/frame.png')}`}
				// src={`/images/${img}.png`}
				className='w-[50px] h-[50px]'
				alt='art image'
			/>
			<div className='md:flex items-center justify-between w-full '>
				<div className=' mb-[15px] md:mb-0'>
					<p className='font-[500] text-[12px] md:text-[20px] leading-[16px] md:leading-[32px] '>
						{title}
					</p>
					<p className='font-[400] text-[12px] md:text-[20px] leading-[16px] md:leading-[32px] mt-[8px]'>
						{/* {removePTags(text)} */}
						{renderHtml(truncatedText(text))}
					</p>
				</div>
				<Link to={`/blog/${id}`} className=''>
					<div className='py-[10px] text-[16px] px-[20px] rounded-full border border-black flex items-center gap-x-[7px]  w-max'>
						<span className=''> Read</span>
						<img
							src={require(`../../images/icons/arrowright.png`)}
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
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`${process.env.REACT_APP_API_URL}/v1/blog/`
			);
			let data = await res.json();
			setArticles(data);
		};
		fetchData();
	}, []);

	const lastFiveArticles = articles?.slice(-5);
	return (
		<>
			<Animation style='zoom-in-left' placement='center-center'>
				<div className='py-[28px] md:py-[58px]  md:px-[70px] bg-[#F9F9F9]'>
					<p className='mb-[12px] font-[400] text-[12px] leading-[24px] uppercase'>
						more areas
					</p>
					<div className='w-full bg-black h-[1px] mb-[24px]'></div>
					{lastFiveArticles?.map((article) => (
						<Card
							key={article?._id}
							img={article?.media}
							title={article?.title}
							text={article?.blogContent}
							id={article._id}
						/>
					))}
					{/* <Card
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
					/> */}
				</div>
			</Animation>
		</>
	);
};

export default Article;
