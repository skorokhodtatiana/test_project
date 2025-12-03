import { useState, useEffect } from 'react';
import styles from './Nav.module.scss';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import sadFace from '../../assets/images/sad-face.svg';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import Search from '../search/Search';
import { useLocation } from "react-router-dom";

const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setIsMobile(!isMobile);
	}

	const classNameLinkMenu = `${ styles.items } ${isMobile ? styles.flex : ''}`;
	const data = useSelector(state => state.author.item);

	function ConditionalSearchBar() {
	const location = useLocation();

	if (location.pathname === '/') {
		return <Search></Search>
	}
	return null;
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
