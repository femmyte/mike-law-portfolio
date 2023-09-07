import React from 'react';
import DashboardLayout from '../../../components/admin/common/DashboardLayout';
import { SessionProvider } from 'next-auth/react';
import { AuthContextProvider } from '../AuthContext';
import ReactQuery from '../../../utils/query/ReactQuery';
import ToastProvider from '../../../utils/ToastProvider';
const layout = ({ children }) => {
	// console.log(session);
	return (
		<SessionProvider>
			<ToastProvider>
				{/* <SessionProvider> */}
				{/* <AuthContextProvider> */}
				<DashboardLayout>
					<ReactQuery>{children}</ReactQuery>
				</DashboardLayout>
				{/* </AuthContextProvider> */}
				{/* </SessionProvider> */}
			</ToastProvider>
		</SessionProvider>
	);
};

export default layout;
