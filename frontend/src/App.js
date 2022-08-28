import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import DashboardScreen from './screens/DashboardScreen';
import GuideScreen from './screens/GuideScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderListScreen from './screens/OrderListScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/signinScreen';

function App() {
	const cart = useSelector(state => state.cart);
	const {cartItems} = cart;
	const userSignin = useSelector((state) => state.userSignin);
  	const { userInfo } = userSignin;
	const dispatch = useDispatch();

	const signoutHandler = () =>{
		dispatch(signout());
	}

  	return (
    <BrowserRouter>
    <div>
    <nav>
		<div className="social-call">
			<div className="social">
				<a href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
				<a href="https://wa.me/"><i className="fab fa-whatsapp"></i></a>
				<a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
			</div>
			<div className="phone">
				<span>Call #</span>
			</div>	
		</div>

		<div className="navigation">
			<a href="/" className="logo">
				<img src="images/logo.png" alt="Logo"/>
			</a>
			<div className="toggle"></div>
			<ul className="menu">
				<li>
          			<a href="/#new-jump">New Arrivals</a>
					<span className="sale-lable">Sale</span>
				</li>
				<li><Link to="/guide">Guides</Link></li>
				<li><a href="/#review-jump">Reviews</a></li>
			</ul>
			<div className="right-menu">
				{
					<div className="dropdown2">
						<Link to="#"><i className="fa fa-bars mennu"></i><span style={{fontSize: "14px"}}></span></Link>
						<ul className="dropdown-content">
							<li>
								<a href="/#new-jump"><span style={{fontSize: "14px"}}>New Arrivals</span></a>
							</li>
							<li>
								<Link to="/guide"><span style={{fontSize: "14px"}}>Guides</span></Link>
							</li>
							<li>
								<a href="/#review-jump"><span style={{fontSize: "14px"}}>Reviews</span></a>
							</li>
						</ul>
						</div>
				}
				{
					
					userInfo ? (
						<div className="dropdown">
						<Link to="#" className="user"><i className="fas fa-user"></i><span style={{fontSize: "14px"}}> {userInfo.name} <i className="fa fa-caret-down"></i></span></Link>
						<ul className="dropdown-content">
							<li>
								<Link to="/profile"><span style={{fontSize: "14px"}}>Profile</span></Link>
							</li>
							<li>
								<Link to="/orderhistory"><span style={{fontSize: "14px"}}>Order History</span></Link>
							</li>
							<li>
								<Link to="#signout" onClick={signoutHandler}><span style={{fontSize: "14px"}}> Sign Out</span></Link>
							</li>
						</ul>
						</div>
					) : (
						<Link to="/signin" className="user"><i className="fas fa-user"></i><span style={{fontSize: "14px"}}> Sign In</span></Link>
					)
				}
				{
					userInfo && userInfo.isAdmin && (
						<div className="dropdown">
							<Link to="#admin"><span style={{fontSize: "14px"}}> Admin</span> {' '} <i className="fa fa-caret-down"></i></Link>
							<ul className="dropdown-content">
								<li>
									<Link to="/dashboard"><span style={{fontSize: "14px"}}> Dashboard</span></Link>
								</li>
								<li>
									<Link to="/productlist"><span style={{fontSize: "14px"}}> Products</span></Link>
								</li>
								<li>
									<Link to="/orderlist"><span style={{fontSize: "14px"}}> Orders</span></Link>
								</li>
							</ul>
						</div>
					)
				}
				<Link to="/cart">
					<i className="fas fa-shopping-cart">
						<span className="num-cart-product">{cartItems.length}</span>
					</i>
				</Link>
			</div>
		</div>
	</nav>

	<Route path="/cart/:id?" component={CartScreen}/>
	<Route path="/product/:id" component={ProductScreen}/>
	<Route path="/product/:id/edit" component={ProductEditScreen} exact/>
	<Route path="/guide" component={GuideScreen}/>
	<Route path="/signin" component={SigninScreen}/>
	<Route path="/register" component={RegisterScreen}/>
	<Route path="/shipping" component={ShippingAddressScreen}/>
	<Route path="/payment" component={PaymentMethodScreen}/>
	<Route path="/placeorder" component={PlaceOrderScreen}/>
	<Route path="/order/:id" component={OrderScreen}/>
	<Route path="/orderhistory" component={OrderHistoryScreen}/>
	<PrivateRoute path="/profile" component={ProfileScreen}/>
	<AdminRoute path="/dashboard" component={DashboardScreen}/>
	<AdminRoute path="/productlist" component={ProductListScreen} exact/>
    <AdminRoute path="/productlist/pageNumber/:pageNumber" component={ProductListScreen}exact/>
	<AdminRoute path="/orderlist" component={OrderListScreen} exact/>
  	<Route path="/" component={HomeScreen} exact/>

	<section className="services">
		<div className="services-box">
			<i className="fas fa-shipping-fast"></i>
			<span>Fast Shipping</span>
			<p>Faster in the UK</p>
		</div>
		<div className="services-box">
			<i className="fas fa-headphones-alt"></i>
			<span>Support 24/7</span>
			<p>We support 24 hours a day</p>
		</div>
		<div className="services-box">
			<i className="fas fa-sync"></i>
			<span>100% Money Back</span>
			<p>Free Return within 3 days</p>
		</div>
	</section>

	<footer>
		<span className="copyright">&copy; Copyright 2021 - NewInnovationsSkins</span>
		<div className="subscribe">
			<form>
				<input type="email" placeholder="example@gmail.com" required="True"/>
				<input type="submit" value="Subsribe"/>
			</form>
		</div>
	</footer>
	</div>
  </BrowserRouter>
  );
}

export default App;