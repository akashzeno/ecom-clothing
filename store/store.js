import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root_saga.js";
import { rootReducer } from "./root_reducer.js";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleWares = [
	process.env.NODE_ENV === "development" && logger,
	// thunk,
	sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
	(process.env.NODE_ENV === "development" &&
		typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

// After the store has been instantiated with the saga middleware inside we call sagaMiddleware.run() and pass root-saga as an argument
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
