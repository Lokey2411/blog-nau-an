import { MouseEvent, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { colors } from "../../styles/colors";
import { BlogProps } from "../../types/blog";
import { useNavigate } from "react-router-dom";
import { limitedChar } from "../../data/functions";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

export default function VBlog(props: BlogProps) {
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
		navigate("/blog", { state: { id: props.id } });
	};
	const favoriteHandler = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		setIsFavorite(!isFavorite);
		const newBlogData: BlogProps = {
			...props,
			post: {
				...props.post,
				favourite: props.post.favourite + 1,
			},
		};
		const docRef = doc(firestore, "blog", props.id as string);
		setDoc(docRef, newBlogData);
		setIsFavorite(!isFavorite);
	};
	return (
		<div
			className="flex justify-center border my-6 cursor-pointer"
			onClick={toBlogHandler}
		>
			<div className="flex w-[58%]">
				<img
					src={props.post.imageSource}
					alt=""
					className="flex-1"
				/>
			</div>
			<div className="flex-1 p-6 ">
				<div className="flex justify-between flex-1">
					<div>
						<p>{props.post.time}</p>
						<p>{props.post.date}</p>
					</div>
					<div>
						<BiDotsVerticalRounded size={32} />
					</div>
				</div>
				<div className="mt-6 flex-1 border-b flex flex-col h-[75%]">
					<p className="text-[#116dff]">{props.post.desc.join(", ")}</p>
					<p className="font-bold text-[#116dff] uppercase text-2xl my-4">{props.post.title}</p>
					<p className="text-[12px]"> {limitedChar(props.post.content, 125)}</p>
				</div>
				<div className="border-t flex flex-1 justify-between self-end items-center h-[12%]">
					<div className="flex justify-between w-2/5">
						<p className="mr-1">{props.post.viewer} views</p>
						<p>{props.post.favourite} favourites</p>
					</div>
					<div onClick={favoriteHandler}>
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
