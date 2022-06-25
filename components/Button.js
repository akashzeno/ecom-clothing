import styles from "../styles/Button.module.css";

const BUTTON_TYPE_CLASSES = {
	google: "googleSignIn",
	inverted: "inverted",
};

export default function Button({ children, buttonType, ...otherProps }) {
	return (
		<button
			className={`${styles.buttonContainer} ${
				styles[BUTTON_TYPE_CLASSES[buttonType]]
			}`}
			{...otherProps}
		>
			{children}
		</button>
	);
}
