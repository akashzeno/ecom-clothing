import { useState } from "react";
import FormInput from "./FormInput.js";
import styles from "../styles/SignUpForm.module.css";
import Button from "./Button.js";
import { useDispatch } from "react-redux";
import { signUpStart } from "../store/user/user_actions.js";

export default function SignUpForm() {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields({
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Password Don't Match");
			return;
		}

		try {
			dispatch(signUpStart(user, password, displayName));
			resetFormFields();
		} catch (error) {
			if (error.code === `auth/email-already-in-use`) {
				alert("cannot create user, email already in use");
			} else {
				console.log(`user created encountered an error ${error}`);
			}
		}
	};
	return (
		<div className={styles.signUpContainer}>
			<h2>Don&apos;t have an account?</h2>
			<span>Sign Up with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					id="displayName"
					type="text"
					name="displayName"
					onChange={handleChange}
					value={displayName}
					required
				/>
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
				<FormInput
					label="Confirm Password"
					id="confirmPassword"
					type="password"
					name="confirmPassword"
					onChange={handleChange}
					value={confirmPassword}
					required
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
}
