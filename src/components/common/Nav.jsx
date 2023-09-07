import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { BsCartPlusFill } from 'react-icons/bs';
import { useDataContext } from '../../utils/DataContext';
const Nav = () => {
	const [menu, setMenu] = useState(false);
	const [dropDown, setDropDown] = useState(false);
	const [joinDropDown, setJoinDropDown] = useState(false);
	// const isActive = (link) => pathname.startsWith(link);
	// const isActive = (link) => pathname.includes(link);
	// let cart = [];
	// currentPath = useRouter().pathname;
	// let cart = [];
	// useEffect(() => {
	let { cart } = useDataContext();
	// cart = cart?.cart;
	// }, []);
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
	const activeLink =
		'font-montserrat font-[500] text-[16px] duration-500 text-black';
	const normalLink = 'font-montserrat font-[500] text-[16px] duration-500';
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
							<NavLink
								to='/'
								className={({ isActive, isPending }) =>
									isPending
										? 'pending'
										: isActive
										? activeLink
										: normalLink
								}
							>
								{' '}
								Home{' '}
							</NavLink>
						</li>
						<li
							className='md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<NavLink
								to='/portfolio'
								className={({ isActive, isPending }) =>
									isPending
										? 'pending'
										: isActive
										? activeLink
										: normalLink
								}
							>
								{' '}
								Portfolio{' '}
							</NavLink>
							{/* <Link
								className={`font-montserrat font-[500] text-[16px] duration-500 ${
									isActive('/portfolio') && 'text-black'
								}`}
								href='/portfolio'
							>
								Portfolio
							</Link> */}
						</li>
						<li
							className='md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<NavLink
								to='/store'
								className={({ isActive, isPending }) =>
									isPending
										? 'pending'
										: isActive
										? activeLink
										: normalLink
								}
							>
								{' '}
								Store{' '}
							</NavLink>
						</li>
						<li
							className='md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<NavLink
								to='/blog'
								className={({ isActive, isPending }) =>
									isPending
										? 'pending'
										: isActive
										? activeLink
										: normalLink
								}
							>
								{' '}
								Blog{' '}
							</NavLink>
						</li>
						<li
							className='md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<NavLink
								to='/about'
								className={({ isActive, isPending }) =>
									isPending
										? 'pending'
										: isActive
										? activeLink
										: normalLink
								}
							>
								{' '}
								About{' '}
							</NavLink>
						</li>
						<li
							className='md:mr-[27px] my-3 md:my-0 hover:text-primary'
							onClick={() => setMenu(!menu)}
						>
							<NavLink
								to='/contact'
								className={({ isActive, isPending }) =>
									isPending
										? 'pending'
										: isActive
										? activeLink
										: normalLink
								}
							>
								{' '}
								Contact{' '}
							</NavLink>
						</li>
					</ul>
					<div className='hidden md:flex gap-x-[20px] items-center'>
						{/* <BsCartPlusFill /> */}
						<Link
							to={'/cart'}
							type='button'
							// onClick={customFunc}
							className='relative text-xl rounded-full p-3 hover:bg-light-gray'
						>
							{/* <div className='relative'> */}
							<BsCartPlusFill />

							<div
								// style={{ backgroundColor: dotColor }}
								className='absolute bg-black rounded-full h-[15px] w-[15px] right-[7px] top-[4px] text-[10px] text-white flex items-center justify-center'
							>
								{cart?.map((num) => num.quantity)}
							</div>
							{/* </div> */}
						</Link>
						<Link
							to='/events'
							className='py-[7px] px-[20px] rounded-full border border-black flex items-center gap-x-[7px]'
						>
							<span className=''>Event</span>
							<img
								src={require('../../images/icons/arrowright.png')}
								className=' '
								alt='Mike logo'
							/>
						</Link>
					</div>
				</div>
				<div className='flex justify-between items-center'>
					<Link to='/'>
						<img
							src={require('../../images/mobile/logo.png')}
							className=' md:hidden'
							alt='Mike logo'
						/>
					</Link>
					<div className='flex gap-2 items-center md:hidden'>
						<div className='relative'>
							<Link
								to={'/cart'}
								type='button'
								// onClick={customFunc}
								className='relative text-xl rounded-full p-3 hover:bg-light-gray'
							>
								<BsCartPlusFill />
							</Link>
							<div
								// style={{ backgroundColor: dotColor }}
								className='absolute bg-black rounded-full h-[15px] w-[15px] right-[7px] top-[4px] text-[10px] text-white flex items-center justify-center'
							>
								{cart && cart.length <= 0
									? 0
									: cart.map((num) => num.quantity)}
							</div>
						</div>
						<span className='text-3xl cursor-pointer mx-3 '>
							<GrMenu onClick={() => setMenu(!menu)} />
						</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
