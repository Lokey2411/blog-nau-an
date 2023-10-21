import { ReactNode } from "react";

export interface StatisticProps {
	icon: ReactNode;
	number: number | string;
}

export default function Statistic(props: StatisticProps) {
	return (
		<div className="flex items-center mx-2">
			{props.icon}
			<p className="ml-1">{`${props.number}`}</p>
		</div>
	);
}
