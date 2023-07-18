// 'use client';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import DataProvider from '../useContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';
export const metadata = {
	title: 'Chief Mike Agbedor Abu Ozekhome',
	description:
		'Constitutional Lawyer, Human Rights Activist, and Senior Advocate of Nigeria',
};

export default function RootLayout({ children, session }) {
	return (
		<html lang='en'>
			<head>
				{/* <script>
					UPLOADCARE_LOCALE_TRANSLATIONS = {    buttons: {
        choose: {
          files: {
            one: "Select Speaker's Image"
          }
        }
      }
    }</script> */}
				{/* <script>UPLOADCARE_PUBLIC_KEY = '3f38fe2d4402e02dcef4';</script> */}
			</head>
			<body className={`${inter.className} bg-white`}>
				<ToastContainer position='bottom-center' />
				{children}
			</body>
		</html>
	);
}
