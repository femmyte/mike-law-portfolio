import React from 'react';
// import { items } from '../../../appData/eventData';
import { Link } from 'react-router-dom';
import { RiDeleteBin3Fill } from 'react-icons/ri';
import EventTable from './EventTable';
const Card = ({ name, email, date, slug }) => {
	return (
		<div className='flex flex-col md:flex-row rounded-[10px] py-[9px] px-[24px] md:rounded-full bg-white border border-black shadow w-full md:justify-between items-center md:h-[64px] mb-[14px]'>
			<div className='flex gap-x-[15px] items-center'>
				<div className='w-[24px] h-[24px] rounded-full bg-black'></div>
				<p className='font-[500] text-[10px] leading-[16px] md:w-[176px]'>
					{name}
				</p>
			</div>
			<div className='flex gap-x-[40px] items-center'>
				<p className='font-[500] text-[10px] leading-[16px] md:w-[176px]'>
					{date}
				</p>
				<button>
					<RiDeleteBin3Fill />
				</button>
				<Link
					href={`/admin/event/edit-event/${slug}`}
					type='submit'
					className='px-[20px] py-[10px] rounded-full bg-black text-white  flex items-center gap-x-[10px] w-max '
				>
					<span className='text-white'>Edit</span>
					<img
						src={`/images/icons/arrowrightwhite.png`}
						className=' '
						alt='arrow logo'
					/>
				</Link>
			</div>
		</div>
	);
};
const ManageEvents = () => {
	return (
		<>
			{/* {items.map((item, i) => (
				<div key={i}>
					<Card
						name={item.name}
						email={item.email}
						date={item.date}
						slug={item.slug}
					/>
				</div>
			))} */}
			<EventTable />
		</>
	);
};

export default ManageEvents;
