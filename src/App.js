import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Training from './components/training/Training'
import Pricing from './components/pricing/Pricing'
import Contact from './components/contact/Contact'

class App extends Component {

	render() {
		return (
			<Router>
				<Navbar/>
				<Routes>
					<Route path="/" exact element={<Home/>}/>
					<Route path="/training" element={<Training/>}/>
					<Route path="/pricing" element={<Pricing/>}/>
					<Route path="/contact" element={<Contact/>}/>
				</Routes>
				<Footer/>
			</Router>
		);
	}
}

export default App;
