import React from 'react';
import Link from 'next/link';
const Header = ({ title, link, btnText }) => {
	return (
		<div className='px-[20px] md:px-[70px] py-[72px] md:py-[100px] bg-[#F3F3F3] '>
			<h1 className='font-[400] text-[28px] md:text-[60px] leading-[38px] md:leading-[80px] mb-[40px] md:mb-[24px] md:w-[80%] tracking-tighter capitalize'>
				{title}
			</h1>
			<p className='mb-[12px] font-[500] text-[20px] leading-[28px] md:text-[24px] md:leading-[33.6px] tracking-tighter'>
				Chief Mike Agbedor Abu Ozekhome,
			</p>
			<p className='mb-[40px] font-[400] text-[12px] leading-4 md:text-[20px] md:leading-[28px]  w-full md:w-[550px] tracking-tighter'>
				[SAN, OFR, KSM, D.A, HonDL, JD, D.Phil, HonMA(HC), LL.M, LL.B
				(HONS), BL, KSM, F.AES, FNIM, MNIPR, F.ITMN, F.ICA, F.chMC,
				FNIER, LFIBA, PEFON FIARSA, F.hcd, FCLED, FIMC]
			</p>
			<div className='flex items-center justify-center md:justify-between gap-x-[15px]'>
				<div className='w-[90%] max-w-[80%] bg-black h-[1px] hidden md:block'></div>
				<Link
					href='/portfolio'
					className='py-[10px] text-[16px] px-[20px] rounded-full border border-black flex flex-nowrap justify-between items-center gap-x-[7px]  w-max'
				>
					<span className='w-max'> {btnText}</span>
					<img
						src={`/images/icons/arrowright.png`}
						className=' '
						alt='arrow logo'
					/>
				</Link>
			</div>
		</div>
	);
};

export default Header;
