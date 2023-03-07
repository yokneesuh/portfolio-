import { SunIcon, MoonIcon } from "@heroicons/react/outline";

import { routes } from "./routes";

// app config

export const config = {
	title: "John Doe",
	home: routes.home,
	pages: [routes.projects],
	themes: [
		{
			name: "Light",
			id: "winter",
			icon: <SunIcon className="h-6 w-6" />,
		},
		{
			name: "Dark",
			id: "dark",
			icon: <MoonIcon className="h-6 w-6" />,
		},
	],
	masonryColumns: {
		default: 4,
		960: 3,
		730: 2,
		500: 1,
	},
};
