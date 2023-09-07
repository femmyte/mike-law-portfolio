import React from 'react';
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';
import ReactQuery from '@/utils/query/ReactQuery';
import ToastProvider from '@/utils/ToastProvider';
import ContextProvider from '@/utils/DataContext';
const layout = ({ children }) => {
	return (
		<div>
			<ToastProvider>
				<ContextProvider>
					<Nav />
					<ReactQuery>{children}</ReactQuery>
					<Footer />
				</ContextProvider>
			</ToastProvider>
		</div>
	);
};

export default layout;
