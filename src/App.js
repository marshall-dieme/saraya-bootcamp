import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

class App extends Component {

	render() {
		return (
			<Router>
				<Navbar/>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
				<Footer/>
			</Router>
		);
	}
}

export default App;
