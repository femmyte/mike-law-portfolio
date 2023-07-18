'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../../components/common/Header';
import Animation from '../../../components/common/Animation';
import NestedModal from '../../../components/pages/Modal';
import Link from 'next/link';
import EventCard from '@/components/pages/EventCard';
import { events } from './eventList';
import Article from '@/components/pages/Article';
import { useFetch } from '@/utils/services/hooks/useFetch';
import FullLoader from '@/components/loaders/FullLoaders';
import FullError from '@/components/errors/FullError';
// export const dynamic = 'force-dynamic';
export const revalidate = 0;

const EventPage = () => {
	const [open, setOpen] = useState(false);
	const [events, setEvents] = useState([]);

	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		'/event/',
		'get-events-user'
	);
	console.log(data);
	useEffect(() => {
		if (isSuccess) {
			setEvents(data);
		}
	}, [isSuccess, data]);

	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}

	return (
		<div>
			<NestedModal modalOpen={open} handleOpen={setOpen} />
			<Header
				title='Keep up with event, keep up with law and all'
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>
			<section className='px-[20px] md:px-[70px] py-[30px]  grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-[40px]'>
				{events?.length < 1 ? (
					<p className='text-[20px] text-center font-[700] text-black py-[20px]'>
						No Event yet, check back later.
					</p>
				) : (
					events.map((event) => {
						return (
							<Animation style='zoom-in-left' key={event._id}>
								<EventCard
									price={event?.price}
									title={event?.name}
									date={event?.date}
									info={event?.info}
									slug={event?.slug}
								/>
							</Animation>
						);
					})
				)}
			</section>
			<Animation>
				<section>
					<Article />
				</section>
			</Animation>
		</div>
	);
};

export default EventPage;
