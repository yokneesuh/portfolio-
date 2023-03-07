import React, { cloneElement } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Page from "./components/Page";
import { config } from "./config";
import { routes } from "./routes";
import Home from "./pages/Home";
import "./styles/index.css";
import Projects from "./pages/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Router>
		<Helmet>
			<title>My portfolio</title>
			<meta name="description" content="Hello I am a... and I.." />
		</Helmet>
		<Routes>
			<Route exact path="/" element={<Page config={config} />}>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
			</Route>
		</Routes>
	</Router>
);
