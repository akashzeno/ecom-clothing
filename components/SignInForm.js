import { useState } from "react";
import styles from "../styles/SignInForm.module.css";
import {
	createUserDocFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from "../utils/firebase.js";
import Button from "./Button.js";
import FormInput from "./FormInput.js";

export default function SignInForm() {
	async function signInWithGoogle() {
		const response = await signInWithGooglePopup();
		await createUserDocFromAuth(response.user);
	}

	const [formFields, setFormFields] = useState({
		email: "",
		password: "",
	});
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields({
			email: "",
			password: "",
		});
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = signInAuthUserWithEmailAndPassword(email, password);
			console.log(response);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect Password");
					break;
				case "auth/user-not-found":
					alert("No user with this email exits");
					break;
				default:
					console.log(error);
			}
		}
	};
	return (
		<div className={styles.signInContainer}>
			<form onSubmit={handleSubmit}>
				<h2>Already have an account?</h2>
				<span>Sign In with email and password</span>
				<FormInput
					label="Email"
					id="email"
					type="email"
					name="email"
					onChange={handleChange}
					value={email}
					required
				/>

				<FormInput
					label="Password"
					id="password"
					type="password"
					name="password"
					onChange={handleChange}
					value={password}
					required
				/>
				<div className={styles.buttonsContainer}>
					<Button type="submit">Sign In</Button>
					<Button onClick={signInWithGoogle} buttonType="google">
						Sign In with Google
					</Button>
				</div>
			</form>
		</div>
	);
}
