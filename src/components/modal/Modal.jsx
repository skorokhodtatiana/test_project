import ReactDOM from 'react-dom';
import Button from '../button/Button';
import close from '../../assets/images/close.svg';

import styles from './Modal.module.scss';

const Modal = ({
	showModal,
	className='',
	children,
	handleClick,
}) => {

	return (
		<>
			{ showModal &&
				ReactDOM.createPortal(
					<div className={ styles.container + className }>
						<div className={ styles.body }>
							<Button handleClick={handleClick} className={ styles.close }>
								<img className={ styles.closeImg } src={close} alt=""></img>
							</Button>
							{ children }
						</div>
					</div>,
					document.body
				)
			}
		</>
	);
};

export default Modal;
