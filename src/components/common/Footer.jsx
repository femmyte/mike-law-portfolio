import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
	return (
		<footer className=''>
			<div className='h-[400px] md:h-[422px] flex flex-col items-center justify-center text-white bg-[#212121] w-full px-[20px]'>
				<h3 className='mt-[53px] md:mt-[64px] mb-[16px] font-[500] text-[16px] leading-[24px] uppercase text-[#B7B7B7] tracking-[0.1em] '>
					newsletter
				</h3>
				<p className='font-[400] text-[28px] md:text-[40px] leading-[38px] md:leading-[48px] mb-[46px] md:mb-[80px] md:w-[531px] text-left md:text-center '>
					Never miss a study or event with our extra-ordinary law
					advocate
				</p>
				<div className='flex justify-between w-full md:w-[531px] border-b border-[#B7B7B7] '>
					<input
						type='text'
						className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-4/5 p-3 focus:outline-none'
						placeholder='Email Address Here'
					/>
					<button className='flex gap-x-[7px] items-center'>
						<span>Submit</span>
						<img
							src={require('../../images/icons/arrowrightwhite.png')}
							alt='arrow'
						/>
					</button>
				</div>
				<div className='flex items-center justify-center gap-x-[17px] mt-[20px] md:w-[531px]'>
					<img
						src={require('../../images/icons/privacy.png')}
						alt=''
					/>
					<span>I agree with the Privacy Policy</span>
				</div>
			</div>
			<div className='h-[393px] md:h-[386px] flex  flex-row md:flex-col items-center justify-between md:justify-center text-white bg-[#1C1C1C] w-full px-[20px]'>
				<div className=''>
					<h3 className='md:mt-[64px] mb-[16px] font-[500] text-[12px] md:text-[16px] leading-[24px] uppercase text-[#B7B7B7] tracking-[0.1em] text-center '>
						menu navigation
					</h3>
					<ul className='flex flex-col md:flex-row md:gap-x-[20px]'>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='/' className=''>
								Home
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='/portfolio' className=''>
								Portfolio
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='/events' className=''>
								Event
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='/store' className=''>
								Store
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='/blog' className=''>
								Blog
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='/about' className=''>
								About
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='/contact' className=''>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div className='md:mt-[42px]'>
					<h3 className=' md:mt-[64px] mb-[16px] font-[500] text-[12px] md:text-[16px] leading-[24px] uppercase text-[#B7B7B7] tracking-[0.1em] text-center '>
						Social Media
					</h3>
					<ul className='flex flex-col md:flex-row md:gap-x-[20px]'>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='' className=''>
								Telegram
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='' className=''>
								Youtube
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='' className=''>
								Twitter
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='' className=''>
								Facebook
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='' className=''>
								Instagram
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='' className=''>
								LinkedIn
							</Link>
						</li>
						<li className='text-[16px] font-[400] leading-[24px] text-[#B7B7B7]'>
							<Link to='' className=''>
								{' '}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
