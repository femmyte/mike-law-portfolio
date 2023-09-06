import { useContext, createContext } from 'react';
import { useState, useEffect } from 'react';
import { setUserSession, removeUserSession, getToken } from '../utils/common';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	// const [user, setUser] = useState('');
	const [token, setToken] = useState(null);
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState();
	const [screenSize, setScreenSize] = useState(undefined);
	const [darkToggle, setDarkToggle] = useState(false);
	let login = false;
	const url = window.location.href;

	if (
		url === 'https://admin.adcaward.com/#/login' ||
		url === 'http://localhost:3000/#/login'
	)
		login = true;
	if (
		url === 'https://admin.adcaward.com' ||
		url === 'https://admin.adcaward.com/' ||
		url === 'http://localhost:3000'
	)
		window.location.replace('https://admin.adcaward.com/#/login');
	// if (url == 'http://localhost:3000/voting-app#/login') setLogin(true)
	const handleClick = (clicked) => {
		setIsClicked({ ...isClicked, [clicked]: true });
	};

	// if (user) {
	//   return setUserSession(user);
	// }
	useEffect(() => {
		if (token) {
			setUserSession(token);
			login = false;
		}
		// setUserSession(user.accessToken, user.admin)
	}, [token]);

	const logout = () => {
		removeUserSession();
	};

	// const googleSignin = () => {
	//   const provider = new GoogleAuthProvider();
	//   signInWithPopup(auth, provider);
	// };
	// const logout = () => {
	//   signOut(auth);
	// };

	// useEffect(() => {
	//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
	//     setUser(currentUser);
	//     setUserSession(currentUser.accessToken, currentUser);
	//     console.log("user", currentUser);
	//   });
	//   //   useEffect cleanup function
	//   return () => {
	//     unsubscribe();
	//   };
	// }, []);
	return (
		<AuthContext.Provider
			value={{
				// googleSignin,
				login,
				logout,
				// setUser,
				// user,
				setToken,
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
