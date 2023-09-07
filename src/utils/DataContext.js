import { useState, useContext, createContext } from 'react';

const DataContext = createContext();

const ContextProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem('products')) ?? [];
		} catch (error) {
			console.log('This cart can not be parsed as JSON' + error);
			return [];
		}
	});
	return (
		<DataContext.Provider value={{ cart, setCart }}>
			{children}
		</DataContext.Provider>
	);
};
export default ContextProvider;

export const useDataContext = () => {
	return useContext(DataContext);
};
