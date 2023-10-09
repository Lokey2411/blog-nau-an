import React from "react";
import { styles } from "../styles/styles";

export default function Slogan() {
	return (
		<div className="mt-14 w-[98vw] justify-center items-center flex-col flex py-6 border-b">
			<img
				src="./logo.jpg"
				alt="Garan Foodblog"
				className={styles.logo}
			/>
			<p className="uppercase text-3xl mt-3 text-[#035772] font-bold">Blog nấu ăn và các công thức</p>
		</div>
	);
}
