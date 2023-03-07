import React from "react";
import { Navbar as Nav, Button, Menu, Divider } from "react-daisyui";
import { MenuIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar(props) {
	return (
		<>
			<Nav className="bg-base-100">
				<Nav.Start>
					<Button
						color="ghost"
						onClick={props.toggleMenu}
						className="flex-none lg:hidden gap-3"
					>
						<MenuIcon className="h-6 w-6" />
						<div className="hidden md:block lg:hidden normal-case">Menu</div>
					</Button>

					<Link to="/">
						<Button
							color="ghost"
							className=" hidden lg:block normal-case text-xl"
						>
							{props.title}
						</Button>
					</Link>
				</Nav.Start>

				<Nav.Center>
					<Menu horizontal={true} className="hidden lg:flex gap-2">
						<a href="/#home" className="normal-case btn btn-ghost">
							Home
						</a>
						<a href="/#experiences" className="normal-case btn btn-ghost">
							Experiences
						</a>
						<Link to="/projects">
							<Button color="ghost" className="flex normal-case">
								Projects
							</Button>
						</Link>
						<a href="/#skills" className="normal-case btn btn-ghost">
							Skills
						</a>
						<a href="/#contact" className="normal-case btn btn-ghost">
							Contact
						</a>
					</Menu>

					<Link to="/">
						<Button
							color="ghost"
							className="flex lg:hidden normal-case text-xl"
						>
							{props.title}
						</Button>
					</Link>
				</Nav.Center>

				<Nav.End className="navbar-end">
					<ThemeSwitch themes={props.themes} />
				</Nav.End>
			</Nav>

			<Divider className="h-0.5 m-0" />
		</>
	);
}
