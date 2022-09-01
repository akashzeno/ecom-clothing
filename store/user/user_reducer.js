import { USER_ACTION_TYPES } from "./user_action_types.js";

const USER_INITIAL_STATE = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export function userReducer(state = USER_INITIAL_STATE, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case USER_ACTION_TYPES.SIGN_IN_SUCCEEDED:
			return {
				...state,
				currentUser: payload,
			};
		case USER_ACTION_TYPES.SIGN_OUT_SUCCEEDED:
			return {
				...state,
				currentUser: null,
			};
		case USER_ACTION_TYPES.SIGN_UP_FAILED:
		case USER_ACTION_TYPES.SIGN_IN_FAILED:
		case USER_ACTION_TYPES.SIGN_OUT_FAILED:
			return {
				...state,
				error: { name: payload.name, message: payload.message },
			};
		default:
			return state;
	}
}
