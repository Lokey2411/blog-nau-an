import HeaderNavigation from "../components/Header/HeaderNavigation";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { colors } from "../styles/colors";
import { BiDotsVerticalRounded } from "react-icons/bi";

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
				<div className="flex justify-center border">
					<div>
						<img
							src="https://cdn.tuoitre.vn/thumb_w/640/2021/7/10/screen-shot-2021-07-10-at-114922-1625892571909294221772.png"
							alt=""
							className="flex-1"
						/>
					</div>
					<div className="flex-1 p-6 ">
						<div className="flex justify-between flex-1">
							<div>
								<p>nhatminh 88888888</p>
								<p>Apr 16</p>
							</div>
							<div>
								<BiDotsVerticalRounded size={32} />
							</div>
						</div>
						<div className="mt-6 flex-1 border-b flex flex-col h-[75%]">
							<p className="text-[#116dff]">Mỳ</p>
							<p className="font-bold text-[#116dff] uppercase text-2xl my-4">Mỳ ý spaghetty sốt cà chua</p>
							<p className="text-[12px]"> Mì Ý Spaghetti chắc không có gì xa lạ với chúng ta. Đây là món ăn thường được coi là đặc trưng tiêu biểu cho nền văn hóa ẩm ...</p>
						</div>
						<div className="border-t flex flex-1 justify-between self-end items-center h-[12%]">
							<div className="flex justify-between w-1/3">
								<p>2 views</p>
								<p>0 comments</p>
							</div>
							<div>
								<AiOutlineHeart
									color={colors.secondary}
									size={24}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
