import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCollectionAndDocuments } from "../../utils/firebase.js";
import {
	fetchCategoriesSucceeded,
	fetchCategoriesFailed,
} from "./categories_actions.js";
import { CATEGORIES_ACTION_TYPES } from "./categories_action_types.js";

export function* fetchCategoriesAsync() {
	try {
		const categoriesArray = yield call(getCollectionAndDocuments, "categories");
		yield put(fetchCategoriesSucceeded(categoriesArray));
	} catch (error) {
		yield put(fetchCategoriesFailed(error));
	}
}

export function* onFetchCategories() {
	yield takeLatest(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
		fetchCategoriesAsync
	);
}

export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}
