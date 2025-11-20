import { useState } from 'react';
import styles from './Nav.module.scss';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import search from '../../assets/images/search.svg';
import { addChoseItem } from '../../store/choseAuthorSlice';
import Button from '../button/Button';
import Modal from '../modal/Modal';

const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [valueAuthor, setValueAuthor] = useState('');
	const [showModal, setShowModal] = useState(false);

	const dispatch = useDispatch();
	const data = useSelector(state => state.product.items)

	const handleClick = () => {
		setIsMobile(!isMobile);
	}

	// const sentAuthor = () => {
	// 	const newData = data.filter(el => {
	// 		return el?.artist_title == valueAuthor
	// 	});

	// 	dispatch(addChoseItem(newData));
	// }
	const classNameLinkMenu = `${ styles.items } ${isMobile ? styles.flex : ''}`;

	async function formAction(formData) {
		const newItem = formData.get('idPicture');

		//Отправляет POST-запрос на сервер для сохранения нового элемента
		//setItems((items) => [...items, { text: newItem }])
	}

	const handleChange = (e) => {
		setValueAuthor(e.target.value);
		const newData = data?.filter(el => {
			// console.log(el.artist_title)
			console.log(e.target.value)
			return el.artist_title && el.artist_title === e.target.value
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
				<form className={ styles.form } action={ formAction }>
					<img className={ styles.search } src={search} alt=""></img>
					<input className={ styles.input } type="text" name="idPicture" value={ valueAuthor } placeholder="Автор" onChange={ (e) => handleChange(e) }></input>
					<Button handleClick={clearInput} className={ styles.close }></Button>
				</form>
			</nav>
			{showModal &&
				<Modal showModal={showModal} handleClick={() => setShowModal(false)}>
					<h4>Картины этого автора не найдены</h4>
				</Modal>
			}
		</div>
	)
}

export default Nav;
