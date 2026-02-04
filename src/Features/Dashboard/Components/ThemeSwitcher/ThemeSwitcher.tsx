import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { setTheme, Theme } from "@/App/Redux/themeSlice";
import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
	const dispatch = useDispatch();
	const currentTheme = useSelector(
		(state: RootState) => state.theme.currentTheme,
	);

	const handleThemeChange = (theme: Theme) => {
		dispatch(setTheme(theme));
	};

	return (
		<div className={styles["ThemeSwitcher-container"]}>
			<button
				className={`${styles["ThemeSwitcher-button"]} ${
					currentTheme === "light" ? styles["active"] : ""
				}`}
				onClick={() => handleThemeChange("light")}
				aria-label="Light theme"
			>
				☀️
			</button>
			<button
				className={`${styles["ThemeSwitcher-button"]} ${
					currentTheme === "dark" ? styles["active"] : ""
				}`}
				onClick={() => handleThemeChange("dark")}
				aria-label="Dark theme"
			>
				🌙
			</button>
		</div>
	);
};
