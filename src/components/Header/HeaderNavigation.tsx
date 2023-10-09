import React from "react";
import { navigationData } from "../../data/navigation";
import HeaderPath from "./HeaderPath";
import { styles } from "../../styles/styles";

export default function HeaderNavigation({ active }: any) {
	return (
		<div className="flex justify-between fixed top-0 left-0 right-0 bg-gray-200 border-b border-[#000] px-6 items-center">
			{navigationData.map((item) => {
				return (
					<HeaderPath
						{...item}
						key={item.label}
						active={item.label === active}
					/>
				);
			})}
			<img
				src="./avatar.jpg"
				className={styles.avatar}
				alt="avatar"
			/>
		</div>
	);
}
