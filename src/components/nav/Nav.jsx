import { useState } from 'react';
import styles from './Nav.module.scss';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import sadFace from '../../assets/images/sad-face.svg';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import Search from '../search/Search';
import { useLocation } from "react-router-dom";

import { addChoseItem } from '../../store/choseAuthorSlice';

const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [valueAuthor, setValueAuthor] = useState('');

	const classNameLinkMenu = `${ styles.items } ${isMobile ? styles.flex : ''}`;

	const handleClick = () => {
		setIsMobile(!isMobile);
	}

	function ConditionalSearchBar() {
		const location = useLocation();

		if (location.pathname === '/') {
			return <Search handleChange={handleChange} valueAuthor={valueAuthor} clearInput={clearInput}></Search>
		}
		return null;
	}

	const dispatch = useDispatch();
	const data = useSelector(state => state.product.items)

	const handleChange = (e) => {
		setValueAuthor(e.target.value);
		const newData = data?.filter(el => {
			return el.author && el.author === e.target.value
		});

		if (newData.length) {
			dispatch(addChoseItem(newData));
		} else {
			setShowModal(true);
		}
	}

	const clearInput = () => {
		setValueAuthor('');
		dispatch(addChoseItem(''));
	}

	return (
		<div className={styles.nav} >
			<div className={ isMobile ? styles.open : styles.burger } onClick={ handleClick }>
				<span className={ styles.line }></span>
				<span className={ styles.line }></span>
				<span className={ styles.line }></span>
			</div>
			<nav className={ classNameLinkMenu }>
				<NavLink className={ styles.link } to="/">About us</NavLink>
				<NavLink className={ styles.link } to="/catalog">Catalog</NavLink>
				<NavLink className={ styles.link } to="/cart">Cart</NavLink>
				<ConditionalSearchBar></ConditionalSearchBar>
			</nav>
			{showModal &&
				<Modal showModal={showModal} handleClick={() => setShowModal(false)}>
					<h4 className={ styles.text }>Картины этого автора не найдены</h4>
					<img className={ styles.modalImg } src={sadFace} alt=""></img>
				</Modal>
			}
		</div>
	)
}

export default Nav;
