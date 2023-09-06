import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { withLogoutAuth } from '../../utils/auth/withLogoutAuth';
import image from '../../images/icons/arrowright.png';
import ozekhome from '../../images/ozekhome.jpg';
import httpService from '../../utils/services/httpService';
import { useStateContext } from '../../context/AuthContext';
const Index = () => {
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [clicked, setClicked] = useState(false);
	const navigate = useNavigate();
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	const { setToken } = useStateContext();
	const [btnText, setbtnText] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setClicked(true);

		if (!email || !password) return;

		let fetchLogin = async () => {
			let myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');
			// myHeaders.append("Authorization", `Bearer ${auth.token}`);
			try {
				const { data } = await httpService.post('/admin/login', {
					username: email,
					password,
				});
				console.log(data);
				setToken(data.token);
				if (data.token) {
					navigate('/dashboard');
				}
			} catch (error) {
				// console.log(err);
				if (error?.response?.data?.message) {
					console.log(error?.response?.data?.message);
					throw new Error(error?.response?.data?.message);
				}

				throw new Error('Connection Problem');
			} finally {
				setEmail('');
				setPassword('');
				// Array.from(document.querySelectorAll('input')).forEach(
				// 	(input) => (input.value = '')
				// );
			}

			// let response = await fetch(`${url}/admin/login`, {
			// 	method: 'post',
			// 	headers: myHeaders,
			// 	body: JSON.stringify({
			// 		email: state.email,
			// 		password: state.password,
			// 	}),
			// });
			// let data = await response.json();
			// setUser(data);
			// // setUserSession(data);
			// navigate('/dashboard');
			// setEmail('')
			// setPassword('')
			// Array.from(document.querySelectorAll('input')).forEach(
			// 	(input) => (input.value = '')
			// );
		};
		fetchLogin();
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
								type='text'
								className='font-[400] text-[16px] leading-[24px] border-none bg-transparent w-full p-3 focus:outline-none'
								placeholder='Username'
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
								className='my-[30px] md:my-0 py-[10px] text-[16px] px-[20px] rounded-full border border-black hover:bg-black hover:text-white font font-extrabold flex items-center gap-x-[7px]  w-max'
							>
								{/* <span className='hover:text-white'>
									{' '} */}
								{clicked ? 'Loading...' : 'Login'}
								{/* </span> */}
								<img
									src={image}
									className=' '
									alt='arrow logo'
								/>
							</button>
						</div>
					</form>

					{/* <button onClick={() => signIn()}>Sign in</button> */}
				</div>
			</div>
			<aside className='md:w-[50%] h-[70vh] md:h-screen overflow-hidden flex justify-center items-center '>
				<img src={ozekhome} className='h-full w-full' alt='logo' />
			</aside>
		</div>
	);
};
// export default withLogoutAuth(Index);
export default Index;
