import React from 'react';
import { items } from '../../../appData/eventData';
import FullLoader from '@/components/loaders/FullLoaders';
import FullError from '@/components/errors/FullError';
import Table from '../common/Table';
import PortfolioTable from './PortfolioTable';

const ManagePortfolio = () => {
	// const url = '/portfolios	';
	// const [tableData, setTableData] = useState([]);
	// const { data, isInitialLoading, isSuccess, isError } = useFetch(
	// 	url,
	// 	`get-${url}`
	// );
	// useEffect(() => {
	// 	if (isSuccess) {
	// 		setTableData(data.portfolios);
	// 	}
	// }, [isSuccess, data]);

	// const filteredData = tableData?.filter((item) =>
	// 	item.productName.toLowerCase().includes(searchTerm.toLowerCase())
	// );
	// if (isInitialLoading) {
	// 	return <FullLoader />;
	// }
	// if (isError) {
	// 	return <FullError />;
	// }
	return (
		<>
			{/* <Table filteredData={filteredData} tableData={tableData}>
				<table className='min-w-full'>
					<thead>
						<tr className='text-[#667085] border'>
							<th className='text-[#667085] p-2 text-left'>
								Portfolio Images
							</th>
							<th className='text-[#667085] p-2 text-left'>
								Titles
							</th>
							<th className='text-[#667085] p-2 text-left'>
								Urls
							</th>
						</tr>
					</thead>
					<tbody>
						{currentItems?.map((item) => (
							<tr key={item.id} className='border'>
								<td className='p-2'>
									<img
										src={`${
											item?.imageUrl
												? item?.imageUrl
												: '/images/logo2.png'
										}`}
										alt={item?.name}
										className=' rounded-full p-2 h-[50px] w-[50px] '
									/>
								</td>
								<td className=' p-2 text-[#667085]'>
									{item?.title}
								</td>
								<td className=' p-2 text-[#667085]'>
									{item?.url}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Table> */}
			<PortfolioTable />
		</>
	);
};

export default ManagePortfolio;
