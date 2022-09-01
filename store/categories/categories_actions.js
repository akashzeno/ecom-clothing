
import { CATEGORIES_ACTION_TYPES } from "./categories_action_types.js";

export const fetchCategoriesStart = () => ({
	type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
});
export const fetchCategoriesSucceeded = (categories) => ({
	type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCEEDED,
	payload: categories,
});
export const fetchCategoriesFailed = (error) => ({
	type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
	payload: error,
});
