import styles from './Button.module.scss';

const Button = ({
	className='',
	disabled,
	children,
	handleClick,
	type = 'button',
	...props
}) => {

	return (
		<button className={ styles.button + ' ' + className }
			disabled={ disabled }
			type={ type }
			onClick={handleClick}
			{...props}
		>
			{ children }
		</button>
	);
};

export default Button;
