import http from './httpService';

const config = {
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
	},
};

// export async function createItem(url, data) {
// 	return http.post(url, data, config);
// }

export async function createItem(url, form, accessToken) {
	const { data } = await http.post(url, form, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: accessToken,
		},
	});
	return data;
}

export async function uploadProfilePicture(url, form, accessToken) {
	const { data } = await http.post(url, form, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
	});

	return data;
}
// export function activateAccount(url, data) {
// 	return http.post(url, data, config);
// }
