import { styles } from "../styles/styles";

export default function Slogan() {
	return (
		<div className="mt-14 w-[98vw] justify-center items-center flex-col flex py-6 border-b">
			<img
				src="https://static.wixstatic.com/media/8b0b8d_33d1eeb1c9b441f1b3a69d73cbacc671~mv2.png"
				alt="Garan Foodblog"
				className={styles.logo}
			/>
			<p className="uppercase text-3xl mt-3 text-[#4d8495] font-bold title font-grotesk">Blog nấu ăn và các công thức</p>
		</div>
	);
}
