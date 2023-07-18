'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { data } from './data';
import * as XLSX from 'xlsx';
import {
	BsCaretLeft,
	BsCaretRight,
	BsFillCloudDownloadFill,
} from 'react-icons/bs';
// import Image from 'next/image';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';
import { GiCloudDownload } from 'react-icons/gi';
import { AiOutlineDownload } from 'react-icons/ai';
import FullLoader from '@/components/loaders/FullLoaders';
import FullError from '@/components/errors/FullError';
import { useFetch } from '@/utils/services/hooks/useFetch';
import Link from 'next/link';

const SearchComponent = ({ onFilter, filterText }) => (
	<div
		className='dark:text-gray-200 md:w-[386px] dark:bg-main-dark-bg dark:hover:text-white flex  py-2 md:py-3 items-center border border-[#Eaecf0] bg-[#EFEFEF] rounded-r px-[16px] w-full '
		style={{
			boxShadow:
				'0px 3.71382px 7.42763px -1.85691px rgba(16, 24, 40, 0.1), 0px 1.85691px 3.71382px -1.85691px rgba(16, 24, 40, 0.06)',
		}}
	>
		<input
			type='text'
			className=' focus:outline-none focus:ring-0 border-none outline-none w-[90%] text-[14px] bg-transparent text-[#A0ABBB]'
			placeholder='Search for something'
			onChange={onFilter}
			name={filterText}
			value={filterText}
		/>
		<FiSearch className='text-[#191D23]' />
	</div>
);
const ProductTable = () => {
	// const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(0);
	const [itemsPerPage] = useState(10);
	const [visiblePages, setVisiblePages] = useState([]);
	const [products, setProducts] = useState([]);
	// useEffect(() => {
	// 	updateVisiblePages();
	// }, [currentPage, data]);
	useEffect(() => {
		updateVisiblePages();
	}, [currentPage]);
	const { data, isInitialLoading, isSuccess, isError } = useFetch(
		'/store/',
		'get-products'
	);
	useEffect(() => {
		if (isSuccess) {
			setProducts(data);
		}
	}, [isSuccess, data]);
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		setCurrentPage(1); // Reset to the first page when searching
	};

	const handlePagination = (page) => {
		setCurrentPage(page);
	};

	// Logic to export the table data
	const handleExport = () => {
		const filteredData = products?.filter((item) => {
			console.log(item);
			return item.name.toLowerCase().includes(searchTerm.toLowerCase());
		});

		// Convert data to worksheet
		const worksheet = XLSX.utils.json_to_sheet(filteredData);

		// Create workbook and add the worksheet
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, 'Table Data');

		// Generate Excel file
		XLSX.writeFile(workbook, 'table_data.xlsx');
	};

	// Logic for pagination

	const updateVisiblePages = () => {
		const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
		let pagesToShow = [];
		if (totalPages <= 6) {
			pagesToShow = Array.from(
				{ length: totalPages },
				(_, index) => index + 1
			);
		} else {
			if (totalPages == 0) {
				pagesToShow = [1];
			} else if (currentPage <= 4 && currentPage >= 1) {
				pagesToShow = [1, 2, 3, 4, 5, '...', totalPages];
			} else if (currentPage > totalPages - 4) {
				pagesToShow = [
					1,
					'...',
					totalPages - 4,
					totalPages - 3,
					totalPages - 2,
					totalPages - 1,
					totalPages,
				];
			} else {
				pagesToShow = [
					1,
					'...',
					currentPage - 1,
					currentPage,
					currentPage + 1,
					'...',
					totalPages,
				];
			}
			// }
		}
		setVisiblePages(pagesToShow);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const filteredData = products?.filter((item) =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);
	const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

	if (isInitialLoading) {
		return <FullLoader />;
	}
	if (isError) {
		return <FullError />;
	}
	return (
		<div className='container mx-auto p-4 bg-white text-black shadow rounded-[7.4px]'>
			<div className='flex flex-col md:flex-row gap-y-[15px] items-center md:justify-between'>
				<div className='flex justify-between items-center pl-[22px] pr-[15px] h-[62px] rounded-t '>
					<p className='text-[#101828] font-[500] text-[16px]'>
						Products
						<span className='text-[11px] text-[#6941c6] ml-[15px]'>
							{products && products.length <= 0
								? 0
								: products?.length}{' '}
							Product(s)
						</span>
					</p>
				</div>
				<div className='flex  items-center my-4 h-[44px] '>
					<button
						onClick={handleExport}
						className='bg-black h-full hover:bg-blue-700 w-max text-white font-semibold py-2 px-2 md:px-4 text-[12px]  rounded-l mr-[-2px] md:flex gap-x-[13px]'
					>
						<AiOutlineDownload className='text-[12px] hidden md:block' />
						<span>Export Table</span>
					</button>
					<SearchComponent
						onFilter={handleSearch}
						filterText={searchTerm}
					/>
				</div>
			</div>
			<div className='overflow-x-auto'>
				<table className='min-w-full'>
					<thead>
						<tr className='text-[#667085] border'>
							<th className='text-[#667085] p-2 text-left'>
								Product Image
							</th>
							<th className='text-[#667085] p-2 text-left'>
								Product Name
							</th>
							<th className='text-[#667085] p-2 text-left'>
								Price
							</th>
							<th className='text-[#667085] p-2'>Action</th>
							{/* <th className='text-[#667085] p-2'>Course</th>
							<th className='text-[#667085] p-2'>
								Email Address
							</th>
							<th className='text-[#667085] p-2'>Date Created</th>
							<th className='text-[#667085] p-2'>
								Course Duration
							</th> */}
						</tr>
					</thead>
					<tbody>
						{filteredData?.map((item) => (
							<tr key={item.id} className='border'>
								{/* <td className='flex items-center gap-x-[11px] p-2'> */}
								<img
									// src={item.image}
									src='/images/logo2.png'
									alt={item.name}
									className=' rounded-full p-2 h-[50px] w-[50px] '
								/>
								{/* <span className='text-[#101828] '>
									{item.productName}
								</span> */}
								{/* </td> */}
								<td className=' p-2 text-[#667085]'>
									{item.name}
								</td>
								<td className=' p-2 text-[#667085]'>
									{item.price}
								</td>
								<td className=' p-2 text-[#667085]'>
									<Link
										href={`/admin/store/${item._id}`}
										className='p-[10px] rounded-lg bg-[#C1C1C1]  text-white  flex items-center gap-x-[10px]  w-max mr-[20px]'
									>
										<span>View</span>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className='flex justify-between w-full mt-4 overflow-x-auto'>
				<ul className='flex justify-between w-full pl-0 list-none rounded my-2'>
					<li>
						<button
							onClick={() => handlePagination(currentPage - 1)}
							disabled={currentPage === 1}
							className='font-semibold py-2 px-4 border border-[#d0d5dd] shadow rounded-[7px] mx-1 flex items-center gap-x-[11px]'
						>
							<span className='text-[#344054]'>Previous</span>{' '}
							<FiArrowLeft className='text-[#344054]' />
						</button>
					</li>
					<li className='flex justify-center'>
						{visiblePages.map((page, index) => (
							<li key={index}>
								{page === '...' ? (
									<span className='font-semibold py-2 px-4 mx-1 text-[#667085]'>
										...
									</span>
								) : (
									<button
										onClick={() => handlePagination(page)}
										className={`${
											currentPage === page
												? 'bg-[#f9f5ff] text-[#7f65d9] border border-gray-[#f9f5ff] '
												: 'text-[#667085]'
										} font-semibold py-2 px-4 mx-1`}
									>
										{page}
									</button>
								)}
							</li>
						))}
					</li>
					<li>
						<button
							onClick={() => handlePagination(currentPage + 1)}
							disabled={currentPage === totalPages}
							className='font-semibold py-2 px-4 border border-[#d0d5dd] shadow rounded-[7px] mx-1 flex items-center gap-x-[11px]'
						>
							<span className='text-[#344054]'>Next</span>{' '}
							<HiArrowRight className='text-[#344054]' />
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProductTable;
