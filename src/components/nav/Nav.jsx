import { useState } from 'react';
import styles from './Nav.module.scss';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
//import search from '../../assets/images/search.svg';
import { addChoseItem } from '../../store/choseAuthorSlice';

const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [valueAuthor, setValueAuthor] = useState(null);

	const dispatch = useDispatch();
	const data = useSelector(state => state.product.items)

	const handleClick = () => {
		setIsMobile(!isMobile);
	}

	const sentAuthor = () => {
		const newData = data.filter(el => {
			return el?.artist_title == valueAuthor
		});

		dispatch(addChoseItem(newData));
	}
	const classNameLinkMenu = `${ styles.items } ${isMobile ? styles.flex : ''}`;

	async function formAction(formData) {
		const newItem = formData.get('idPicture');

		//Отправляет POST-запрос на сервер для сохранения нового элемента
		//setItems((items) => [...items, { text: newItem }])
	}

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
				<form action={formAction}>
					<input type="text" name="idPicture" placeholder="Напишите автора" onChange={(e) => setValueAuthor(e.target.value)}></input>
					<button type="submit" className={styles.link} onClick={sentAuthor}>
					{/* <img className={styles.search} src={search} alt={"search"}></img> */}
					Search
					</button>
				</form>
			</nav>
		</div>
	)
}

export default Nav;
