import React, { useState, useEffect } from 'react';
import InputLine from '../../components/admin/common/InputLine';

import AddEvent from '../../components/admin/events/AddEvent';
import ManageEvent from '../../components/admin/events/ManageEvent';

const Events = () => {
	const [show, setShow] = useState('add');

	return (
		<div className='px-[20px] w-full'>
			<InputLine
				placeholder='Edit Your Profile to Meet Up New Achievements'
				btnText='Save'
			/>
			<div className='flex items-center justify-center gap-x-[20px] mt-[44px] mb-[70px] md:w-[50%] mx-auto'>
				<div className='flex flex-col w-[170px] '>
					<button
						className={`mb-[12px] text-center text-[16px] font-[400] leading-[19px]
						${show === 'add' ? 'text-black' : 'text-[#929292]'}
						`}
						onClick={() => setShow('add')}
					>
						Add Event
					</button>
					<div
						className={`w-full h-[2px] ${
							show === 'add' ? 'bg-black' : 'bg-[#929292]'
						}`}
					></div>
				</div>
				<div className='flex flex-col w-[170px] '>
					<button
						className={`mb-[12px] text-center text-[16px] font-[400] leading-[19px]
						${show === 'manage' ? 'text-black' : 'text-[#929292]'}
						`}
						onClick={() => setShow('manage')}
					>
						Manage Event
					</button>
					<div
						className={`w-full h-[2px] ${
							show === 'manage' ? 'bg-black' : 'bg-[#929292]'
						}`}
					></div>
				</div>
			</div>
			{show === 'add' ? <AddEvent /> : <ManageEvent />}
		</div>
	);
};

export default Events;
