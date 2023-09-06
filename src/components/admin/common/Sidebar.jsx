import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { links } from '../../../links';
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../../context/AuthContext';

const Sidebar = () => {
	let { activeMenu, setActiveMenu, screenSize, logout, login, user } =
		useStateContext();
	// const router = useRouter();
	// const handleLogout = async () => {
	// 	const data = await signOut({ redirect: false, callbackUrl: '/' });
	// 	router.push(data.url);
	// };
	const handleCloseSidebar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(false);
		}
	};
	// const pathname = usePathname();
	let pathname = '';
	const activeLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-blue-500 text-white text-md m-2';
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#8C8D8E] font-[400] text-[16px] dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
	return (
		<>
			{activeMenu && (
				<div className='h-screen overflow-y-auto md:overflow-x-hidden  md:hover:overflow-y-auto pb-[10px] w-[218px] bg-primaryGray mt-[50px] md:mt-[100px]'>
					<>
						<div className='flex justify-between items-center'>
							{/* <Link
							to='/'
							onClick={handleCloseSidebar}
							className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
						>
							<img
								src='/images/logo.png'
								alt='Devcent Logo'
								className='max-w-[200px]'
							/>
						</Link> */}
							<div className='mt-[30px] md:mt-[45px] mb-[20px] md:mb-[30px] pl-4'>
								<Link
									to='/events'
									type='submit'
									className='md:my-0 py-[10px] text-[16px] px-[20px] rounded-full border text-black border-black flex items-center gap-x-[10px]  w-max'
								>
									<span className=''>Events</span>
									<img
										src={require(`../../../images/icons/arrowright.png`)}
										className=' '
										alt='arrow logo'
									/>
								</Link>
							</div>
							<button
								type='button'
								onClick={() =>
									setActiveMenu((prevState) => !prevState)
								}
								className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
							>
								<MdOutlineCancel />
							</button>
						</div>
						<div className='mt-5 w-[225px]'>
							{links.map((item) => (
								<div key={item.title}>
									{/* <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p> */}

									{item.links.map((link) => {
										return (
											<NavLink
												to={`/${link.name}`}
												key={link.name}
												onClick={handleCloseSidebar}
												className={({
													isActive,
													isPending,
												}) =>
													isPending
														? 'pending'
														: isActive
														? activeLink
														: normalLink
												}
												// className={
												// 	// pathname.includes(link.name)
												// 	// ?
												// 	activeMenu
												// 		? normalLink
												// 		: activeLink
												// }
											>
												{link.icon}
												<span className='capitalize font-space font-[500] text-[14px] '>
													{/* {link.name == '/' ? 'overview' : link.name} */}
													{link.name}
												</span>
											</NavLink>
										);
									})}
								</div>
							))}
						</div>
					</>

					{/* <button
						onClick={() => signOut()}
						className='flex items-center w-[90%] gap-x-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md  mt-[40px]'
					>
						<FiSettings />
						<span className='capitalize'>Settings</span>
					</button>
					<button
						// onClick={() => {
						// 	signOut({
						// 		redirect: true,
						// 		callbackUrl: '/',
						// 	});
						// }}
						onClick={handleLogout}
						className='flex items-center w-[90%] gap-x-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md '
					>
						<FiLogOut />
						<span className='capitalize'>logout</span>
					</button> */}
				</div>
			)}
		</>
	);
};

export default Sidebar;
