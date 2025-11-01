import styles from'./Card.module.scss';

const Card = ({id, title, author, handleClick}) => {

	return (
		<>
			<div key={id} className={styles.card} onClick={handleClick}>
				<img className={styles.image} src={'https://www.artic.edu/iiif/2/' + id + '/full/843,/0/default.jpg'} alt={title}></img>
				<div className={styles.title}>
					<span>Название: </span>
					<span className={styles.title_name}>{title}</span>
					<span className={styles.title_name}>{id}</span>
				</div>
				<div className={styles.title}>
					<span>Автор: </span>
					<span className={styles.title_name}>{author}</span>
				</div>
			</div>
		</>
	)
}

export default Card;
