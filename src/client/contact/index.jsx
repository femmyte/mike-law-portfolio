import React, { useState } from 'react';
import Header from '../../components/common/Header';
import { Link } from 'react-router-dom';
import { useSubmit } from '../../utils/services/hooks/useSubmit';
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';

const Contact = () => {
	const { submitItem } = useSubmit();
	const [btnClicked, setBtnClicked] = useState(false);
	const [description, setDescription] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		setBtnClicked(true);
		const url = '/contact';
		const itemData = {
			senderName: name,
			message: description,
			emailAddress: email,
			subject: subject,
			details: 'I dont know',
		};
		const result = await submitItem({ url, itemData });

		if (result.isError === false) {
			// toast('Area Details created successfully');
			alert('Your message has been sent successfully');
			setDescription('');
			setName('');
			setEmail('');
			setSubject('');
			setBtnClicked(false);
		}
		setBtnClicked(false);
	}
	return (
		<div>
			<Nav />
			<Header
				title='He can help you with your legal needs'
				link='/portfolio'
				btnText='Explore His Portfolio'
			/>
			<div className='md:flex gap-x-[120px] px-[20px] md:px-[70px] py-[20px] md:py-[70px]  '>
				<img src={require('../../images/barcap.png')} alt='about' />
				<div className='mb-[20px]'>
					<p className='font-[400] text-[25px] md:text-[40px] leading-[33px] md:leading-[48px] mb-[37px] md:mb-[47px] mt-[20px] md:mt-0'>
						We will reach you as soon as you reach out to us.
					</p>
					<form onSubmit={handleSubmit}>
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
								placeholder='Subject'
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								required
							/>
						</div>
						<div className=' border-b border-[#B7B7B7] mt-[20px] md:mt-[40px]'>
							<textarea
								type='text'
								id=''
								cols='60'
								className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none h-[150px]'
								placeholder='Your message here'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								required
							></textarea>
						</div>
						<button
							type='submit'
							className='flex gap-x-[7px] items-center border border-black px-[20px] py-[10px] rounded-full mt-[40px] w-max float-right'
						>
							<span>
								{btnClicked ? 'Loading...' : 'Send Message'}
							</span>
							<img
								src={require('../../images/icons/arrowright.png')}
								alt='arrow'
							/>
						</button>
					</form>
					<p className='clear-right'></p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
