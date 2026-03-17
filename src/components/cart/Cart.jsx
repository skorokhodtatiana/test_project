import { useSelector, useDispatch } from 'react-redux';
import Card from '../card/Card';
import styles from'./Cart.module.scss';
import { removeItem } from '../../store/cartSlice';
import useLocalStorage from '../../utils/useLocalStorage';

const Cart = () => {
	const [itemsInCart, setItemsInCart] = useLocalStorage('itemsInCart', []);
	const items = useSelector(state => state.cart.item);
	console.log('items', items)
	const dispatch = useDispatch();


	const handleClickDelete = (id) => {
		const currentItemInCart = items.filter(el => 
			el.item.id !== id
		)
		dispatch(removeItem(currentItemInCart));
		console.log('itemsInCart',itemsInCart)
		console.log('id',id)
		const currentIdItemInCart = itemsInCart.filter(item => item !== id);
			console.log('currentIdItemInCart',currentIdItemInCart)
		setItemsInCart(currentIdItemInCart)
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
