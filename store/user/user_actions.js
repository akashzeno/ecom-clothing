import { USER_ACTION_TYPES } from "./user_action_types.js";

export const checkUserSession = () => ({
	type: USER_ACTION_TYPES.CHECK_USER_SESSION,
});
export const googleSignInStart = () => ({
	type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
});
export const emailSignInStart = (email, password) => ({
	type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
	payload: { email, password },
});
export const signInSucceeded = (user) => ({
	type: USER_ACTION_TYPES.SIGN_IN_SUCCEEDED,
	payload: user,
});
export const signInFailed = (error) => ({
	type: USER_ACTION_TYPES.SIGN_IN_FAILED,
	payload: error,
});
export const signUpStart = (email, password, displayName) => ({
	type: USER_ACTION_TYPES.SIGN_UP_START,
	payload: { email, password, displayName },
});
export const signUpSucceeded = (user, additionalDetails) => ({
	type: USER_ACTION_TYPES.SIGN_UP_SUCCEEDED,
	payload: { user, additionalDetails },
});
export const signUpFailed = (error) => ({
	type: USER_ACTION_TYPES.SIGN_UP_FAILED,
	payload: error,
});
export const signOutStart = () => ({
	type: USER_ACTION_TYPES.SIGN_OUT_START,
});
export const signOutSucceeded = () => ({
	type: USER_ACTION_TYPES.SIGN_OUT_SUCCEEDED,
});
export const signOutFailed = (error) => ({
	type: USER_ACTION_TYPES.SIGN_OUT_FAILED,
	payload: error,
});
