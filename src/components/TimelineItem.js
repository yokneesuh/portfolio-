import React from "react";

export default function TimelineItem({ date, title, desc }) {
	return (
		<div className="col-span-12 space-y-12 relative sm:before:hidden md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 md:before:block sm:before:w-1 sm:before:-left-[13px] before:bg-base-300 sm:before:rounded-full">
			<div className="flex flex-col sm:relative sm:before:hidden md:before:block sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary hover:before:bg-primary-focus">
				<h3 className="text-xl font-semibold tracking-wide">
					{title ? title : "? Missing Title ?"}
				</h3>
				<time className="text-sm tracking-wide uppercase">
					{date ? date : "? Missing Date ?"}
				</time>
				{desc ? <p className="mt-3">{desc}</p> : ""}
			</div>
		</div>
	);
}
