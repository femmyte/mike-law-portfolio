import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import httpService from '../utils/services/httpService';
export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		// GoogleProvider({
		// 	clientId: process.env.GOOGLE_CLIENT_ID,
		// 	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		// }),
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: 'Credentials',

			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'jsmith',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				// Add logic here to look up the user from the credentials supplied
				const { username, password } = credentials;
				const res = await fetch(
					process.env.NEXT_PUBLIC_SERVER_URL + '/api/admin/login',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							email,
							password,
						}),
					}
				);
				console.log(res);
				const user = res.json();

				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],

	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/admin',
	},
};
