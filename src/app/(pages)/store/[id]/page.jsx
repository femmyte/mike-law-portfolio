'use client';
import React, { useState, useEffect } from 'react';
import Article from '../../../../components/pages/Article';
import Header from '../../../../components/common/Header';
import Link from 'next/link';
import { products } from '../products';
import { toast } from 'react-toastify';
import FullLoader from '@/components/loaders/FullLoaders';
import FullError from '@/components/errors/FullError';
import { useFetch } from '@/utils/services/hooks/useFetch';
import { useSubmit } from '@/utils/services/hooks/useSubmit';
// export const revalidate = 0;
export const dynamic = 'force-dynamic';
const SingleStore = ({ params: { id } }) => {
	const [product, setProduct] = useState([]);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [country, setCountry] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [otherInfo, setOtherInfo] = useState('');
	const [btnClicked, setBtnClicked] = useState(false);
	const [state, setState] = useState('');
	const [type, setType] = useState('');
	const { submitItem } = useSubmit();
	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		`/store/${id}`,
		'get-single-product-user'
	);
	useEffect(() => {
		if (isSuccess) {
			setProduct(data);
		}
	}, [isSuccess, data]);

	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}

	console.log(type);
	async function handleSubmit(e) {
		e.preventDefault();
		setBtnClicked(true);
		const url = '/order';
		const itemData = {
			customerName: name,
			emailAddress: email,
			productId: product?._id,
			phoneNumber: phoneNumber,
			address: address,
			country: country,
			state: state,
			extraInformation: otherInfo,
			type: type,
		};
		const result = await submitItem({ url, itemData });

		if (result.isError === false) {
			toast('Area Details created successfully');
			setName('');
			setEmail('');
			setCountry('');
			setAddress('');
			setOtherInfo('');
			setState('');
			setType({});
			setBtnClicked(false);
		}
		setBtnClicked(false);

		console.log(result.data);
		console.log(result.message);
		console.log(result.isError);
	}
	const removePTags = (text) => {
		const regex = /<p[^>]*>(.*?)<\/p>/g;
		return text?.replace(regex, '$1');
	};
	return (
		<>
			<Header
				title={product?.name}
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>

			<div className='md:flex gap-x-[120px] px-[20px] md:px-[70px] py-[20px] md:py-[70px] '>
				<div className='md:w-[830px] bg-[#F9F9F9] pb-[20px]'>
					<div className='w-full pb-[28px] h-max  rounded-t-[24px]'>
						<img
							src={`${
								product?.coverImage
									? product?.coverImage
									: '/images/barcaprec.png'
							}`}
							alt='about'
						/>
						<p className='font-[400] text-[25px] md:text-[32px] leading-[33px] md:leading-[38px] px-[26px] mt-[20px] md:mt-[47px]'>
							{product?.name}
						</p>
						<p className='font-[400] text-[25px] md:text-[32px] leading-[33px] md:leading-[38px] px-[26px] mt-[20px] md:mt-[47px]'>
							#{Number(product?.price).toLocaleString()}
						</p>
					</div>
					<div className='px-[26px] bg-white h-max'>
						<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-[#B7B7B7] uppercase mt-[22px] mb-[12px]'>
							Description
						</p>
						<p className='font-[500] text-[16px] md:text-[16px]  md:leading-[24px]  text-black mb-[22px] text-justify '>
							{removePTags(product?.description)}
						</p>
					</div>
				</div>
				<form
					onSubmit={handleSubmit}
					className='w-full mt-[50px] mb-[20px]'
				>
					<p className='font-[400] text-[25px] md:text-[40px] leading-[33px] md:leading-[48px] mb-[37px] md:mb-[47px] mt-[20px] md:mt-0'>
						Pay for your Product with our safe and secure payment
						automation.
					</p>
					<div className=' border-b border-[mt-[20px] md:#B7B7B7] '>
						<input
							type='text'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='Your Name Here'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<input
							type='email'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='Your email address here'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<input
							type='text'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='Phone Number'
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							required
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<input
							type='text'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='Address'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<input
							type='text'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='State'
							value={state}
							onChange={(e) => setState(e.target.value)}
							required
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<input
							type='text'
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
							placeholder='Country'
							value={country}
							onChange={(e) => setCountry(e.target.value)}
							required
						/>
					</div>
					<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
						<textarea
							type='text'
							id=''
							className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none h-[80px]'
							placeholder='Extra Information'
							value={otherInfo}
							onChange={(e) => setOtherInfo(e.target.value)}
						></textarea>
					</div>
					<div className='flex mt-[20px] gap-x-[30px] flex-wrap gap-y-2'>
						<div className=''>
							<input
								type='radio'
								id='hardcopy'
								name='option'
								value='hardcopy'
								// onChange={handleChange}
								onChange={(e) => setType(e.target.value)}
								checked={type === 'hardcopy'}
								required
							/>
							<label htmlFor='hardcopy' className='ml-[13px]'>
								Get as hardcopy
							</label>
						</div>
						<div className=''>
							<input
								type='radio'
								id='softcopy'
								name='option'
								value='softcopy'
								onChange={(e) => setType(e.target.value)}
								checked={type === 'softcopy'}
								required
							/>
							<label htmlFor='softcopy' className='ml-[13px]'>
								Get as softcopy (PDF)
							</label>
						</div>
					</div>
					{/* <div className='flex gap-x-10'>
						<div className='flex gap-x-4'>
							<input type='radio' /> <label htmlFor=''></label>
						</div>
					</div> */}
					<div className='flex flex-col md:flex-row items-center gap-y-[20px] gap-x-[20px] justify-end mt-[40px] '>
						{/* <button
							onClick={() => {
								setOpen(true);
							}}
							href='/'
							className='flex gap-x-[7px] items-center border border-black px-[20px] py-[10px] rounded-full w-max '
						>
							<span>Buy Ticket</span>
							<img
								src='/images/icons/arrowright.png'
								alt='arrow'
							/>
						</button> */}
						<button
							type='submit'
							className='flex gap-x-[7px] items-center border border-black px-[20px] py-[10px] rounded-full w-max'
						>
							{btnClicked ? 'Loading...' : 'Make Payment'}
							<img
								src='/images/icons/arrowright.png'
								alt='arrow'
							/>
						</button>
					</div>
					<p className='clear-right'></p>
				</form>
			</div>
			<section>
				<Article />
			</section>
		</>
	);
};

export default SingleStore;
