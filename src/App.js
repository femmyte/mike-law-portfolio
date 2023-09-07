import './App.css';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './admin/login';
import Dashboard from './admin/dashboard';
import About from './admin/about';
import Blog from './admin/blog';
import Contact from './admin/contact';
import Events from './admin/events';
import Orders from './admin/orders';
import Portfolio from './admin/portfolio';
import Store from './admin/store';
import DashboardLayout from './components/admin/common/DashboardLayout';
import Feedback from './admin/contact/feedback';
import Message from './admin/contact/message';
import EditPortfolio from './admin/portfolio/edit-portfolio/[id]';
import SingleStore from './admin/store/product';
import OrderProduct from './admin/orders/product';
import * as Client from './client';
import EditEvent from './admin/events/edit-event';
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<Client.Home />}></Route>
					<Route path='/about' element={<Client.About />}></Route>
					<Route exact path='/blog' element={<Client.Blog />}></Route>
					<Route
						path='/blog/:id'
						element={<Client.SingleBlog />}
					></Route>
					<Route
						exact
						path='/contact'
						element={<Client.Contact />}
					></Route>
					<Route exact path='/cart' element={<Client.Cart />}></Route>
					<Route
						exact
						path='/events'
						element={<Client.Events />}
					></Route>
					<Route
						path='/event/:id'
						element={<Client.EventPage />}
					></Route>
					<Route
						exact
						path='/portfolio'
						element={<Client.Portfolio />}
					></Route>
					<Route
						exact
						path='/store'
						element={<Client.Store />}
					></Route>
					<Route
						path='/store/product/:id'
						element={<Client.SingleStore />}
					></Route>
				</Routes>
				<Routes>
					<Route exact path='/admin' element={<PublicRoute />}>
						<Route exact path='/admin' element={<Login />}></Route>
					</Route>
					{/* </Routes>
				<DashboardLayout>
					<Routes> */}
					<Route path='/admin/dashboard' element={<PrivateRoute />}>
						<Route
							path='/admin/dashboard'
							element={<Dashboard />}
						></Route>
					</Route>
					<Route path='/admin/about' element={<PrivateRoute />}>
						<Route path='/admin/about' element={<About />}></Route>
					</Route>
					<Route path='/admin/blog' element={<PrivateRoute />}>
						<Route path='/admin/blog' element={<Blog />}></Route>
					</Route>
					<Route path='/admin/contact' element={<PrivateRoute />}>
						<Route
							path='/admin/contact'
							element={<Contact />}
						></Route>
					</Route>
					<Route
						path='/admin/contact/message/:id'
						element={<PrivateRoute />}
					>
						<Route
							path='/admin/contact/message/:id'
							element={<Message />}
						></Route>
					</Route>
					<Route
						path='/admin/contact/feedback/:id'
						element={<PrivateRoute />}
					>
						<Route
							path='/admin/contact/feedback/:id'
							element={<Feedback />}
						></Route>
					</Route>
					<Route path='/admin/events' element={<PrivateRoute />}>
						<Route
							path='/admin/events'
							element={<Events />}
						></Route>
					</Route>
					<Route
						path='/admin/events/edit-event/:id'
						element={<PrivateRoute />}
					>
						<Route
							path='/admin/events/edit-event/:id'
							element={<EditEvent />}
						></Route>
					</Route>
					<Route path='/admin/orders' element={<PrivateRoute />}>
						<Route
							path='/admin/orders'
							element={<Orders />}
						></Route>
					</Route>
					<Route
						path='/admin/orders/product/:id'
						element={<PrivateRoute />}
					>
						<Route
							path='/admin/orders/product/:id'
							element={<OrderProduct />}
						></Route>
					</Route>
					<Route path='/admin/portfolio' element={<PrivateRoute />}>
						<Route
							path='/admin/portfolio'
							element={<Portfolio />}
						></Route>
					</Route>
					<Route
						path='/admin/portfolio/edit-portfolio/:id'
						element={<PrivateRoute />}
					>
						<Route
							path='/admin/portfolio/edit-portfolio/:id'
							element={<EditPortfolio />}
						></Route>
					</Route>
					<Route path='/admin/store' element={<PrivateRoute />}>
						<Route path='/admin/store' element={<Store />}></Route>
					</Route>
					<Route
						path='/admin/store/product/:id'
						element={<PrivateRoute />}
					>
						<Route
							path='/admin/store/product/:id'
							element={<SingleStore />}
						></Route>
					</Route>
				</Routes>
				{/* </DashboardLayout> */}
			</Router>
		</>
	);
}

export default App;
