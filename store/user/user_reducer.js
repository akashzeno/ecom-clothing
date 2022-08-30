import { USER_ACTION_TYPES } from "./user_action_types.js";

const USER_INITIAL_STATE = {
	currentUser: null,
};

export function userReducer(state = USER_INITIAL_STATE, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			return state;
	}
}
