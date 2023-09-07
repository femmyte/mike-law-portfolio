import React from 'react';
import OrderTable from '../../components/admin/store/OrderTable';
import DashboardLayout from '../../components/admin/common/DashboardLayout';

const Orders = () => {
	return (
		<DashboardLayout>
			<div className='px-[20px] w-full'>
				{/* <InputLine
				placeholder='Edit Your Profile to Meet Up New Achievements'
				btnText='Save'
			/> */}
				<div className='mt-[20px]'>
					<OrderTable />
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Orders;
