import HeaderNavigation from "../components/Header/HeaderNavigation";
import { AiOutlineSearch } from "react-icons/ai";
import { colors } from "../styles/colors";
import { blogs } from "../data/blog";
import VBlog from "../components/blog/VBlog";
import { useEffect, useState } from "react";
import { BlogProps } from "../types/blog";
import { firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Recipe() {
	const textColor = colors.primary;
	const [blogData, setBlogData] = useState<BlogProps[]>([]);
	const [blogFilter, setBlogFilter] = useState<BlogProps[]>([]);
	// const isFocused = useIsFocused();
	const fetchBlogs = async () => {
		const blogPromises = blogs.map((item) => {
			const docRef = doc(firestore, "blog", item.id as string);
			return getDoc(docRef);
		});

		const blogDocs = await Promise.all(blogPromises);
		const newBlogData = blogDocs.map((doc) => doc.data() as BlogProps);
		setBlogData(newBlogData);
		setBlogFilter(newBlogData);
	};

	const filterBlog = (catagory: any) => {
		let filteredBlogs = [];

		filteredBlogs = blogData.filter((blog) => blog.post.desc.includes(catagory));
		setBlogFilter(filteredBlogs);
	};
	useEffect(() => {
		fetchBlogs();
	}, []);
	return (
		<div className="bg-gray-100">
			<HeaderNavigation active="Công thức" />
			<div className="px-[120px] pt-20 ">
				<div className="flex justify-between mx-6 my-10">
					<div className="flex justify-between w-1/3">
						<p
							className={`text-[${textColor}] cursor-pointer`}
							onClick={() => fetchBlogs()}
						>
							All Posts
						</p>
						<p
							className={`text-[${textColor}] cursor-pointer`}
							onClick={() => filterBlog("Mỳ")}
						>
							Mỳ
						</p>
						<p
							className={`text-[${textColor}] cursor-pointer`}
							onClick={() => filterBlog("Châu Âu")}
						>
							Châu Âu
						</p>
					</div>
					<div>
						<AiOutlineSearch />
					</div>
				</div>
				{blogFilter.map((blog, index) => (
					<VBlog
						{...blog}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
