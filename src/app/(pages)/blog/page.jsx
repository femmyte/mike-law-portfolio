'use client';
import React, { useState, useEffect } from 'react';
import BlogCard from '../../../components/pages/BlogCard';
import Article from '../../../components/pages/Article';
import Header from '../../../components/common/Header';
import { links } from '../blog/link';
import Animation from '../../../components/common/Animation';
import { useFetch } from '../../../utils/services/hooks/useFetch';
import FullLoader from '../../../components/loaders/FullLoaders';
import FullError from '../../../components/errors/FullError';
// export const dynamic = 'force-dynamic';
// export const revalidate = 0;
const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const { data, isInitialLoading, isSuccess, isError, refetch } = useFetch(
		'/blog/',
		'get-blogs'
	);
	console.log(data);
	useEffect(() => {
		if (isSuccess) {
			setBlogs(data);
		}
		refetch();
	}, [isSuccess, data, refetch]);
	let empty;
	if (blogs.length < 1) empty = true;
	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}
	return (
		<>
			<Header
				title='Share from the wealth of knowledge and years of fervent experience'
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>
			<section className='px-[20px] md:px-[70px] py-[30px]  grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-[40px]'>
				{blogs.length < 1 ? (
					<p className='text-[20px] text-center font-[700] text-black py-[20px]'>
						No Blog post available
					</p>
				) : (
					blogs?.map((blog) => {
						return (
							<Animation style='zoom-in-left' key={blog._id}>
								<BlogCard
									tag={blog.tags[0]}
									title={blog.title}
									date={blog.createdAt}
									info={blog.info}
									image={blog.media}
									id={blog._id}
								/>
							</Animation>
						);
					})
				)}
				{/* <BlogCard
					tag='Intellectual'
					title='Fixing Nigeria Election: Chief Mike Agbedor Abu Ozekhome,'
					date='May 24, 2020'
				/>
				<BlogCard
					tag='Political'
					title="Ozekhome_with_femiFalana @ GaniFawehinmi's protest 1998"
					date='May 24, 2020'
				/>
				<BlogCard
					tag='Constitution'
					title='EFFC-DSS Clash a National Embarrassment'
					date='May 24, 2020'
				/>
				<BlogCard
					tag='Intellectual'
					title='Fixing Nigeria Election: Chief Mike Agbedor Abu Ozekhome,'
					date='May 24, 2020'
				/>
				<BlogCard
					tag='Political'
					title="Ozekhome_with_femiFalana @ GaniFawehinmi's protest 1998"
					date='May 24, 2020'
				/>
				<BlogCard
					tag='Constitution'
					title='EFFC-DSS Clash a National Embarrassment'
					date='May 24, 2020'
				/> */}
			</section>
			<section>
				<Article />
			</section>
		</>
	);
};

export default Blog;
