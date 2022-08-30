import { CATEGORIES_ACTION_TYPES } from "./categories_action_types.js";

export const setCategories = (categories) => ({
	type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
	payload: categories,
});
