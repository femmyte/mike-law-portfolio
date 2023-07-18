'use client';
import React from 'react';
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';
import ReactQuery from '@/utils/query/ReactQuery';
import ToastProvider from '@/utils/ToastProvider';
const layout = ({ children }) => {
	return (
		<div>
			<ToastProvider>
				<Nav />
				<ReactQuery>{children}</ReactQuery>
				<Footer />
			</ToastProvider>
		</div>
	);
};

export default layout;
