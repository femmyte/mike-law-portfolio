import logo from './logo.svg';
import './App.css';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Events from './pages/events';
import Orders from './pages/orders';
import Portfolio from './pages/portfolio';
import Store from './pages/store';

import DashboardLayout from './components/admin/common/DashboardLayout';
import Feedback from './pages/contact/feedback';
import Message from './pages/contact/message';
import EditPortfolio from './pages/portfolio/edit-portfolio/[id]';
import SingleStore from './pages/store/product';
import OrderProduct from './pages/orders/product';
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<PublicRoute />}>
						<Route exact path='/' element={<Login />}></Route>
					</Route>
				</Routes>
				<DashboardLayout>
					<Routes>
						<Route path='/dashboard' element={<PrivateRoute />}>
							<Route
								path='/dashboard'
								element={<Dashboard />}
							></Route>
						</Route>
						<Route path='/about' element={<PrivateRoute />}>
							<Route path='/about' element={<About />}></Route>
						</Route>
						<Route path='/blog' element={<PrivateRoute />}>
							<Route path='/blog' element={<Blog />}></Route>
						</Route>
						<Route path='/contact' element={<PrivateRoute />}>
							<Route
								path='/contact'
								element={<Contact />}
							></Route>
						</Route>
						<Route
							path='/contact/message/:id'
							element={<PrivateRoute />}
						>
							<Route
								path='/contact/message/:id'
								element={<Message />}
							></Route>
						</Route>
						<Route
							path='/contact/feedback/:id'
							element={<PrivateRoute />}
						>
							<Route
								path='/contact/feedback/:id'
								element={<Feedback />}
							></Route>
						</Route>
						<Route path='/events' element={<PrivateRoute />}>
							<Route path='/events' element={<Events />}></Route>
						</Route>
						<Route
							path='/events/edit-event/:id'
							element={<PrivateRoute />}
						>
							<Route
								path='/events/edit-event/:id'
								element={<Message />}
							></Route>
						</Route>
						<Route path='/orders' element={<PrivateRoute />}>
							<Route path='/orders' element={<Orders />}></Route>
						</Route>
						<Route
							path='/orders/product/:id'
							element={<PrivateRoute />}
						>
							<Route
								path='/orders/product/:id'
								element={<OrderProduct />}
							></Route>
						</Route>
						<Route path='/portfolio' element={<PrivateRoute />}>
							<Route
								path='/portfolio'
								element={<Portfolio />}
							></Route>
						</Route>
						<Route
							path='/portfolio/edit-portfolio/:id'
							element={<PrivateRoute />}
						>
							<Route
								path='/portfolio/edit-portfolio/:id'
								element={<EditPortfolio />}
							></Route>
						</Route>
						<Route path='/store' element={<PrivateRoute />}>
							<Route path='/store' element={<Store />}></Route>
						</Route>
						<Route
							path='/store/product/:id'
							element={<PrivateRoute />}
						>
							<Route
								path='/store/product/:id'
								element={<SingleStore />}
							></Route>
						</Route>
					</Routes>
				</DashboardLayout>
			</Router>
		</>
	);
}

export default App;
