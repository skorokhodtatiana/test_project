import './App.css'
import Cart from './components/cart/Cart'
import Showcase from './components/showcase/Showcase'
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/itemsSlice';
import { useEffect } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch])

	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/catalog" element={<Showcase/>}></Route>
				<Route path="/cart" element={<Cart/>}></Route>
			</Routes>
		</HashRouter>
	)
}

export default App
