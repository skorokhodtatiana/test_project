import search from '../../assets/images/search.svg';
import close from '../../assets/images/close.svg';
import Button from '../button/Button';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addChoseItem } from '../../store/choseAuthorSlice';

import styles from './Search.module.scss';

const Search = () => {
	const [valueAuthor, setValueAuthor] = useState('');

	const dispatch = useDispatch();
	const data = useSelector(state => state.product.items)

	const handleChange = (e) => {
		console.log("e.target.value " + e.target.value)
		setValueAuthor(e.target.value);
		const newData = data?.filter(el => {
			//console.log(e.target.value)
			return el.artist_title && el.artist_title === e.target.value
		});

		dispatch(addChoseItem(newData));
	}

	const clearInput = () => {
		setValueAuthor('');
		dispatch(addChoseItem(''));
	}

	async function formAction(formData) {
		const newItem = formData.get('idPicture');

		//Отправляет POST-запрос на сервер для сохранения нового элемента
		//setItems((items) => [...items, { text: newItem }])
	}

	return (
		<>
			<form className={ styles.form } action={ formAction }>
				<img className={ styles.search } src={search} alt=""></img>
				<input className={ styles.input } type="text" name="idPicture" value={ valueAuthor } placeholder="Автор" onChange={ (e) => handleChange(e) }></input>
				<Button handleClick={clearInput} className={ styles.close }>
					<img className={ styles.closeImg } src={close} alt=""></img>
				</Button>
			</form>
		</>
	)
}

export default Search;
