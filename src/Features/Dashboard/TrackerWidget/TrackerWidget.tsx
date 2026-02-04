import { ProgressBar } from "./Components/ProgressBar/ProgressBar";
import styles from "./TrackerWidget.module.scss";
import Logo from "@assets/TrackerWidget/logo.svg?react";
import { useSelector } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { getTranslation } from "../utils/i18n";

export const TrackerWidget = () => {
	const currentLanguage = useSelector(
		(state: RootState) => state.language.currentLanguage,
	);
	const t = getTranslation(currentLanguage);

	return (
		<div className={styles["TrackerWidget-container"]}>
			<div className={styles["TrackerWidget-Head"]}>
				<div className={styles["TrackerWidget-icon-container"]}>
					<Logo className={styles["TrackerWidget-icon"]} />
				</div>
				<p className={styles["TrackerWidget-text"]}>
					{t.tracker.stayTuned}{" "}
					<span className={styles["TrackerWidget-text-highlight"]}>
						{t.tracker.checking}
					</span>
				</p>
			</div>
			<ProgressBar progress={31} />
			<p className={styles["TrackerWidget-text"]}>
				{t.tracker.resultsExpected}{" "}
				<span className={styles["TrackerWidget-text-highlight"]}>
					3 {t.tracker.days}
				</span>
			</p>
		</div>
	);
};
