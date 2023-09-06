import React from 'react';

const InputLine = ({ placeholder, btnText }) => {
	return (
		<div className='flex flex-col md:flex-row rounded-[10px] py-[15px] px-[20px] md:py-[20px] md:rounded-full bg-white border border-black w-full md:justify-between items-center md:h-[64px]'>
			{placeholder}
			{/* <div className='w-full bg-transparent border-none focus:border-none focus:outline-none text-black rounded-l-full px-[20px] h-[64px]'>
			</div> */}
			{/* <input
				type='text'
				className='w-full md:w-4/5 bg-transparent border-none focus:border-none focus:outline-none text-black rounded-l-full px-[20px] h-[64px]'
				placeholder={placeholder}
			/> */}
			{/* <button
				type='submit'
				className='p-[10px] rounded-full bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
			>
				<span>{btnText}</span>
				<img
					src={`/images/icons/arrowright.png`}
					className=' '
					alt='arrow logo'
				/>
			</button> */}
		</div>
	);
};

export default InputLine;
