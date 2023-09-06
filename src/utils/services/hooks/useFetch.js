import { useQuery } from '@tanstack/react-query';
import httpService from '../httpService';
import { useStateContext } from '../../../context/AuthContext';
import { getToken, removeUserSession } from '../../common';
export function useFetch(
	url,
	key,
	query = {},
	options = { refetchOnWindowFocus: true }
) {
	const fetchData = async () => {
		try {
			const { data } = await httpService.get(url, {
				params: { ...query },
				headers: {
					'Content-Type': 'application/json',
					Authorization: getToken(),
				},
			});

			return data;
		} catch (error) {
			if (error?.response?.data?.message === 'Invalid token') {
				alert('Session Expired kindly login again.');
				removeUserSession();
			}
		}
	};
	return useQuery([key, query], () => fetchData(), {
		...options,
	});
}
