'use client';
// import dayjs from 'dayjs';
import { useContext, createContext } from 'react';
import { useState, useEffect, useReducer, useMemo } from 'react';
import { getSession, useSession } from 'next-auth/react';

const AuthContext = createContext();

// let parsedEvents;
// const initEvents = () => {
// 	const storageEvents = localStorage.getItem('savedEvents');
// 	const parsedEvents =
// 		storageEvents.length > 1 ? JSON.parse(storageEvents) : [];

// 	return parsedEvents;
// };
// console.log(initEvents());
export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState('');
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState();
	const [screenSize, setScreenSize] = useState(undefined);
	const [darkToggle, setDarkToggle] = useState(false);
	let login = false;

	// const session = useSession();
	// let authenticated = session.status === 'authenticated';
	// let user = null;
	// if (authenticated) {
	// 	user = session.data?.user;
	// }

	const handleClick = (clicked) => {
		setIsClicked({ ...isClicked, [clicked]: true });
	};

	return (
		<AuthContext.Provider
			value={{
				login,
				// setUser,
				user,
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
				darkToggle,
				setDarkToggle,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useStateContext = () => {
	return useContext(AuthContext);
};
