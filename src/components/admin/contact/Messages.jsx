import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FullLoader from '../../loaders/FullLoaders';
import FullError from '../../errors/FullError';
import { useFetch } from '../../../utils/services/hooks/useFetch';

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
const Card = ({ name, email, date, id }) => {
	return (
		<div className='flex gap-y-4 md:flex-row rounded-[10px] py-[9px] px-[10px] md:px-[24px] md:rounded-full bg-white border border-black shadow w-full justify-between items-center md:h-[64px] mb-[14px]'>
			<div className='flex gap-x-[15px] items-center'>
				<div className='w-[24px] h-[24px] rounded-full bg-black'></div>
				<p className='font-[500] text-[15px] md:text-[10px] leading-[16px] md:w-[176px]'>
					{name}
				</p>
			</div>
			<p className='hidden md:block font-[500] text-[10px] leading-[16px] md:w-[176px]'>
				{email}
			</p>
			<p className='hidden md:block font-[500] text-[10px] leading-[16px] md:w-[176px]'>
				{dateCoversion(date)}
			</p>
			<Link
				to={`/admin/contact/message/${id}`}
				type='submit'
				className='p-[10px] rounded-full bg-black text-white  flex items-center gap-x-[10px] w-max '
			>
				<span className='text-white'>View</span>
				<img
					src={require(`../../../images/icons/arrowrightwhite.png`)}
					className=' '
					alt='arrow logo'
				/>
			</Link>
		</div>
	);
};
const Messages = () => {
	const url = '/contact';
	const [tableData, setTableData] = useState([]);
	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		url,
		`get-${url}`
	);
	useEffect(() => {
		if (isSuccess) {
			setTableData(data);
		}
	}, [isSuccess, data]);
	console.log(data);
	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}

	return (
		<>
			{tableData.length === 0 && (
				<p className='font-[500] text-[15px] leading-[16px] text-center my-[30px] '>
					No Message Yet
				</p>
			)}
			{tableData?.map((item) => (
				<div key={item._id}>
					<Card
						name={item.senderName}
						email={item.emailAddress}
						date={item.createdAt}
						id={item._id}
					/>
				</div>
			))}
		</>
	);
};

export default Messages;
