import styles from'./Showcase.module.scss';
import Card from "../card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { useState } from 'react';

const Showcase = () => {
	const [listInCart, setListInCart] = useState('');
	const [isInCart, setIsInCart] = useState(false);

	const dispatch = useDispatch();

	const choseItem = (item) => {
		dispatch(addItem(item));
		setIsInCart(true);
		setListInCart(item.id);
	}

	const data = useSelector(state => state.product.items);

	return (
		<>
			<div className={styles.page}>
				{data && data.map(el => (
					<Card key={el.id} title={el.title} description={el.description} id={el.image_id} author={el.artist_title} isInCart={listInCart && listInCart === el.id ? true : false} handleClick={() => choseItem(el)}></Card>
				))}
			</div>
		</>
	)
}

export default Showcase;
