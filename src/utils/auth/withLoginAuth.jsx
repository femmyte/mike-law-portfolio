import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import FullLoader from '../../components/loaders/FullLoader';
import { redirect } from 'next/navigation';

// To protect generic routes/pages

export default function withLoginAuth(Component) {
	function WithLoginAuth(props) {
		const router = useRouter();
		const { data: session } = useSession({
			required: true,
			onUnauthenticated() {
				redirect('/signin?callbackUrl=/admin/dashoard');
			},
		});

		useEffect(() => {
			if (!session) router.push('/admin');
		}, [session, router, data]);

		return <>{session ? <Component {...props} /> : <FullLoader />}</>;
	}

	return WithLoginAuth;
}
