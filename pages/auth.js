import SignInForm from "../components/SignInForm.js";
import SignUpForm from "../components/SignUpForm.js";
import styles from "../styles/auth.module.css";
export default function SignIn() {
	return (
		<div className={styles.authContainer}>
			<SignInForm />
			<SignUpForm />
		</div>
	);
}
