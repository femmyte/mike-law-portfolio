import { useState, useEffect } from 'react';
const useFetchAll = (urls) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		let promises = urls.map((url) =>
			fetch(`${process.env.REACT_APP_API_URL}/v1/${url}`).then(
				(response) => {
					if (response.ok) {
						return response.json();
					}
					throw response;
				}
			)
		);

		Promise.all(promises)
			.then((result) => setData(result))
			.catch((e) => setIsError(e))
			.finally(() => setIsLoading(false));
	}, []);

	return { data, isError, isLoading };
};

export default useFetchAll;
