import React from 'react';
import Link from 'next/link';
const Button = ({ link, iconPosition }) => {
	return (
		<button
			href='/'
			className='py-[10px] px-[20px] rounded-full border border-black flex items-center gap-x-[7px]'
		>
			<span className=''> View</span>
			<img
				src={`/images/icons/arrow${iconPosition}.png`}
				className=' '
				alt='alpha blue logo'
			/>
		</button>
	);
};

export default Button;
