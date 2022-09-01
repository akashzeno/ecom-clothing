import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/categories_saga.js";
import { userSaga } from "./user/user_saga.js";

export function* rootSaga() {
	yield all([call(categoriesSaga), call(userSaga)]);
}
