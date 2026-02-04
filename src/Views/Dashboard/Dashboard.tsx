import { useState, useEffect, useRef } from "react";
import NavBar from "@/Features/Structural/NavBar/Navbar";
import styles from "./Dashboard.module.scss";
import { TrackerWidget } from "@/Features/Dashboard/TrackerWidget/TrackerWidget";
import { AgeWidget } from "@/Features/Dashboard/AgeWidget/AgeWidget";
import MainScene from "@/Features/DigitalTwin/Components/Three/Scene/MainScene";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
import CtaModal from "@/Features/Dashboard/CtaModal/CtaModal";
import { ConcernsWidget } from "@/Features/Dashboard/ConcernsWidget/ConcernsWidget";
// import { PlanWidget } from "@/Features/Dashboard/PlanWidget/PlanWidget";
import { SystemDetailWidget } from "@/Features/Dashboard/SystemDetailWidget/SystemDetailWidget";
import { useSelector } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { LanguageSwitcher } from "@/Features/Dashboard/Components/LanguageSwitcher/LanguageSwitcher";
import { ThemeSwitcher } from "@/Features/Dashboard/Components/ThemeSwitcher/ThemeSwitcher";
import { applyTheme } from "@/Features/Dashboard/utils/theme";

const Dashboard = () => {
	const [isNotFirstAnimation, setIsNotFirstAnimation] = useState(false);
	const selectedCategory = useSelector(
		(state: RootState) => state.category.selectedCategory,
	);
	const currentTheme = useSelector(
		(state: RootState) => state.theme.currentTheme,
	);
	const [category, setCategory] = useState(selectedCategory || "total");
	const dashboardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (selectedCategory !== "total") {
			setIsNotFirstAnimation(true);
		}
	}, [selectedCategory]);

	// Apply theme on mount and when theme changes
	useEffect(() => {
		if (dashboardRef.current) {
			applyTheme(currentTheme, dashboardRef.current);
		}
	}, [currentTheme]);

	// Ensure theme is applied on initial mount
	useEffect(() => {
		if (dashboardRef.current) {
			applyTheme(currentTheme, dashboardRef.current);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleAnimationStart = () => {
		const timeout = setTimeout(() => {
			setCategory(selectedCategory || "total");
		}, 800);
		return () => clearTimeout(timeout);
	};

	return (
		<div ref={dashboardRef} className={styles["Dashboard-layout"]}>
			<NavBar />
			<div className={styles["Dashboard-controls"]}>
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
			<div className={styles["Dashboard-select"]}></div>
			<CameraProvider>
				<div className={styles["Dashboard-content"]}>
					<div className={styles["Dashboard-dt-container"]}>
						<div className={styles["Dashboard-model"]}>
							<MainScene selectedCategory={selectedCategory || "total"} />
						</div>
					</div>
					<div
						key={selectedCategory}
						className={`${styles["Dashboard-stats"]} ${
							isNotFirstAnimation
								? styles["loopAnimation"]
								: styles["firstAnimation"]
						}`}
						onAnimationStart={handleAnimationStart}
					>
						<TrackerWidget />
						<SystemDetailWidget category={category} />
						<AgeWidget />
						<ConcernsWidget category={category || "total"} />
						{/* gi */}
					</div>
				</div>
			</CameraProvider>
			<CtaModal />
		</div>
	);
};

export default Dashboard;
