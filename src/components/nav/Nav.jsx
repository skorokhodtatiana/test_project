import { useEffect, useState } from 'react';
import styles from './Nav.module.scss';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import sadFace from '../../assets/images/sad-face.svg';
import Modal from '../modal/Modal';
import Search from '../search/Search';
import { useLocation } from "react-router-dom";

import { addChoseItem } from '../../store/choseAuthorSlice';

const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [valueAuthor, setValueAuthor] = useState('');

	const classNameLinkMenu = `${ styles.items } ${isMobile ? styles.flex : ''}`;
	const location = useLocation();

	const handleClick = () => {
		setIsMobile(!isMobile);
	}

	const dispatch = useDispatch();
	const data = useSelector(state => state.product.items)

	const handleChange = (e) => {
		setValueAuthor(e.target.value);
		const newData = data?.filter(el => {
			return el.author.toLowerCase().includes(e.target.value.toLowerCase())
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

	const handleClickItemNav = () => {
		setIsMobile(!isMobile);
	}

	const handleClickModalClose = () => {
		setValueAuthor('');
		setShowModal(false);
	}

	useEffect(() => {
		setValueAuthor('');
		dispatch(addChoseItem(''));
	},[location, dispatch])

	return (
		<div className={styles.nav} >
			<div className={ isMobile ? styles.open : styles.burger } onClick={ handleClick }>
				<span className={ styles.line }></span>
				<span className={ styles.line }></span>
				<span className={ styles.line }></span>
			</div>
			<nav className={ classNameLinkMenu }>
				<NavLink onClick={handleClickItemNav} className={ styles.link } to="/">About us</NavLink>
				<NavLink onClick={handleClickItemNav} className={ styles.link } to="/catalog">Catalog</NavLink>
				<NavLink onClick={handleClickItemNav} className={ styles.link } to="/cart">Cart</NavLink>
				{location.pathname === '/' &&
					<Search handleChange={handleChange} data={data} valueAuthor={valueAuthor} clearInput={clearInput}></Search>
				}
			</nav>
			{showModal &&
				<Modal showModal={showModal} handleClick={handleClickModalClose}>
					<h4 className={ styles.text }>Картины этого автора не найдены</h4>
					<img className={ styles.modalImg } src={sadFace} alt=""></img>
				</Modal>
			}
		</div>
	)
}

export default Nav;
