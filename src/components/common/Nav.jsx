'use client';
import React, { useState, useEffect } from 'react';
// import logo from '/images/logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GrFacebook, GrLinkedin, GrMenu, GrTwitter } from 'react-icons/gr';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsCartPlusFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
const Nav = () => {
	const [menu, setMenu] = useState(false);
	const [dropDown, setDropDown] = useState(false);
	const [joinDropDown, setJoinDropDown] = useState(false);
	const pathname = usePathname();
	// const isActive = (link) => pathname.startsWith(link);
	const isActive = (link) => pathname.includes(link);

	// currentPath = useRouter().pathname;
	useEffect(() => {}, []);
	// let currentPath;
	const handleMenu = () => {
		if (menu) {
			setMenu(false);
		} else {
			setMenu(true);
		}
	};
	const handleJoin = () => {
		if (joinDropDown) {
			setJoinDropDown(false);
			setDropDown(false);
		} else {
			setJoinDropDown(true);
		}
	};
	const handleDropDown = () => {
		if (dropDown) {
			setDropDown(false);
			setJoinDropDown(false);
		} else {
			setDropDown(true);
		}
	};
	// console.log(currentPath);

	return (
		<nav>
			<div className='py-3 md:px-[70px] px-[20px] bg-white md:h-[88px] w-screen mb-1 md:flex md:items-center md:justify-between text-2xl'>
				<div className='flex justify-between w-full'>
					<ul
						className={`${
							menu
								? 'top-[50px] opacity-100 pb-6 z-10 h-screen'
								: 'hidden'
						} md:justify-between md:flex md:items-center md:static absolute md:bg-transparent bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 text-xl text-[#B9B9B9]`}
					>
						<li
							className=' md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<Link
								className={`font-montserrat font-[500] text-[16px] duration-500 ${
									pathname === '/' && 'text-black'
								}`}
								href='/'
							>
								Home
							</Link>
						</li>
						<li
							className='md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<Link
								className={`font-montserrat font-[500] text-[16px] duration-500 ${
									isActive('/portfolio') && 'text-black'
								}`}
								href='/portfolio'
							>
								Portfolio
							</Link>
						</li>
						<li
							className='md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<Link
								className={`font-montserrat font-[500] text-[16px] duration-500 ${
									isActive('/store') && 'text-black'
								}`}
								href='/store'
							>
								Store
							</Link>
						</li>
						<li
							className='md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<Link
								className={`font-montserrat font-[500] text-[16px] duration-500 ${
									isActive('/blog') && 'text-black'
								}`}
								href='/blog'
							>
								Blog
							</Link>
						</li>
						<li
							className='md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<Link
								className={`font-montserrat font-[500] text-[16px] duration-500 ${
									isActive('/about') && 'text-black'
								}`}
								href='/about'
							>
								About
							</Link>
						</li>
						<li
							className='md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<Link
								className={`font-montserrat font-[500] text-[16px] duration-500 ${
									isActive('/contact') && 'text-black'
								}`}
								href='/contact'
							>
								Contact
							</Link>
						</li>
					</ul>
					<div className='hidden md:flex gap-x-[20px] items-center'>
						{/* <BsCartPlusFill /> */}
						<div className='relative'>
							<button
								type='button'
								// onClick={customFunc}
								className='relative text-xl rounded-full p-3 hover:bg-light-gray'
							>
								<BsCartPlusFill />
							</button>
							<div
								// style={{ backgroundColor: dotColor }}
								className='absolute  rounded-full h-[15px] w-[15px] right-[7px] top-[4px] text-[10px] text-white flex items-center justify-center'
							>
								{/* {num} */} 20
							</div>
						</div>
						<Link
							href='/events'
							className='py-[7px] px-[20px] rounded-full border border-black flex items-center gap-x-[7px]'
						>
							<span className=''>Event</span>
							<img
								src='/images/icons/arrowright.png'
								className=' '
								alt='Mike logo'
							/>
						</Link>
					</div>
				</div>
				<div className='flex justify-between items-center'>
					<Link href='/'>
						<img
							src='/images/mobile/logo.png'
							className=' md:hidden'
							alt='Mike logo'
						/>
					</Link>
					<span className='text-3xl cursor-pointer mx-3 md:hidden block'>
						<GrMenu onClick={() => setMenu(!menu)} />
					</span>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
