import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

interface ThemeState {
	currentTheme: Theme;
}

const getInitialTheme = (): Theme => {
	const saved = localStorage.getItem("genetiq-theme");
	if (saved === "light" || saved === "dark") {
		return saved;
	}
	return "light";
};

const initialState: ThemeState = {
	currentTheme: getInitialTheme(),
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.currentTheme = action.payload;
			localStorage.setItem("genetiq-theme", action.payload);
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
