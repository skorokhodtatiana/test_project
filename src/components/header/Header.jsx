import Nav from '../nav/Nav';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.header_wrapper}>
			<div className={styles.header}>
				<div className={styles.logo}>
						ArtGallery
				</div>
				<Nav></Nav>
			</div>
		</div>
	)
}

export default Header;
