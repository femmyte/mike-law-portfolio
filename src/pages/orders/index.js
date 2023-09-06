import React from 'react';
import OrderTable from '../../components/admin/store/OrderTable';

const Orders = () => {
	return (
		<div className='px-[20px] w-full'>
			{/* <InputLine
				placeholder='Edit Your Profile to Meet Up New Achievements'
				btnText='Save'
			/> */}
			<div className='mt-[20px]'>
				<OrderTable />
			</div>
		</div>
	);
};

export default Orders;
