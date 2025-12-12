import search from '../../assets/images/search.svg';
import close from '../../assets/images/close.svg';
import Button from '../button/Button';
// import { useSelector } from 'react-redux';

import styles from './Search.module.scss';

const Search = ({handleChange, clearInput, valueAuthor}) => {
	// const data = useSelector(state => state.product.items)

	async function formAction(formData) {
		const newItem = formData.get('idPicture');

		//Отправляет POST-запрос на сервер для сохранения нового элемента
		//setItems((items) => [...items, { text: newItem }])
	}

	return (
		<>
			<form className={ styles.form } action={ formAction }>
				{/* <img className={ styles.search } src={search} alt=""></img> */}
				{/* <select value={ valueAuthor } className={ styles.input } onChange={ (e) => handleChange(e)}>
					<option value="" disabled hidden>Выберите автора...</option>
					{data && data.filter(el => el.artist_title !== "Author is unknown" && el.artist_title !== "" && el.artist_title !== null).map(val => (
						<option key={val.id} value={val.artist_title}>{val.artist_title}</option>
					))}
				</select> */}
				<input className={ styles.input } type="text" name="idPicture" value={ valueAuthor } placeholder="Автор" onChange={ (e) => handleChange(e) }></input>
				<Button handleClick={clearInput} className={ styles.close }>
					<img className={ styles.closeImg } src={close} alt=""></img>
				</Button>
			</form>
		</>
	)
}

export default Search;
