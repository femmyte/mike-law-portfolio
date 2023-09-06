export const dateConversion = (dateStr) => {
	// const dateStr = '2023-07-14T19:40:47.204Z';
	const date = new Date(dateStr);
	const currentDate = new Date();

	let formattedDateTime = date.toLocaleString([], {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});

	if (date.toDateString() === currentDate.toDateString()) {
		formattedDateTime = 'Today ' + formattedDateTime.split(' ')[1]; // Extract time part
	}

	return formattedDateTime;
};
