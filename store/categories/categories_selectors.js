import { createSelector } from "reselect";

export const selectCategories = createSelector(
	(state) => state.categories.categories,
	// Creating and returning Categories Map/Object from Categories Array.
	(categories) =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);

export const selectCategoriesIsLoading = (state) => state.categories.isLoading;
