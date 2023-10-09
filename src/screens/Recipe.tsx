import HeaderNavigation from "../components/Header/HeaderNavigation";
import { AiOutlineSearch } from "react-icons/ai";
import { colors } from "../styles/colors";
import { blogs } from "../data/blog";
import VBlog from "../components/blog/VBlog";

export default function Recipe() {
	const textColor = colors.primary;
	return (
		<div className="bg-gray-100">
			<HeaderNavigation active="Công thức" />
			<div className="px-[120px] pt-20 ">
				<div className="flex justify-between mx-6 my-10">
					<div className="flex justify-between w-1/3">
						<p className={`text-[${textColor}]`}>All Posts</p>
						<p className={`text-[${textColor}]`}>Mỳ</p>
						<p className={`text-[${textColor}]`}>Châu Âu</p>
					</div>
					<div>
						<AiOutlineSearch />
					</div>
				</div>
				{blogs.map((blog, index) => (
					<VBlog
						{...blog}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
