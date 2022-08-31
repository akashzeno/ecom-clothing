import { getCollectionAndDocuments } from "../../utils/firebase.js";
import { CATEGORIES_ACTION_TYPES } from "./categories_action_types.js";

// export const setCategories = (categories) => ({
// 	type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
// 	payload: categories,
// });

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

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart());
	try {
		dispatch(
			fetchCategoriesSucceeded(await getCollectionAndDocuments("categories"))
		);
	} catch (error) {
		dispatch(
			fetchCategoriesFailed({
				name: error.name,
				message: error.message,
			})
		);
	}
};
