import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocuments } from "../utils/firebase.js";
export const CategoriesContext = createContext({
	categories: {},
	setCategories: () => null,
});

export function CategoriesProvider({ children }) {
	const [categories, setCategories] = useState({});
	useEffect(() => {
		(async () => {
			setCategories(await getCollectionAndDocuments("categories"));
		})();
	}, []);
	return (
		<CategoriesContext.Provider value={{ categories, setCategories }}>
			{children}
		</CategoriesContext.Provider>
	);
}
