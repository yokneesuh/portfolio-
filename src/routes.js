import Home from "./pages/Home";
import Projects from "./pages/Projects";

export const routes = {
	home: {
		name: "Home",
		path: "/",
		component: <Home />,
	},
	projects: {
		name: "Projects",
		path: "/projects",
		component: <Projects />,
	},
};
