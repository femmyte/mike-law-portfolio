// DataContext.js
'use client';
import React, { createContext, useEffect, useState } from 'react';
// import { fetchData } from './api';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [data, setData] = useState(null);

	// useEffect(() => {
	// 	const fetchDataFromApi = async () => {
	// 		const newData = await fetchData();
	// 		setData(newData);
	// 	};

	// 	fetchDataFromApi();
	// }, []);

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
