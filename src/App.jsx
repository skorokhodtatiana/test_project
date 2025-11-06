import './App.css';
import Cart from './components/cart/Cart';
import Header from "./components/header/Header";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';

function App() {

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
