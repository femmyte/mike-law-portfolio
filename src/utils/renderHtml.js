import React from 'react';
import DOMPurify from 'dompurify';

const renderHtml = (htmlString) => {
	// Use DOMPurify to sanitize and clean the HTML string
	const sanitizedHtml = DOMPurify.sanitize(htmlString);

	// Return the sanitized HTML inside a React component
	return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default renderHtml;
