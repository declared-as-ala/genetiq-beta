import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { setLanguage, Language } from "@/App/Redux/languageSlice";
import styles from "./LanguageSwitcher.module.scss";

export const LanguageSwitcher = () => {
	const dispatch = useDispatch();
	const currentLanguage = useSelector(
		(state: RootState) => state.language.currentLanguage,
	);

	const handleLanguageChange = (lang: Language) => {
		dispatch(setLanguage(lang));
	};

	return (
		<div className={styles["LanguageSwitcher-container"]}>
			<button
				className={`${styles["LanguageSwitcher-button"]} ${
					currentLanguage === "en" ? styles["active"] : ""
				}`}
				onClick={() => handleLanguageChange("en")}
			>
				EN
			</button>
			<button
				className={`${styles["LanguageSwitcher-button"]} ${
					currentLanguage === "es" ? styles["active"] : ""
				}`}
				onClick={() => handleLanguageChange("es")}
			>
				ES
			</button>
		</div>
	);
};
