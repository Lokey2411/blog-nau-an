import React from "react";
import { HeaderPartProps } from "../../types/navigation";
import { Link } from "react-router-dom";

function HeaderPath(props: HeaderPartProps) {
	return (
		<Link
			to={props.navigateTo}
			className="flex-1 mx-2 cursor-pointer"
		>
			<div className={`uppercase py-4 px-4 text-center ${props.active ? "border-t-4 border-[#000]" : "text-gray-500 hover:border-t-4 border-black"}`}>{props.label}</div>
		</Link>
	);
}

export default HeaderPath;
