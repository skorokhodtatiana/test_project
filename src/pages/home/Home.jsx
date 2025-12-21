import styles from'./Home.module.scss';
import Card from "../../components/card/Card";
import { Link } from 'react-router';
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from '../../store/cartSlice';
import { useEffect, useState, useMemo } from 'react';
import { addChoseItem } from '../../store/choseAuthorSlice';

const Home = () => {
	const data = useSelector(state => state.product.items);
	const dataChoosing = useSelector(state => state.author.item);
	const dispatch = useDispatch();

	const [listInCart, setListInCart] = useState('');
	const [isInCart, setIsInCart] = useState(false);
	const [randomData, setRandomData] = useState('');
	const [chooseauthor, setChooseauthor] = useState('');

	const choseItem = (item) => {
		dispatch(addItem(item));
		setIsInCart(true);
		setListInCart(item.id);
	}

	const selectRandomElements = (arr, count) => {
		if (count > arr.length) {
			console.error("Количество выбираемых элементов не может быть больше длины массива.");
			return;
		}

		const selected = [];
		while (selected.length < count) {
			const randomIndex = Math.floor(Math.random() * arr.length);
			const randomElement = arr[randomIndex];
				if (!selected.includes(randomElement)) {
					selected.push(randomElement);
				}
			}
		return selected;
	}

	useEffect(() => {
		setRandomData(selectRandomElements(data, 5));
	}, [])

	const author = useMemo(() => {
		const uniqueAuthors = new Set();
		data.map(obj => {
			if (obj.artist_title) {
				uniqueAuthors.add(obj.artist_title);
			}
		});
		return Array.from(uniqueAuthors);
	}, [data]);

	const handleClickAuthor = (el, index) => {
		const newData = data.filter(item => item.artist_title === el);
		dispatch(addChoseItem(newData));
		setChooseauthor(index);
	}

	return (
		<>
			<div className={styles.wrapper}>
				<Main></Main>
				<ul className={styles.list}>
					{!author.length ? <h3>Loading...</h3> : author.map((el, index) => (
						<li className={styles.item} style={{ backgroundColor: chooseauthor === index ? 'gray' : 'white'}} onClick={() => handleClickAuthor(el, index)} key={index}>{el}</li>
					))}
				</ul>
				<div className={styles.home}>
					{!dataChoosing.length && randomData && randomData.map(el => (
						<Card key={el.id} title={el.title} description={el.description} id={el.image_id} author={el.artist_title} isInCart={listInCart && listInCart === el.id ? true : false} handleClick={() => choseItem(el)}></Card>
					))}
					{dataChoosing && dataChoosing.map(el => (
						<Card key={el.id} title={el.title} description={el.description} id={el.image_id} author={el.artist_title} isInCart={listInCart && listInCart === el.id ? true : false} handleClick={() => choseItem(el)}></Card>
					))}
				</div>
			</div>
		</>
	)
}

export default Home;
