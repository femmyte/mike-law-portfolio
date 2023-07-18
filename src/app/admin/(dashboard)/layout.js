'use client';
import React from 'react';
import DashboardLayout from '../../../components/admin/common/DashboardLayout';
import { SessionProvider } from 'next-auth/react';
import { AuthContextProvider } from '../AuthContext';
import ReactQuery from '../../../utils/query/ReactQuery';
import ToastProvider from '../../../utils/ToastProvider';
const layout = ({ children }) => {
	return (
		<SessionProvider>
			<ToastProvider>
				<AuthContextProvider>
					<DashboardLayout>
						<ReactQuery>{children}</ReactQuery>
					</DashboardLayout>
				</AuthContextProvider>
			</ToastProvider>
		</SessionProvider>
	);
};

export default layout;
