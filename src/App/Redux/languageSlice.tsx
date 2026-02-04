import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Language = "en" | "es";

interface LanguageState {
	currentLanguage: Language;
}

const getInitialLanguage = (): Language => {
	const saved = localStorage.getItem("genetiq-language");
	if (saved === "en" || saved === "es") {
		return saved;
	}
	return "en";
};

const initialState: LanguageState = {
	currentLanguage: getInitialLanguage(),
};

const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<Language>) => {
			state.currentLanguage = action.payload;
			localStorage.setItem("genetiq-language", action.payload);
		},
	},
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
