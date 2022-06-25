import styles from "../styles/FormInput.module.css";

export default function FormInput({ label, ...otherProps }) {
	return (
		<div className={styles.group}>
			<input className={styles.formInput} {...otherProps} />
			{label && (
				<label
					className={`${otherProps.value.length ? styles.shrink : ""} ${
						styles.formInputLabel
					}`}
					htmlFor={otherProps.id}
				>
					{label}
				</label>
			)}
		</div>
	);
}
