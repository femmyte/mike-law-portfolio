'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Provider = ({ children }) => {
	return (
		<div>
			{/* <ToastContainer position='bottom-center' /> */}
			<SessionProvider>{children}</SessionProvider>
		</div>
	);
};

export default Provider;
