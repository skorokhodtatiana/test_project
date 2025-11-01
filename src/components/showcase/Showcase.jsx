import styles from'./Showcase.module.scss';
import Card from "../card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice';

const Showcase = () => {
	const dispatch = useDispatch();

	const choseItem = (item) => {
		dispatch(addItem(item))
	}

	const data = useSelector(state => state.product.items);

	return (
		<>
			<div className={styles.page}>
				{data && data.map(el => (
					<Card key={el.image_id} title={el.title} description={el.description} id={el.image_id} author={el.artist_title} handleClick={() => choseItem(el)}></Card>
				))}
			</div>
		</>
	)
}

export default Showcase;
