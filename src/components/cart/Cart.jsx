import { useSelector } from 'react-redux';
import styles from'./Cart.module.scss';
import Card from '../card/Card';

const Cart = () => {
	const items = useSelector(state => state.cart.item)

	return (
		<>
			<h1 className={ styles.page }>
				Корзина
			</h1>
			{items.length && items.map(el => (
				<Card key={ el.item.id } title={ el.item.title } description={ el.item.description } id={ el.item.image_id } author={ el.item.artist_title } classIcons={ styles.icons }></Card>
			))}
		</>
	)
}

export default Cart;
