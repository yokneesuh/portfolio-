import React from "react";

export default function ProjectCard({
	label,
	dateYear,
	dateMonth,
	title,
	projectLink,
	desc,
	imgLink,
}) {
	return (
		<div
			className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-xl hover:rounded-none transition-all cursor-pointer"
			style={{
				backgroundImage: imgLink
					? `url(
									${imgLink})`
					: `url(
									"https://source.unsplash.com/random/900×${
										Math.floor(Math.random() * 10 + 1) * 100
									}/?abstract"
								)`,
			}}
			onClick={() => {
				window.open(projectLink, "_blank");
			}}
		>
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b d via-transparent from-neutral-focus to-neutral rounded-xl hover:rounded-none transition-all cursor-pointer"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3 pointer-events-none">
				{label ? (
					<span
						href="#"
						className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-neutral-content "
					>
						{label}
					</span>
				) : (
					""
				)}

				<div className="flex flex-col justify-start text-center text-neutral-content">
					{dateYear ? (
						<span className="text-md font-semibold leading-none tracking-wide ">
							{dateYear}
						</span>
					) : (
						""
					)}
					{dateMonth ? (
						<span className="leading-none font-medium uppercase">
							{dateMonth}
						</span>
					) : (
						""
					)}
				</div>
			</div>
			<h2 className="z-10 p-5 pointer-events-none">
				<span
					href="#"
					className="font-medium text-md text-neutral-content bg-neutral px-2"
				>
					{title ? title : "? Missing Title ?"}
				</span>
				{desc ? (
					<>
						<br></br>

						<span
							href="#"
							className="px-1 py-1 text-xs font-semibold tracking-wider uppercase text-neutral-content "
						>
							{desc}
						</span>
					</>
				) : (
					""
				)}
			</h2>
		</div>
	);
}
