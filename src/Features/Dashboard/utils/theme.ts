import { Theme } from "@/App/Redux/themeSlice";

type ThemeVariables = {
	"--dashboard-bg": string;
	"--dashboard-text": string;
	"--dashboard-card-bg": string;
	"--dashboard-border": string;
	"--dashboard-primary": string;
	"--dashboard-secondary": string;
};

const themes: Record<Theme, ThemeVariables> = {
	light: {
		"--dashboard-bg": "#ffffff",
		"--dashboard-text": "#000000",
		"--dashboard-card-bg": "#f9f9f9",
		"--dashboard-border": "#e0e0e0",
		"--dashboard-primary": "#3478f6",
		"--dashboard-secondary": "#535bf2",
	},
	dark: {
		"--dashboard-bg": "#1a1a1a",
		"--dashboard-text": "#ffffff",
		"--dashboard-card-bg": "#2a2a2a",
		"--dashboard-border": "#404040",
		"--dashboard-primary": "#5a9fff",
		"--dashboard-secondary": "#747bff",
	},
};

export const applyTheme = (theme: Theme, element: HTMLElement) => {
	const themeVars = themes[theme];
	Object.entries(themeVars).forEach(([key, value]) => {
		element.style.setProperty(key, value);
	});
};

export const getThemeVariables = (theme: Theme): ThemeVariables => {
	return themes[theme];
};
