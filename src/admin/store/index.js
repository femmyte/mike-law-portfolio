import React, { useState, useEffect } from 'react';
import InputLine from '../../components/admin/common/InputLine';

import AddProduct from '../../components/admin/store/AddProduct';
import ManageProducts from '../../components/admin/store/ManageProducts';
import DashboardLayout from '../../components/admin/common/DashboardLayout';
const Store = () => {
	const [show, setShow] = useState('add');

	return (
		<DashboardLayout>
			<div className='px-[20px] w-full'>
				<InputLine
					placeholder='Add a New Product to your Store'
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
							Add Product
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
							Manage Products
						</button>
						<div
							className={`w-full h-[2px] ${
								show === 'manage' ? 'bg-black' : 'bg-[#929292]'
							}`}
						></div>
					</div>
				</div>
				{show === 'add' ? <AddProduct /> : <ManageProducts />}
			</div>
		</DashboardLayout>
	);
};

export default Store;
