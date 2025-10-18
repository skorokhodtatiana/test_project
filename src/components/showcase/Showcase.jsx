import styles from'./Showcase.module.scss';
import Card from "../card/Card";

const Showcase = ({data}) => {
	return (
		<>
			<div className={styles.page}>
				{data && data.data.map(el => (
					<Card key={el.id} title={el.title} description={el.description} image_id={el.image_id} author={el.artist_title}></Card>
				))}
			</div>
		</>
	)
}

export default Showcase;
