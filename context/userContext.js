import { createContext, useEffect, useReducer } from "react";
import {
	createUserDocFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase.js";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

const INITIAL_STATE = {
	currentUser: null,
};

const USER_ACTION_TYPES = {
	SET_CURRENT_USER: "SET_CURRENT_USER",
};

function userReducer(state, action) {
	const { type, payload } = action;
	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			throw new Error(`Unhandled type in ${type} in userReducer`);
	}
}

export function UserProvider({ children }) {
	const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const setCurrentUser = (user) => {
		dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
	};
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
