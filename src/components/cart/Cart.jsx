import { useSelector } from 'react-redux';
import Card from '../card/Card';
import styles from'./Cart.module.scss';

const Cart = () => {
	const items = useSelector(state => state.cart.item)

	return (
		<>
			<h1>
				Корзина
			</h1>
			<div className={ styles.listCards }>
				{items.length && items.map(el => (
					<Card key={el.item.id} id={el.id} download_url={ el.item.download_url } author={ el.item.author } classIcons={ styles.icons } classCard={styles.card}></Card>
				))}
			</div>
		</>
	)
}

export default Cart;
