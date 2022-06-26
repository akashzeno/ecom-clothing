import { createContext, useEffect, useState } from "react";
import {
	createUserDocFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase.js";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});
export function UserProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocFromAuth(user);
			}
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);

	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
}
