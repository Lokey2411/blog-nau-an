import React from "react";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { colors } from "../../styles/colors";
import Statistic from "../Statistic";
import { BsFillChatLeftFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { styles } from "../../styles/styles";
import { BlogProps } from "../../types/blog";

export default function HBlog(props: BlogProps) {
	return (
		<div className="w-[100%] ml-6 border h-fit pb-4 my-6">
			<img
				src={props.blogImageSource}
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
							<p>{props.poster}</p>
							<ul className=" flex justify-between pr-6">
								<li>{props.postDate}</li>
								<li>{props.postTime}</li>
							</ul>
						</div>
						<FaCrown className="ml-1" />
					</div>
					<p className="uppercase text-3xl">{props.postTitle}</p>
					<p className="text-[12px]">{props.postContent}</p>
				</div>
				<div className="flex justify-between mt-2">
					<div className="flex items-center">
						<Statistic
							icon={<AiOutlineEye />}
							number={props.viewer}
						/>
						<Statistic
							icon={<BsFillChatLeftFill />}
							number={props.commenter}
						/>
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
