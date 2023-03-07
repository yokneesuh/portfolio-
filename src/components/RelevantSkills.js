import React from "react";

export default function RelevantSkills(props) {
	const children = props.children;
	return (
		<section>
			<div className="container flex flex-col-reverse mx-auto lg:flex-row my-5">
				<div className="flex flex-col space-y-6 rounded-sm w-full">
					<div className="flex space-x-2 items-center">
						<div className="space-y-2">
							{children
								? React.Children.map(children, (child, i) => {
										if ((i + 1) % 2 != 0) {
											return child;
										}
								  })
								: "No work experience."}
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-6 rounded-sm w-full">
					<div className="flex space-x-2 items-center">
						<div className="space-y-2">
							{children
								? React.Children.map(children, (child, i) => {
										if ((i + 1) % 2 == 0) {
											return child;
										}
								  })
								: "No work experience."}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
