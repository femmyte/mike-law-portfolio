import { createItem } from '../commonService';
import { useStateContext } from '../../../context/AuthContext';
import { getToken, removeUserSession } from '../../common';
export const useSubmit = () => {
	// const { token } = useStateContext();

	// let accessToken;
	const submitItem = async ({ url, itemData }) => {
		let result = { data: '', message: '', isError: false };

		try {
			const { data } = await createItem(url, itemData, getToken());
			// console.log(data);
			result.data = data;
			// result.message = data.message;
		} catch (error) {
			console.log(error?.response.data.message);
			result.isError = true;
			result.message = error.response.data.message;
			if (error?.response?.data?.message === 'Invalid token') {
				removeUserSession();
				alert('session expired knidly login again.');
			}
		}

		return result;
	};

	return { submitItem };
};
