import styles from'./Home.module.scss';
import Card from "../../components/card/Card";
import Main from "../../components/main/Main";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from '../../store/cartSlice';
import { useState } from 'react';
import { addChoseItem } from '../../store/choseAuthorSlice';
import RandomBlock from '../../components/randomBlock/RandomBlock';
import SidebarAuthors from '../../sidebarAuthors/SidebarAuthors';
import useLocalStorage from '../../utils/useLocalStorage';

const Home = () => {
	const [isInCart, setIsInCart] = useState(false);
	const [chooseauthor, setChooseauthor] = useState('');
	const [itemsInCart, setItemsInCart] = useLocalStorage('itemsInCart', []);

	const arrDataPictures = useSelector(state => state.product.items);
	const dataSelectedAuthor = useSelector(state => state.author.item);
	const dispatch = useDispatch();

	const choseItem = (item) => {
		dispatch(addItem(item));
		setIsInCart(true);

		setItemsInCart([...itemsInCart, item.id])
	}

	const handleClickAuthor = (el, index) => {
		const newData = arrDataPictures?.filter(item => item.author === el);
		dispatch(addChoseItem(newData));
		setChooseauthor(index);
	}

	return (
		<>
			<div className={styles.wrapper}>
				<Main></Main>
				<ul className={styles.list}>
					<SidebarAuthors arrDataPictures={arrDataPictures} chooseauthor={chooseauthor} className={styles.item} handleClickAuthor={handleClickAuthor}/>
				</ul>
				<div className={styles.home}>
					<RandomBlock arrDataPictures={arrDataPictures} dataSelectedAuthor={dataSelectedAuthor} listInCart={itemsInCart} handleClick={(item) => choseItem(item)}/>

					{dataSelectedAuthor.length && dataSelectedAuthor.map(el => (
						<Card key={el.id} id={el.id} download_url={el.download_url} author={el.author} isInCart={itemsInCart.length && itemsInCart.includes(el.id) ? true : false} handleClick={() => choseItem(el)}></Card>
					))}
				</div>
			</div>
		</>
	)
}

export default Home;
