import search from '../../assets/images/search.svg';
import close from '../../assets/images/close.svg';
import Button from '../button/Button';

import styles from './Search.module.scss';

const Search = ({handleChange, clearInput, valueAuthor}) => {

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
