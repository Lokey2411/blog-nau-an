import React, { MouseEvent, useState } from "react";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { colors } from "../../styles/colors";
import Statistic from "../Statistic";
import { BsFillChatLeftFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { styles } from "../../styles/styles";
import { BlogProps } from "../../types/blog";
import { useNavigate } from "react-router-dom";
import { limitedChar } from "../../data/functions";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

export default function HBlog(props: BlogProps) {
	const navigate = useNavigate();
	const [isFavorite, setIsFavorite] = useState(false);
	const toBlogHandler = async () => {
		const docRef = doc(firestore, "blog", props.id as string);
		const currentBlog: BlogProps | undefined = (await getDoc(docRef)).data() as BlogProps;
		let viewer = currentBlog?.post.viewer;
		const newBlog = {
			...currentBlog,
			post: {
				...currentBlog.post,
				viewer: viewer + 1,
			},
		};
		setDoc(docRef, newBlog);
		navigate("blog", { state: { id: props.id } });
	};
	document.getElementById("js-favorite")?.addEventListener("click", (event) => event.preventDefault());
	const toggleFavoriteHandler = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		const newBlogData: BlogProps = {
			...props,
			post: {
				...props.post,
				isFavorite: !isFavorite,
			},
		};
		const docRef = doc(firestore, "blog", props.id as string);
		setDoc(docRef, newBlogData);
		setIsFavorite((prevState) => !prevState);
	};
	return (
		<div
			className="w-[100%] ml-6 border h-fit pb-4 my-6 cursor-pointer"
			onClick={toBlogHandler}
		>
			<img
				src={props.post.imageSource}
				alt=""
				className="w-full mb-7"
			/>
			<div className="mx-6  ">
				<div className="border-b p-4">
					<div className="flex items-center">
						<img
							src={props.avatarSource}
							alt=""
							className={`mr-3 ${styles.avatar}`}
						/>
						<div>
							<p>{props.post.poster}</p>
							<ul className=" flex justify-between pr-6">
								<li>{props.post.date}</li>
								<li>{props.post.time}</li>
							</ul>
						</div>
						<FaCrown className="ml-1" />
					</div>
					<p className="uppercase text-3xl">{props.post.title}</p>
					<p className="text-[12px]">{limitedChar(props.post.content, 125)}</p>
				</div>
				<div className="flex justify-between mt-2">
					<div className="flex items-center">
						<Statistic
							icon={<AiOutlineEye />}
							number={props.post.viewer}
						/>
						<Statistic
							icon={<BsFillChatLeftFill />}
							number={props.post.commenter}
						/>
					</div>
					<div
						onClick={toggleFavoriteHandler}
						id="js-favorite"
					>
						{isFavorite ? (
							<AiFillHeart
								color={colors.secondary}
								size={24}
							/>
						) : (
							<AiOutlineHeart
								color={colors.secondary}
								size={24}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
