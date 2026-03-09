import styles from'./Card.module.scss';
import cart from '../../assets/images/cart.svg';
import Button from '../button/Button';

const Card = ({ id, author, handleClick, classIcons, isInCart, download_url }) => {

	return (
		<>
			<div key={id} className={ styles.card }>
				<img className={ styles.image} src={ download_url } alt={`picture of ${author}`} loading="lazy"></img>
				<div className={ styles.description }>
					<div className={ styles.second_title}>{ author }</div>
					<div className={ styles.icons + ' ' + classIcons }>
						{ isInCart ?
							<div>Товар в корзине</div>
						:
							<Button className= {styles.button } handleClick={ handleClick }>
								<img className= {styles.iconCart } src={ cart } alt=""></img>
							</Button>
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default Card;
