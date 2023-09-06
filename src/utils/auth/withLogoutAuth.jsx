import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import FullLoader from '../../components/loaders/FullLoaders';

// To protect users from visiting the signin and signup routes after log in
withLogoutAuth;
export default function withLogoutAuth(Component) {
	function WithLogoutAuth(props) {
		const router = useRouter();
		const { data: session } = useSession({
			required: true,
			onUnauthenticated() {
				redirect('/signin?callbackUrl=/admin/dashoard');
			},
		});

		useEffect(() => {
			if (session) router.push('/');
		}, [session, router]);

		return <>{session ? <FullLoader /> : <Component {...props} />}</>;
	}

	return WithLogoutAuth;
}
