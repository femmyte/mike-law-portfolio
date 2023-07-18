'use client';
import React, { useEffect } from 'react';
import { Box, Modal, Button, Fade } from '@mui/material/';
import Link from 'next/link';
// const style = {
// 	position: 'absolute',
// 	top: '50%',
// 	left: '50%',
// 	transform: 'translate(-50%, -50%)',
// 	width: 400,
// 	bgcolor: 'background.paper',
// 	border: '2px solid #000',
// 	boxShadow: 24,
// 	pt: 2,
// 	px: 4,
// 	pb: 3,
// };
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '85%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	overflow: 'auto',
	height: '90vh',
	p: 4,
};
function ChildModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Button onClick={handleOpen}>Open Child Modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='child-modal-title'
				aria-describedby='child-modal-description'
			>
				<Box sx={{ ...style, width: '75vw' }}>
					<h2 id='child-modal-title'>Text in a child modal</h2>
					<p id='child-modal-description'>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit.
					</p>
					<Button onClick={handleClose}>Close Child Modal</Button>
				</Box>
			</Modal>
		</React.Fragment>
	);
}

export default function NestedModal({ modalOpen, handleOpen }) {
	return (
		<div>
			<Modal
				open={modalOpen}
				onClose={() => handleOpen((preveState) => !preveState)}
				aria-labelledby='parent-modal-title'
				aria-describedby='parent-modal-description'
			>
				<Fade in={modalOpen}>
					<Box sx={{ ...style }}>
						<div className='md:flex gap-x-[120px] px-[20px] md:px-[70px] py-[20px] md:py-[70px] '>
							<div className='md:w-[830px] bg-[#F9F9F9] pb-[20px]'>
								<div className='w-full pb-[28px] h-max  rounded-t-[24px]'>
									<img
										src='/images/barcaprec.png'
										alt='about'
									/>
									<p className='font-[400] text-[25px] md:text-[32px] leading-[33px] md:leading-[38px] px-[26px] mt-[20px] md:mt-[47px]'>
										The Correctional Prowess of Justice Law
									</p>
								</div>
								<div className='px-[26px] bg-white h-max'>
									<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-[#B7B7B7] uppercase mt-[22px] mb-[12px]'>
										Location
									</p>
									<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-black mb-[22px] '>
										Eko Hotel & Suit, No. 45, Banana Island,
										Lagos, Nigeria
									</p>
									<div className='flex flex-col md:flex-row justify-between w-full'>
										<div className=''>
											<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-[#B7B7B7] uppercase mt-[22px] mb-[12px]'>
												details
											</p>
											<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-black mb-[22px] '>
												22nd Dec. 2023 - 10AM
											</p>
										</div>
										<div className=''>
											<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-[#B7B7B7] uppercase mt-[22px] mb-[12px]'>
												type
											</p>
											<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-black mb-[22px] '>
												22nd Dec. 2023 - 10AM
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full mt-[50px] mb-[20px]'>
								<p className='font-[400] text-[25px] md:text-[40px] leading-[33px] md:leading-[48px] mb-[37px] md:mb-[47px] mt-[20px] md:mt-0'>
									Your ticket placement is successful
								</p>
								<p className='font-[400] text-[16px] leading-[24px] mt-[24px] mb-[40px]'>
									Kindly check your mail to see further
									details. Thank You!
								</p>

								<div className='flex  justify-end'>
									<button
										onClick={() =>
											handleOpen(
												(preveState) => !preveState
											)
										}
										href='/'
										className='flex gap-x-[7px] items-center border border-black px-[20px] py-[10px] rounded-full w-max '
									>
										<span>Buy Another Ticket</span>
										<img
											src='/images/icons/arrowright.png'
											alt='arrow'
										/>
									</button>
									{/* <Link
										href='/'
										className='flex gap-x-[7px] items-center border border-black px-[20px] py-[10px] rounded-full w-max'
									>
										<span>Reserve Space</span>
										<img
											src='/images/icons/arrowright.png'
											alt='arrow'
										/>
									</Link> */}
								</div>
								<p className='clear-right'></p>
							</div>
						</div>
						{/* <ChildModal /> */}
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
