import React, { useState, useEffect } from 'react';
import ReatQuery from '../../utils/query/ReactQuery';
import useFetch from '../../utils/services/hooks/useFetch';
import FullLoader from '../loaders/FullLoaders';
import FullError from '../errors/FullError';
import Animation from './Animation';
const Card = ({ title, content }) => {
	const [testimonies, setTestimonies] = useState([]);
	// const { data, isInitialLoading, isSuccess, isError, refetch } = useFetch(
	// 	'/testimonies',
	// 	'get-testimonies'
	// );

	// useEffect(() => {
	// 	if (isSuccess) {
	// 		setTestimonies(data.testimonies);
	// 	}

	// 	refetch();
	// }, [testimonies, isSuccess, data, refetch]);

	// if (isInitialLoading) {
	// 	return <FullLoader />;
	// }
	// if (isError) {
	// 	return <FullError />;
	// }

	return (
		<>
			<ReatQuery>
				<div className='py-[28px] px-[38px] bg-[rgb(243,243,243)] rounded-[20px]'>
					<div className='border-b border-black md:mx-[70px] hidden md:block'></div>
					<div className='flex items-center gap-x-[19px]'>
						<div className='bg-black w-[58px] h-[58px] rounded-full'></div>
						<p className='text-[16px] leading-[24px] font-[500] text-black'>
							{title}
						</p>
					</div>
					<p className='mt-[20px] font-[400] text-[16px] leading-[24px]'>
						{content}
					</p>
				</div>
			</ReatQuery>
		</>
	);
};
const Testimony = () => {
	return (
		<section className='bg-white flex flex-col md:flex-row gap-y-[20px] gap-x-[20px] px-[20px] md:px-[70px] py-[20px]'>
			<Animation style='zoom-in-left'>
				<Card
					title='Lindrick Ulsan'
					content='Lorem ipsum dolor sit amet consectetur. Erat risus mattis integer nulla enim aenean. Arcu maecenas sit facilisis dictum condimentum tristique fermentum ut in. Purus auctor nec.'
				/>
			</Animation>
			<Animation style='zoom-in-left'>
				<Card
					title='Lindrick Ulsan'
					content='Lorem ipsum dolor sit amet consectetur. Erat risus mattis integer nulla enim aenean. Arcu maecenas sit facilisis dictum condimentum tristique fermentum ut in. Purus auctor nec.'
				/>
			</Animation>
			<Animation style='zoom-in-left'>
				<Card
					title='Lindrick Ulsan'
					content='Lorem ipsum dolor sit amet consectetur. Erat risus mattis integer nulla enim aenean. Arcu maecenas sit facilisis dictum condimentum tristique fermentum ut in. Purus auctor nec.'
				/>
			</Animation>
		</section>
	);
};

export default Testimony;
