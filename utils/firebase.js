import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDKzg9QNuWLH6iO6puGRvkAb4JcYgBZKWM",
	authDomain: "ecom-clothing-db-788bb.firebaseapp.com",
	projectId: "ecom-clothing-db-788bb",
	storageBucket: "ecom-clothing-db-788bb.appspot.com",
	messagingSenderId: "57158301899",
	appId: "1:57158301899:web:6626a3884e3f0d0832834e",
	measurementId: "G-89WLC0D3Y8",
};
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export async function createUserDocFromAuth(
	userAuth,
	additionalInformation = {}
) {
	if (!userAuth) return;
	const userDocRef = await doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log(`error creating user ${error.message}`);
		}
	}
	return userDocRef;
}

export async function createAuthUserWithEmailAndPassword(email, password) {
	if (!email || !password) return;
	return createUserWithEmailAndPassword(auth, email, password);
}
export async function signInAuthUserWithEmailAndPassword(email, password) {
	if (!email || !password) return;
	return signInWithEmailAndPassword(auth, email, password);
}
export const signOutUser = async () => signOut(auth);
export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
