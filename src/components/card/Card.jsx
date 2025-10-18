import styles from'./Card.module.scss';

const Card = ({key, title, image_id, author}) => {

	return (
		<>
			<div className={styles.card}>
				<img className={styles.image} src={'https://www.artic.edu/iiif/2/' + image_id + '/full/843,/0/default.jpg'} alt={title}></img>
				<div className={styles.title} key={key}>
					<span>Название: </span>
					<span className={styles.title_name}>{title}</span>
				</div>
				<div className={styles.title} key={key}>
					<span>Автор: </span>
					<span className={styles.title_name}>{author}</span>
				</div>
			</div>
		</>
	)
}

export default Card;
