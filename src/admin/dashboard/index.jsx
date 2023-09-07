import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/admin/common/DashboardLayout';
const Card = ({ children, first, link }) => {
	// const { user } = useSession(
	// 	{
	// 		required: true,
	// 		onU
	// 	}
	// );

	// console.log(user);
	return (
		<Link to={`/admin/${link ? link : 'dashboard'}`} type='submit'>
			<div
				className={`shadow  min-h-[236px] md:h[236px]  px-[20px] bg-transparent py-[35px] rounded-[8px] md:max-w-[237px] ${
					first && 'border-b-[4px] border-b-black bg-white'
				}`}
			>
				{children}
			</div>
		</Link>
	);
};
const Dashboard = () => {
	return (
		<DashboardLayout>
			<div className='flex flex-col md:flex-row gap-x-[20px]'>
				<div className='shadow flex-1 py-[20px] md:py-0 md:h-[200px] bg-primaryGray flex flex-col md:flex-row justify-center gap-y-[20px] md:justify-around items-center rounded-[12px]'>
					<div className=''>
						<h1 className='font-[500] text-[52px] leading-[52px] mb-[4px] text-center text-black'>
							122
						</h1>
						<p className='font-[400] text-[12px] leading-[16px] text-center'>
							Visit
						</p>
					</div>
					<div className=''>
						<h1 className='font-[500] text-[52px] leading-[52px] mb-[4px] text-center text-black'>
							12
						</h1>
						<p className='font-[400] text-[12px] leading-[16px] text-center'>
							Bounce
						</p>
					</div>
					<div className=''>
						<h1 className='font-[500] text-[52px] leading-[52px] mb-[4px] text-center text-black'>
							300
						</h1>
						<p className='font-[400] text-[12px] leading-[16px] text-center text-black'>
							Impression
						</p>
					</div>
				</div>
				<div className='shadow flex-1 py-[20px] md:py md:h-[200px] bg-white flex flex-col md:flex-row px-[20px] md:px-0 md:pl-[41px] items-center rounded-[12px]'>
					<div className=''>
						<h1 className='font-[500] text-[40px] md:text-[52px] leading-[52px] mb-[4px]'>
							Create Blog
						</h1>
						<p className='font-[400] text-[12px] leading-[16px] md:w-[332px]'>
							Click the below button to start creating blog now
						</p>
						<Link
							to={'/admin/blog'}
							type='submit'
							className='my-[20px] py-[10px] text-[16px] px-[20px] rounded-full border text-black border-black flex items-center gap-x-[10px]  w-max'
						>
							<span className=''>Create Blog</span>
							<img
								src={require(`../../images/icons/arrowright.png`)}
								className=' '
								alt='arrow logo'
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className='bg-primaryGray rounded-[12px] mt-[16px] py-[28px] px-[41px]'>
				<div className='flex flex-col md:flex-row rounded-[10px] py-[20px] md:rounded-full bg-black w-full md:justify-between items-center md:h-[64px]'>
					<input
						type='text'
						className='w-full md:w-4/5 bg-transparent border-none focus:border-none focus:outline-none text-white rounded-l-full px-[20px] h-[64px]'
						placeholder='Edit Your Profile to Meet Up New Achievements'
					/>
					{/* <div className='flex justify-end mb-[20px] items-center'> */}
					<button
						type='submit'
						className='p-[10px] rounded-full border text-white border-white flex items-center gap-x-[10px]  w-max mr-[20px]'
					>
						<span className='text-white'>Edit Profile</span>
						<img
							src={require(`../../images/icons/arrowrightwhite.png`)}
							className=' '
							alt='arrow logo'
						/>
					</button>
					{/* </div> */}
				</div>
				<div className='mt-[32px] flex flex-col md:flex-row gap-y-[20px] justify-between gap-x-[20px]'>
					<Card first link={'store'}>
						<div className='flex justify-end mb-[20px]'>
							<Link
								to={'/admin/store'}
								type='submit'
								className='p-[10px] rounded-full border text-black border-black flex items-center gap-x-[10px]  w-max'
							>
								<img
									src={require(`../../images/icons/arrowright.png`)}
									className=' '
									alt='arrow logo'
								/>
							</Link>
						</div>
						<div className=''>
							<h1 className='font-[500] text-[20px] leading-[24px] mb-[4px] text-black'>
								Manage Products
							</h1>
							<p className='font-[400] text-[12px] leading-[16px]'>
								manage your Products and services by selecting
								here
							</p>
						</div>
					</Card>
					<Card first link={'contact'}>
						<div className='flex justify-end mb-[20px]'>
							<Link
								to={'/admin/contact'}
								type='submit'
								className='p-[10px] rounded-full border text-black border-black flex items-center gap-x-[10px]  w-max'
							>
								<img
									src={require(`../../images/icons/arrowright.png`)}
									className=' '
									alt='arrow logo'
								/>
							</Link>
						</div>
						<div className=''>
							<h1 className='font-[500] text-[20px] leading-[24px] mb-[4px] text-black'>
								Manage Contact
							</h1>
							<p className='font-[400] text-[12px] leading-[16px]'>
								Select here to manage the message sent to you
								from your customer
							</p>
						</div>
					</Card>
					<Card first link={'blog'}>
						<div className='flex justify-end mb-[20px]'>
							<Link
								to={'/admin/blog'}
								type='submit'
								className='p-[10px] rounded-full border text-black border-black flex items-center gap-x-[10px]  w-max'
							>
								<img
									src={require(`../../images/icons/arrowright.png`)}
									className=' '
									alt='arrow logo'
								/>
							</Link>
						</div>
						<div className=''>
							<h1 className='font-[500] text-[20px] leading-[24px] mb-[4px] text-black'>
								Manage Blog
							</h1>
							<p className='font-[400] text-[12px] leading-[16px]'>
								View and manage your blog post by Clicking here
							</p>
						</div>
					</Card>
					<Card first link={'portfolio'}>
						<div className='flex justify-end mb-[20px]'>
							<Link
								to={'/admin/portfolio'}
								type='submit'
								className='p-[10px] rounded-full border text-black border-black flex items-center gap-x-[10px]  w-max'
							>
								<img
									src={require(`../../images/icons/arrowright.png`)}
									className=' '
									alt='arrow logo'
								/>
							</Link>
						</div>
						<div className=''>
							<h1 className='font-[500] text-[20px] leading-[24px] mb-[4px] text-black'>
								Manage Portfolio
							</h1>
							<p className='font-[400] text-[12px] leading-[16px]'>
								Add, View and update your portfolio for people
								to know your better
							</p>
						</div>
					</Card>
				</div>
				<div className='mt-[32px] flex flex-col md:flex-row gap-y-[20px] gap-x-[20px]'>
					<Card>
						<div className='mb-[22px]'>
							<h1 className='font-[500] text-[52px] leading-[52px] mb-[4px] text-black'>
								122
							</h1>
							<p className='font-[400] text-[12px] leading-[16px] '>
								Product Sold
							</p>
						</div>
						<div className=''>
							<h1 className='font-[500] text-[20px] leading-[24px] mb-[4px] text-black'>
								N453,094
							</h1>
							<p className='font-[400] text-[12px] leading-[16px]'>
								This is the total amount of all the products
								sold in your store.
							</p>
						</div>
					</Card>
					<Card>
						<div className='mb-[22px]'>
							<h1 className='font-[500] text-[52px] leading-[52px] mb-[4px] text-black'>
								122
							</h1>
							<p className='font-[400] text-[12px] leading-[16px] '>
								Event Summary
							</p>
						</div>
						<div className=''>
							<h1 className='font-[500] text-[20px] leading-[24px] mb-[4px] text-black'>
								423 Participants
							</h1>
							<p className='font-[400] text-[12px] leading-[16px]'>
								This is the total amount of all the participants
								in all your events.
							</p>
						</div>
					</Card>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Dashboard;
