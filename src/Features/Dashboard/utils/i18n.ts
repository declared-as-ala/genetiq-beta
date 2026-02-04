import { Language } from "@/App/Redux/languageSlice";

type Translations = {
	tracker: {
		stayTuned: string;
		checking: string;
		resultsExpected: string;
		days: string;
	};
	age: {
		biologicalAge: string;
		chronologicalAge: string;
		yrs: string;
	};
	concerns: {
		keyAreasOfConcern: string;
		showAll: string;
		showLess: string;
	};
	systemDetail: {
		viewReport: string;
		noDetailsAvailable: string;
	};
};

const translations: Record<Language, Translations> = {
	en: {
		tracker: {
			stayTuned: "Stay tuned. We are checking your",
			checking: "Cholesterol",
			resultsExpected: "results expected in",
			days: "days",
		},
		age: {
			biologicalAge: "Biological age",
			chronologicalAge: "Chronological age",
			yrs: "yrs",
		},
		concerns: {
			keyAreasOfConcern: "Key Areas of Concern",
			showAll: "Show all",
			showLess: "Show Less",
		},
		systemDetail: {
			viewReport: "View report",
			noDetailsAvailable: "No details available.",
		},
	},
	es: {
		tracker: {
			stayTuned: "Mantente atento. Estamos revisando tu",
			checking: "Colesterol",
			resultsExpected: "resultados esperados en",
			days: "días",
		},
		age: {
			biologicalAge: "Edad biológica",
			chronologicalAge: "Edad cronológica",
			yrs: "años",
		},
		concerns: {
			keyAreasOfConcern: "Áreas Clave de Preocupación",
			showAll: "Mostrar todo",
			showLess: "Mostrar menos",
		},
		systemDetail: {
			viewReport: "Ver informe",
			noDetailsAvailable: "No hay detalles disponibles.",
		},
	},
};

export const getTranslation = (language: Language): Translations => {
	return translations[language];
};
