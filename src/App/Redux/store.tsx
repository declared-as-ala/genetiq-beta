import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import languageReducer from "./languageSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
	reducer: {
		category: categoryReducer,
		language: languageReducer,
		theme: themeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
