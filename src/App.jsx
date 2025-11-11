import './App.scss';
import Cart from './components/cart/Cart';
import Header from "./components/header/Header";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/itemsSlice';
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const promise = dispatch(fetchProducts('https://api.artic.edu/api/v1/artworks?page=2&limit=100'));
		return () => {
			promise.abort();
		}
	}, [dispatch])

	return (
		<HashRouter>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/catalog" element={<Catalog/>}></Route>
				<Route path="/cart" element={<Cart/>}></Route>
			</Routes>
		</HashRouter>
	)
}

export default App
