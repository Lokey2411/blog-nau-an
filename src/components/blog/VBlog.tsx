import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { colors } from "../../styles/colors";
import { BlogProps } from "../../types/blog";

export default function VBlog(props: BlogProps) {
	return (
		<div className="flex justify-center border my-6">
			<div>
				<img
					src={props.blogImageSource}
					alt=""
					className="flex-1"
				/>
			</div>
			<div className="flex-1 p-6 ">
				<div className="flex justify-between flex-1">
					<div>
						<p>{props.poster}</p>
						<p>{props.postDate}</p>
					</div>
					<div>
						<BiDotsVerticalRounded size={32} />
					</div>
				</div>
				<div className="mt-6 flex-1 border-b flex flex-col h-[75%]">
					<p className="text-[#116dff]">{props.postDesc}</p>
					<p className="font-bold text-[#116dff] uppercase text-2xl my-4">{props.postTitle}</p>
					<p className="text-[12px]"> {props.postContent}</p>
				</div>
				<div className="border-t flex flex-1 justify-between self-end items-center h-[12%]">
					<div className="flex justify-between w-1/3">
						<p>{props.viewer} views</p>
						<p>{props.commenter} comments</p>
					</div>
					<div>
						{props.isFavorite ? (
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
