import React from "react";
import CheckMark from "./Icons/checkMark";

export default function RelevantSkills({ title, desc, hideCheckmark }) {
	return (
		<div>
			<p className="!my-2">
				{hideCheckmark ? (
					""
				) : (
					<div className="inline float-left my-[3px] mr-2 text-success">
						<CheckMark />
					</div>
				)}
				<span className="text-xl font-bold leading-snug">
					{title ? title : "? Title Missing ?"}
				</span>
			</p>
			{desc ? <p className="leading-snug text-md">{desc}</p> : ""}
		</div>
	);
}
