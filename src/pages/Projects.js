import React from "react";
import ProjectCard from "../components/ProjectCard";
import Typography from "../components/Typography";

// This is a very bare/bland template.
// For themes specific to you and your personality visit:
// https://daisyui.com/docs/themes/

// @TODO: If you'd like, a good potential addition to this template is a "projects" section :) It wouldn't be too hard to implement through DaisyUI
export default function Projects() {
	return (
		<Typography>
			<div className="fixer w-[100vw]"></div>
			<div>
				<div className="p-5 mx-auto">
					<h1 className="text-center !mb-7">Projects</h1>
					<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
						<ProjectCard
							title="Project 1"
							dateMonth="June"
							dateYear="2023"
							label="Python"
							projectLink="https://google.com"
						/>

						<ProjectCard
							title="Project 1"
							dateMonth="June"
							dateYear="2023"
							label="Java"
							projectLink="https://google.com"
						/>

						<ProjectCard
							title="Project 1"
							dateMonth="June"
							dateYear="2023"
							label="Web"
							projectLink="https://google.com"
							imgLink="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.epminc.com%2Fwp-content%2Fuploads%2F2019%2F12%2FArchive-Processor.png&f=1&nofb=1&ipt=6dfbe3f049cacf2c5d4d6570820881306ca3a66c0c6e08093ca9521024764f19&ipo=images"
						/>
					</div>
				</div>
			</div>
		</Typography>
	);
}
