import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "./Button.js";
import styles from "../styles/PaymentForm.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../store/cart/cart_selectors.js";
import { selectCurrentUser } from "../store/user/user_selectors.js";
export default function PaymentForm() {
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
	const currentUser = useSelector(selectCurrentUser);
	const amount = useSelector(selectCartTotal);
	const paymentHandler = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) return;
		setIsProcessingPayment(true);
		const response = await fetch("/api/create_payment_intent", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: amount * 100 }),
		}).then((res) => res.json());
		const {
			paymentIntent: { client_secret },
		} = response;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.displayName : "Guest",
				},
			},
		});
		setIsProcessingPayment(false);
		if (paymentResult.error) {
			console.log(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				alert("Payment Successful");
			}
		}
	};
	return (
		<div className={styles.paymentFromContainer}>
			<form className={styles.formContainer} onSubmit={paymentHandler}>
				<h2>Credit Card Payment: </h2>
				<CardElement />
				<Button
					style={{ marginLeft: "auto", marginTop: "30px" }}
					isLoading={isProcessingPayment}
					buttonType="inverted"
				>
					Pay Now
				</Button>
			</form>
		</div>
	);
}
