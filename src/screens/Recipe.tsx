import HeaderNavigation from "../components/Header/HeaderNavigation";
import { AiOutlineSearch } from "react-icons/ai";
import { colors } from "../styles/colors";
import { blogs } from "../data/blog";
import VBlog from "../components/blog/VBlog";
import { useEffect, useState } from "react";
import { BlogProps } from "../types/blog";
import { firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { removeDuplicate } from "../data/functions";

export default function Recipe() {
	const textColor = colors.primary;
	const [blogData, setBlogData] = useState<BlogProps[]>([]);
	const [blogFilter, setBlogFilter] = useState<BlogProps[]>([]);
	const [catagories, setCatagories] = useState<string[]>([]);
	// const isFocused = useIsFocused();
	const fetchBlogs = async () => {
		const blogPromises = blogs.map((item) => {
			setCatagories((prevState) => [...prevState, ...item.post.desc]);
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
					<div className="flex justify-between w-full">
						<p
							className={`text-[${textColor}] underline cursor-pointer mr-2`}
							onClick={() => fetchBlogs()}
						>
							Tất cả các bài
						</p>
						{removeDuplicate(catagories)
							.sort((a, b) => a.localeCompare(b))
							.map((item: any) => {
								return (
									<p
										className={`text-[${textColor}] underline cursor-pointer flex-1 mr-2`}
										onClick={() => filterBlog(item)}
									>
										{item}
									</p>
								);
							})}
					</div>
					<div>
						<AiOutlineSearch />
					</div>
				</div>
				{blogFilter.map((blog, index) => {
					return (
						<VBlog
							{...blog}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
