import React from 'react';
import Form from '../../../../components/admin/portfolios/Form';
import { useParams } from 'react-router-dom';
const EditPortfolio = () => {
	const params = useParams();

	return <Form id={params.id} />;
};

export default EditPortfolio;
