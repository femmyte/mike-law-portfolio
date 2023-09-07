import React from 'react';
import Form from '../../../../components/admin/portfolios/Form';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../../../../components/admin/common/DashboardLayout';
const EditPortfolio = () => {
	const params = useParams();

	return (
		<DashboardLayout>
			{' '}
			<Form id={params.id} />
		</DashboardLayout>
	);
};

export default EditPortfolio;
