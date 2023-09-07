import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Animation from './Animation';
import Button from './Button';
import { FaUser } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Practice = ({ title, description, link }) => {
	const [show, setShow] = useState(false);
	return (
		<div className='mb-[12px] bg-[#F9F9F9] rounded-[32px] md:rounded-[80px]'>
			<div
				className={` w-full rounded-[32px] md:rounded-[80px] px-[24px] md:px-[32px] py-[15px] md:py-[22px] bg-white `}
				// style={{ backgroundColor: isActive ? 'white' : '#e0e0e0' }}
			>
				<div className='flex  justify-between items-center w-[100%]  '>
					<p className='font-[500] text-[12px] md:text-[20px] leading-[16px] md:leading-[32px] '>
						{title}
					</p>
					{/* </div> */}

					<div className=''>
						<button
							onClick={() => {
								setShow((preState) => !preState);
							}}
							href={link}
							className='py-[5px] md:py-[10px]  md:px-[20px] rounded-full border border-black flex items-center justify-evenly gap-x-[7px] w-[90px]'
						>
							<span className=''> View</span>
							<img
								src={require(`../../images/icons/arrow${
									show ? 'up' : 'down'
								}.png`)}
								className=' '
								alt='alpha blue logo'
							/>
						</button>
					</div>
				</div>
			</div>
			<div
				className={`${
					show
						? 'block bg-[#F9F9F9] rounded-[32px] md:rounded-[80px] md:flex justify-end'
						: 'hidden'
				} ${description && 'py-[23px] md:py-[32px] px-[24px]'} `}
			>
				{/* <p className='w-[40%] hidden '></p> */}
				<p className='text-justify md:w-[60%] text-[12px] md:text-[16px] leading-[20px] md:leading-[32px] font-[400]'>
					{description}
				</p>
			</div>
		</div>
	);
};

export default Practice;
