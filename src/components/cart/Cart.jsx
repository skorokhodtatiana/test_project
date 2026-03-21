import { useSelector, useDispatch } from 'react-redux';
import Card from '../card/Card';
import styles from'./Cart.module.scss';
import { removeItem } from '../../store/cartSlice';
import useLocalStorage from '../../utils/useLocalStorage';

const Cart = () => {
	const [itemsInCart, setItemsInCart] = useLocalStorage('itemsInCart', []);
	const items = useSelector(state => state.cart.item);
	const dispatch = useDispatch();


	const handleClickDelete = (id) => {
		dispatch(removeItem(id));
		setItemsInCart(itemsInCart.filter(item => item !== id))
	}

	return (
		<div className={styles.cart}>
			<h1 className={styles.title}>
				Корзина
			</h1>
			<div className={ styles.listCards }>
				{items.length > 0 && items.map(el => (
					<Card key={el.item.id} id={el.id} download_url={ el.item.download_url } author={ el.item.author } classIcons={ styles.icons } classCard={styles.card} classDescription={styles.description} handleClickDelete={() => handleClickDelete(el.item.id)} itemInCart={true}></Card>
				))}
			</div>
		</div>
	)
}

export default Cart;
