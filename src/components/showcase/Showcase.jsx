import styles from'./Showcase.module.scss';
import Card from "../card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { useState } from 'react';
import useLocalStorage from '../../utils/useLocalStorage';

const Showcase = () => {
	const [isInCart, setIsInCart] = useState(false);
	const [itemsInCart, setItemsInCart] = useLocalStorage('itemsInCart', []);

	const dispatch = useDispatch();

	const choseItem = (item) => {
		dispatch(addItem(item));
		setIsInCart(true);
		setItemsInCart([...itemsInCart, item.id])
	}

	const data = useSelector(state => state.product.items);

	return (
		<>
			<div className={styles.page}>
				{data && data.map(el => (
					<Card key={el.id} id={el.id} download_url={el.download_url} author={el.author} isInCart={itemsInCart.length && itemsInCart.includes(el.id) ? true : false} handleClick={() => choseItem(el)}></Card>
				))}
			</div>
		</>
	)
}

export default Showcase;
