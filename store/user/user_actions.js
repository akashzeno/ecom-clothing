import { USER_ACTION_TYPES } from "./user_action_types.js";

export const setCurrentUser = (user) => ({
	type: USER_ACTION_TYPES.SET_CURRENT_USER,
	payload: user,
});
