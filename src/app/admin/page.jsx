'use client';
import React, { useState, useEffect } from 'react';
// import award from '../img/kcca7.JPG';
// import { useStateContext } from '../context/AuthContext';
import { url } from '../../../url';
// import { withLogoutAuth } from '../../utils/auth/withLogoutAuth';
import { redirect, useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const Index = () => {
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);
	const router = useRouter();

	// const { setToken, setUser } = useStateContext();
	const [btnText, setbtnText] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// const result = await signIn('credentials', {
		// 	username: email,
		// 	password: password,
		// 	redirect: true,
		// 	callbackUrl: '/admin/dashboard',
		// });

		router.replace('/admin/dashboard');

		// router.push('/admin/overview');
		// if (!email || !password) return;
		// try {
		// 	const result = await signIn('credentials', {
		// 		email: email,
		// 		password: password,
		// 		redirect: false,
		// 	});

		// 	if (result.ok === true) {
		// 		router.replace('/admin/overview');
		// 	} else {
		// 		setError(result.error);
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// } finally {
		// 	// setIsLoading(false);
		// 	setEmail('');
		// 	setPassword('');
		// }
		setbtnText();
	};

	return (
		<div className='block md:flex h-screen overflow-x-hidden'>
			<div className='md:w-[50%] mx-auto flex justify-center items-center'>
				<div className='text-center md:p-[80px] p-[20px] md:pt-[80px] pt-[40px]'>
					{error && (
						<p className='bg-red-500 text-white p-2'>{error}</p>
					)}
					<h3 className='text-[32px] leading-[38px] text-left font-[400] mb-[56px]'>
						Kindly provide your login details to get begin
					</h3>

					<form onSubmit={handleSubmit} className='mt-[56px]'>
						<div className=' border-b border-black '>
							<input
								type='email'
								className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
								placeholder='Email'
								name='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className=' border-b border-black mt-[48px]'>
							<input
								type='password'
								className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
								placeholder='Username'
								name='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className='w-4/5 md:w-full md:mt-[40px] flex justify-end md:mx-0'>
							<button
								type='submit'
								className='my-[30px] md:my-0 py-[10px] text-[16px] px-[20px] rounded-full border border-black flex items-center gap-x-[7px]  w-max'
							>
								<span className=''>
									{' '}
									{btnText ? 'Loading...' : 'Login'}
								</span>
								<img
									src={`/images/icons/arrowright.png`}
									className=' '
									alt='arrow logo'
								/>
							</button>
						</div>
					</form>
				</div>
			</div>
			<aside className='md:w-[50%] h-[70vh] md:h-screen overflow-hidden flex justify-center items-center '>
				<img src='/images/hero.png' alt='logo' />
			</aside>
		</div>
	);
};
// export default withLogoutAuth(Index);
export default Index;
