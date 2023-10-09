import HeaderNavigation from "../components/Header/HeaderNavigation";
import Slogan from "../components/Slogan";
import { AiOutlineEye, AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";
import { BsFillChatLeftFill } from "react-icons/bs";
import { colors } from "../styles/colors";
import DecorationText from "../components/DecorationText";
import { styles } from "../styles/styles";
import Statistic from "../components/Statistic";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import UnderlineText from "../components/UnderlineText";

export default function Home() {
	return (
		<div className="bg-gray-100">
			<HeaderNavigation active="Trang chủ" />
			<Slogan />
			<div className="flex justify-center py-6 px-8">
				<div className="w-[20%]">
					<UnderlineText>
						<i className="text-2xl">Xin chào!</i>
					</UnderlineText>
					<div className=" w-[100%]  border-b border-black">
						<p className=" pb-6 w-[70%]">Tôi là Nhật Minh, một người thích nấu những món ăn vừa dễ, vừa ngon. Blog này được tạo ra để chia sẻ những công thức đơn giản dành cho mọi người bất kể trình độ nấu ăn.</p>
					</div>
					<ContactInfo />
					<div className="flex justify-center">
						<AiTwotoneStar
							size={32}
							color={colors.secondary}
						/>
						<AiTwotoneStar
							size={32}
							color={colors.secondary}
							className="mx-5"
						/>
						<AiTwotoneStar
							size={32}
							color={colors.secondary}
						/>
					</div>
					<div className="flex items-center flex-col justify-between ">
						<DecorationText
							text="GARAN APPROVE"
							color={colors.secondary}
						/>
						<p className="uppercase text-5xl my-16">Những</p>
						<UnderlineText>
							<p className="text-4xl my-14 text-center">Công thức nổi tiếng</p>
						</UnderlineText>
						<DecorationText
							text="garan"
							color={colors.secondary}
						/>
					</div>
				</div>
				<div className="w-[40%] ml-6 border h-fit pb-4">
					<img
						src="https://cdn.tuoitre.vn/thumb_w/640/2021/7/10/screen-shot-2021-07-10-at-114922-1625892571909294221772.png"
						alt=""
						className="w-full mb-7"
					/>
					<div className="mx-6  ">
						<div className="border-b p-4">
							<div className="flex items-center">
								<img
									src="./avatar.jpg"
									alt=""
									className={`mr-3 ${styles.avatar}`}
								/>
								<div>
									<p>nhatminh 88888888</p>
									<ul className=" flex justify-between pr-6">
										<li>Apr 16</li>
										<li>3 min</li>
									</ul>
								</div>
								<FaCrown className="ml-1" />
							</div>
							<p className="uppercase text-3xl">mỳ ý spaghetti sốt cà chua</p>
							<p className="text-[12px]"> Mì Ý Spaghetti chắc không có gì xa lạ với chúng ta. Đây là món ăn thường được coi là đặc trưng tiêu biểu cho nền văn hóa ẩm ...</p>
						</div>
						<div className="flex justify-between mt-2">
							<div className="flex items-center">
								<Statistic
									icon={<AiOutlineEye />}
									number={2}
								/>
								<Statistic
									icon={<BsFillChatLeftFill />}
									number={0}
								/>
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
			<Footer />
		</div>
	);
}
