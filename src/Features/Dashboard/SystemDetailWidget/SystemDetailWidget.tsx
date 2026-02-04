import styles from "./SystemDetailWidget.module.scss";
import Report from "@assets/SystemDetailWidget/Report.svg?react";
import { systemDetailMockData } from "./helpers/systemDetailMockData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { getTranslation } from "../utils/i18n";

interface SystemDetailWidgetProps {
	category: string;
}

export const SystemDetailWidget: React.FC<SystemDetailWidgetProps> = ({
	category,
}) => {
	const [detail, setDetail] = useState({
		title: "",
		description: "",
	});
	const navigate = useNavigate();
	const selectedCategory = useSelector(
		(state: RootState) => state.category.selectedCategory,
	);
	const currentLanguage = useSelector(
		(state: RootState) => state.language.currentLanguage,
	);
	const t = getTranslation(currentLanguage);

	useEffect(() => {
		console.log(category);
		if (category !== "total") {
			setDetail(systemDetailMockData[0]);
		} else {
			setDetail({
				title: "",
				description: t.systemDetail.noDetailsAvailable,
			});
		}
	}, [category, t.systemDetail.noDetailsAvailable]);

	const ViewReport = () => {
		navigate(`/dashboard/${selectedCategory}`);
	};
	return (
		<div
			className={`${styles["SystemDetailWidget-container"]} ${category === "total" && styles["SystemDetailWidget-container-hidden"]}`}
			// onAnimationStart={handleAnimationStart}
		>
			<div className={styles["SystemDetailWidget-head"]}>
				<h3 className={styles["SystemDetailWidget-title"]}>{detail.title}</h3>
				<div className={styles["SystemDetailWidget-report"]}>
					<button
						className={styles["SystemDetailWidget-report-text"]}
						onClick={ViewReport}
					>
						{t.systemDetail.viewReport}
						<Report />
					</button>
				</div>
			</div>
			<p className={styles["SystemDetailWidget-body"]}>{detail.description}</p>
		</div>
	);
};
