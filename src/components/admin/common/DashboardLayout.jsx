import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useStateContext } from '../../../context/AuthContext';
import { ToastContainer } from 'react-toastify';

function DashboardLayout({ children }) {
	const { activeMenu, darkToggle, login } = useStateContext();
	// const { activeMenu, darkToggle, login } = false;

	// const location = useLocation();
	// console.log('hash', location.hash);
	// console.log(login)
	return (
		<div className={`${darkToggle && 'dark'} App`}>
			<div className='flex relative dark:bg-main-dark-bg pr-0 md:pr-[70px]'>
				{activeMenu ? (
					<div
						className={` ${
							login
								? 'hidden w-0 md:w-0'
								: 'w-full h-full md:w-[218px] fixed sidebar dark:bg-secondary-dark-bg bg-white'
						} `}
					>
						<Sidebar />
					</div>
				) : (
					<div
						className={`${
							login
								? 'hidden w-0'
								: 'w-0 dark:bg-secondary-dark-bg'
						} `}
					>
						<Sidebar />
					</div>
				)}

				<div
					className={`
              ${
					activeMenu && !login ? 'md:ml-[218px] w-[82%]' : 'flex-2'
				} dark:bg-main-bg bg-main-bg min-h-screen w-full`}
				>
					<div
						className={`${
							login
								? 'hidden w-0'
								: ' md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'
						}`}
					>
						<Navbar />
					</div>
					<div className=' min-h-screen'>
						<div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white pt-[50px] md:pt-0 '>
							<div className=' pb-[30px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  md:pl-[20px]'>
								<ToastContainer position='bottom-center' />
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardLayout;
