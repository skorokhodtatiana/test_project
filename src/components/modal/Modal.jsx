import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Modal = ({
	showModal,
	className='',
	children,
	handleClick,
	...props
}) => {

	return (
		<>
			{ showModal &&
				ReactDOM.createPortal(
					<div className={ styles.container }>
						<div className={ styles.body }>
							<div onClick={ handleClick } className={ styles.close }></div>
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
