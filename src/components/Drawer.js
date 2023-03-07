import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Divider } from "react-daisyui";

export default function Drawer(props) {
	return (
		<Menu
			className="bg-base-100 text-base-content overflow-y-auto w-80 p-2"
			vertical={true}
		>
			<Link to="/">
				<Button
					color="ghost"
					className="normal-case text-xl"
					onClick={props.toggleDrawer}
				>
					{props.title}
				</Button>
			</Link>

			<Divider className="h-0.5 my-2 mx-4" />
			<div className="flex flex-col">
				<a
					href="/#home"
					className="normal-case btn btn-ghost justify-start"
					onClick={props.toggleDrawer}
				>
					Home
				</a>
				<a
					href="/#experiences"
					className="normal-case btn btn-ghost justify-start"
					onClick={props.toggleDrawer}
				>
					Experiences
				</a>
				<Link to="/projects">
					<span className="btn btn-ghost flex normal-case justify-start">
						Projects
					</span>
				</Link>
				<a
					href="/#skills"
					className="normal-case btn btn-ghost justify-start"
					onClick={props.toggleDrawer}
				>
					Skills
				</a>
				<a
					href="/#contact"
					className="normal-case btn btn-ghost justify-start"
					onClick={props.toggleDrawer}
				>
					Contact
				</a>
			</div>
		</Menu>
	);
}
