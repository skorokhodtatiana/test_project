import styles from'./Card.module.scss';
import cart from '../../assets/images/cart.svg';
import Button from '../button/Button';

const Card = ({ id, title, author, handleClick, classIcons }) => {

	return (
		<>
			<div key={id} className={ styles.card }>
				<div>
					<img className={ styles.image} src={ 'https://www.artic.edu/iiif/2/' + id + '/full/843,/0/default.jpg' } alt={ title }></img>
					<div className={ styles.title_name }>{title }</div>
					<div className={ styles.second_title}>{ author? author : 'Author is unknown' }</div>
				</div>
				<div className={ styles.icons + ' ' + classIcons }>
					<Button className= {styles.button } handleClick={ handleClick }>
						<img src={ cart } alt=""></img>
					</Button>
				</div>
			</div>
		</>
	)
}

export default Card;
