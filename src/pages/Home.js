import React from "react";
import RelevantSkills from "../components/RelevantSkills";
import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";
import Typography from "../components/Typography";
import Skill from "../components/Skill";
import { Button } from "react-daisyui";
import { Link } from "react-router-dom";

// This is a very bare/bland template.
// For themes specific to you and your personality visit:
// https://daisyui.com/docs/themes/

export default function Home() {
	return (
		<Typography>
			{/* AVATAR (delete as needed) */}
			<div className="avatar my-5">
				<div className="w-48 h-full rounded-full">
					<img
						className="!m-0"
						src="https://media.gettyimages.com/photos/headshot-of-male-caucasian-looking-at-camera-picture-id674323073"
					/>
				</div>
			</div>
			{/* END OF AVATAR */}

			{/* HEADER */}
			<h1 id="home">
				Hello, I'm <span className="text-primary">John</span>
			</h1>

			{/* DESCRIPTION */}
			<p>
				Hello! My name is John Doe. I am a student at CSU Fresno interested in
				x,y,z. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
				sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<div className="divider"></div>

			{/* WORK EXPERIENCE */}
			<h2 id="experiences"> Work Experience </h2>
			<Timeline>
				<TimelineItem
					title="Cashier @ FoodMaxx"
					date="Dec 2022 - Present"
					desc="Stock food and handle cash."
				/>

				<TimelineItem
					title="Cashier @ FoodMaxx"
					date="Dec 2022 - Present"
					desc="Stock food and handle cash."
				/>

				<TimelineItem
					title="Cashier @ FoodMaxx"
					date="Dec 2022 - Present"
					desc="Stock food and handle cash."
				/>
			</Timeline>
			{/* SKILLS */}
			<div className="flex flex-col">
				<h2 id="skills" className="!mb-0">
					Projects & Skills
				</h2>
				<RelevantSkills>
					<Skill title="React & Web :)" desc="This site was made with React." />
					<Skill title="C++" desc="For every CSU Fresno CSCI Major :)" />
					<Skill title="Tailwind CSS" />
					<Skill title="This checkmark is hidden" hideCheckmark={true} />
				</RelevantSkills>
				<Link to="/projects" className="self-end">
					<Button color="primary" className="items-right max-w-[10em]">
						View my work
					</Button>
				</Link>
				<div className="divider"></div>
			</div>

			{/* CONTACT INFORMATION */}
			<div className="bg-base-200 shadow-xl px-8 py-8 rounded-lg mt-10">
				<h2 id="contact" className="!mt-3">
					Contact Information
				</h2>
				<p>
					Thank you for viewing my page. To get in touch with me, please see the
					following!
				</p>
				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<a
						href="mailto:johndoe@gmail.com"
						className="btn btn-primary"
						target="_blank"
					>
						Email
					</a>

					<a
						href="https://www.myperfectresume.com/wp-content/uploads/2020/08/Bartender_Modern_Chrono.png"
						className="btn btn-primary"
						target="_blank"
					>
						Resume
					</a>
				</div>
			</div>
		</Typography>
	);
}
