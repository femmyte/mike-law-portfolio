import { createItem } from '../commonService';

export const useSubmit = () => {
	const submitItem = async ({ url, itemData }) => {
		let result = { data: '', message: '', isError: false };

		try {
			const { data } = await createItem(url, itemData);
			// console.log(data);
			result.data = data;
			// result.message = data.message;
		} catch (error) {
			console.log(error?.response.data.message);
			result.isError = true;
			result.message = error.response.data.message;
			if (error?.response?.data?.error) {
			}
		}

		return result;
	};

	return { submitItem };
};
