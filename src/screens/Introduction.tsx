import HeaderNavigation from "../components/Header/HeaderNavigation";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import UnderlineText from "../components/UnderlineText";

export default function Introduction() {
	return (
		<div className="bg-gray-100">
			<HeaderNavigation active="Giới thiệu" />
			<Slogan />
			<div className="w-3/4 flex justify-center m-auto my-10">
				<div className="w-[50%]">
					<img
						src="./introPic.jpg"
						alt="blog"
						className="w-[100%]"
					/>
				</div>
				<div className="flex-1 flex flex-col justify-between ml-6 h-auto">
					<UnderlineText>
						<p className="text-2xl">Giới thiệu</p>
					</UnderlineText>
					<p>Tôi là Nguyễn Vũ Nhật Minh, một học sinh cấp 3 tại trường THPT Chuyên Ngoại Ngữ, Hà Nội. Tôi là một người có đam mê sâu sắc về nấu ăn và ẩm thực. Cái tên "Garan Food Blog" chỉ đơn giản là tên con chó nhà tôi (Gà rán) chứ không phải blog chỉ chia sẻ cách nấu gà rán đâu nhá!</p>
					<p>Blog cá nhân này được tôi tạo ra với mục đích để chia sẻ các công thức nấu ăn ngon và đơn giản. Các món ăn vô cùng đặc sắc từ các món nước ngoài đến các món Việt Nam truyền thống. Qua đây, tôi hi vọng truyền cho mọi người cảm hứng để vào nhà bếp và trải nghiệm văn hóa của các quốc gia hoặc nếm lại mùi vị đặc trưng của quê hương.</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
