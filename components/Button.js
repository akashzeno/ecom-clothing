import styles from "../styles/Button.module.css";

const BUTTON_TYPE_CLASSES = {
	google: "googleSignIn",
	inverted: "inverted",
};

export default function Button({
	children,
	buttonType,
	isLoading,
	...otherProps
}) {
	return (
		<button
			disabled={isLoading}
			className={`${styles.buttonContainer} ${
				styles[BUTTON_TYPE_CLASSES[buttonType]]
			}`}
			{...otherProps}
		>
			{isLoading ? <div className={styles.buttonSpinner}></div> : children}
		</button>
	);
}
