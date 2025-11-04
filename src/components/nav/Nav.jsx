import { useState } from 'react';
import styles from './Nav.module.scss';
import { NavLink } from "react-router-dom";
//import search from '../../assets/images/search.svg';

const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [valueId, setValueId] = useState(null);

	const handleClick = () => {
		setIsMobile(!isMobile);
	}

	const sentId = () => {
		console.log(valueId);
	}
	const classNameLinkMenu = `${ styles.items } ${isMobile ? styles.flex : ''}`;

	return (
		<div className={styles.nav} >
			<div className={isMobile ? styles.open : styles.burger} onClick={handleClick}>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
			</div>
			<nav className={classNameLinkMenu}>
				<NavLink className={styles.link} to="/">About us</NavLink>
				<NavLink className={styles.link} to="/catalog">Catalog</NavLink>
				<NavLink className={styles.link} to="/cart">Cart</NavLink>
				<form action="#">
					<input type="text" name="idPicture" onChange={(e) => setValueId(e.target.value)}></input>
					<button type="button" className={styles.link} onClick={sentId}>
					{/* <img src={search} alt={"search"}></img> */}
					Search
					</button>
				</form>
			</nav>
		</div>
	)
}

export default Nav;
