'use client';
import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
// import { data } from "./Notification";

import { useStateContext } from '../../../app/admin/AuthContext';

const NavButton = ({ title, customFunc, icon, color, dotColor, num }) => (
	<div className='relative'>
		<button
			type='button'
			onClick={customFunc}
			style={{ color }}
			className='relative text-xl rounded-full p-3 hover:bg-light-gray'
		>
			{icon}
		</button>
		<div
			style={{ backgroundColor: dotColor }}
			className='absolute rounded-full h-[15px] w-[15px] right-[7px] top-[4px] text-[10px] text-white flex items-center justify-center'
		>
			{num}
		</div>
	</div>
);
const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		logout,
		login,
		screenSize,
		setScreenSize,
		darkToggle,
		setDarkToggle,
	} = useStateContext();

	const { data: session } = useSession();
	const [dropDown, setDropDown] = useState(false);
	const [notificationdropDown, setNotificationdropDown] = useState(false);
	// const user = getUser()

	const handleLogout = () => {
		// removeUserSession();
		// logout();
		// navigate("/login");
		// handleCloseSidebar();
		// setActiveMenu(false);
		console.log('loggingout');
	};

	const handleDropDown = () => {
		if (dropDown) {
			setDropDown(false);
			setNotificationdropDown(false);
		} else {
			setDropDown(true);
		}
	};
	const handleNotificationDropDown = () => {
		setNotificationdropDown(true);
		if (notificationdropDown) {
			setDropDown(false);
			setNotificationdropDown(false);
		} else {
			setNotificationdropDown(true);
		}
	};

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div
			className='flex justify-between p-2 md:pt-[40px] z-[10] relative  text-white dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white pb-[20px] box-border'
			//   style={{ borderBottom: "0.6px solid #878787" }}
		>
			<NavButton
				title='Menu'
				customFunc={() => setActiveMenu((prevState) => !prevState)}
				color='blue'
				icon={<AiOutlineMenu />}
			/>
			<div className=''>
				<button
					type='submit'
					className='md:my-0 py-[10px] text-[16px] px-[20px] rounded-full border text-black border-black flex items-center gap-x-[10px]  w-max'
				>
					<span className=''>Log Out</span>
					<img
						src={`/images/icons/arrowright.png`}
						className=' '
						alt='arrow logo'
					/>
				</button>
			</div>
			{/* <div className='flex gap-x-[50px]'>
				<NavButton
					title='Mode'
					customFunc={() => setDarkToggle((prevState) => !prevState)}
					color='white'
					icon={<AiOutlineMail />}
					dotColor='red'
					num={4}
				/>

				<div
					className={`${
						notificationdropDown
							? 'mt-[10px] md:mt-0'
							: 'my-3 md:my-0'
					} md:m-[30px]  relative flex items-center gap-2 hover:bg-light-gray rounded-lg  `}
					// onMouseEnter={handleNotificationDropDown}
					// onClick={() => setNotificationdropDown(!notificationdropDown)}
					// onMouseLeave={() => setNotificationdropDown(false)}
				>
					<NavButton
						title='Notifications'
						dotColor='red'
						customFunc={() =>
							setNotificationdropDown(!notificationdropDown)
						}
						color='white'
						num={2}
						icon={<RiNotification3Line />}
					/>
					<ul
						className={`${
							notificationdropDown
								? 'top-[45px] right-[2px] opacity-100 z-20 '
								: 'hidden'
						} absolute  bg-white  font-normal text-xl w-[98vw] md:w-[384px] shadow-lg border rounded-lg overflow-y-auto dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white`}
						style={{
							zIndex: 20,
							boxShadow:
								'0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
						}}
					>
						<div className='flex w-full h-[40px] justify-center items-center bg-[#F9FAFB] rounded-lg dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'>
							<p className='font-[500] text-[16px] leading-6 text-[#111928] dark:text-gray-200'>
								Notifications
							</p>
						</div>

						<div className='flex w-full h-[40px] justify-center items-center bg-[#F9FAFB] rounded-lg'>
							<IoEyeSharp color='#6B7280' />
							<p className='font-[500] text-[16px] leading-6 text-[#111928] ml-[8px]'>
								View All
							</p>
						</div>
					</ul>
				</div>
				<div
					className={`${
						dropDown ? 'mt-[10px] md:mt-0' : 'my-3 md:my-0'
					} md:mr-[30px]  relative flex items-center gap-2 cursor-pointer hover:bg-light-gray rounded-lg `}
					onMouseEnter={handleDropDown}
					onClick={() => setDropDown(!dropDown)}
					onMouseLeave={() => setDropDown(false)}
					// onClick={() => handleClick("userProfile")}
				>
					<p className='text-gray-400 text-[10px] md:text-14 font-bold ml-1'>
						Tosin
					</p>
					<img
						src='/images/instructor/alalade.png'
						alt='avatar'
						className='rounded-full w-8 h-8 ml-4'
					/>
				</div>
			</div> */}
		</div>
	);
};

export default Navbar;
