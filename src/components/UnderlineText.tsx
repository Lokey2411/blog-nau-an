import { PropsWithChildren } from "react";

export default function UnderlineText({ children }: PropsWithChildren) {
	return (
		<div>
			{children}
			<div className="w-7 h-[1px] bg-black my-4"></div>
		</div>
	);
}
