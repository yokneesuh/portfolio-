import React from "react";

export default function Timeline(props) {
	const { children } = props;
	return (
		<section>
			<div className="container max-w-5xl ">
				<div className="grid gap-4">
					<div className="relative col-span-12 md:px-4 sm:px-0 space-y-6 sm:col-span-9">
						{children
							? React.Children.map(children, (child, i) => {
									return child;
							  })
							: "No work experience."}
					</div>
				</div>
			</div>
		</section>
	);
}
