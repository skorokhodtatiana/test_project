import styles from'./Home.module.scss';
import Card from "../../components/card/Card";
import { Link } from 'react-router';
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from '../../store/cartSlice';
import { useState } from 'react';

const Home = () => {
	const data = useSelector(state => state.author.item);
	const dispatch = useDispatch();

	const [listInCart, setListInCart] = useState('');
	const [isInCart, setIsInCart] = useState(false);

	const choseItem = (item) => {
		dispatch(addItem(item));
		setIsInCart(true);
		setListInCart(item.id);
	}

	return (
		<>
			<div>
				<Main></Main>
				<div className={styles.home}>
					{data && data.map(el => (
						<Card key={el.id} title={el.title} description={el.description} id={el.image_id} author={el.artist_title} isInCart={listInCart && listInCart === el.id ? true : false} handleClick={() => choseItem(el)}></Card>
					))}
				</div>
			</div>
		</>
	)
}

export default Home;