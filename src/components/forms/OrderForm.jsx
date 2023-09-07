import React, { useState } from 'react';
import { useSubmit } from '../../utils/services/hooks/useSubmit';
import { toast } from 'react-toastify';
const OrderForm = ({ product }) => {
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
			toast('Order has been made successfully');
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

		// console.log(result.data);
		// console.log(result.message);
		// console.log(result.isError);
	}
	return (
		<form onSubmit={handleSubmit} className='w-full mt-[50px] mb-[20px]'>
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
			<div className='flex flex-col md:flex-row items-center gap-y-[20px] gap-x-[20px] justify-end mt-[40px] '>
				<button
					type='submit'
					className='flex gap-x-[7px] items-center border border-black px-[20px] py-[10px] rounded-full w-max'
				>
					{btnClicked ? 'Loading...' : 'Make Payment'}
					<img
						src={require('../../images/icons/arrowright.png')}
						alt='arrow'
					/>
				</button>
			</div>
			<p className='clear-right'></p>
		</form>
	);
};

export default OrderForm;
