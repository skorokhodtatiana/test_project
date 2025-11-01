//import styles from'./Home.module.scss';
import Card from "../card/Card";
import { Link } from 'react-router';

const Home = () => {
	return (
		<>
			<div>
				<Link to="/catalog">
					<h2>
						Каталог
					</h2>
				</Link>
				<Link to="/cart">
					<h2>
						Корзина
					</h2>
				</Link>
			</div>
		</>
	)
}

export default Home;