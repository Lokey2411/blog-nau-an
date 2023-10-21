import { doc, setDoc } from "firebase/firestore";
import { BlogProps } from "../types/blog";
import { firestore } from "../firebase";

export const blogs: BlogProps[] = [
	{
		avatarSource: "./avatar.jpg",
		post: {
			imageSource: "https://cdn.tuoitre.vn/thumb_w/640/2021/7/10/screen-shot-2021-07-10-at-114922-1625892571909294221772.png",
			favourite: 0,
			viewer: 0,
			content: "Mì Ý Spaghetti chắc không có gì xa lạ với chúng ta.  Đây là món ăn thường được coi là đặc trưng tiêu biểu cho nền văn hóa ẩm thực Ý. Món ăn nổi tiếng này được dùng kèm với hỗn hợp sốt cà chua và thịt bò bằm nhưng ngoài ra cũng có thể kết hợp ngon không kém với những loại thịt khác nhau. Sau đây, mình sẽ chia sẻ công thức của riêng mình cho món ăn kinh điển này.",
			title: "Mì ý spaghetti sốt cà chua",
			poster: "nhatminh 88888888",
			date: "Apr 16",
			time: "3 min",
			desc: ["Mỳ", "Châu Âu"],
		},
		id: "post0",
		prepare: ["hehehe", "hehehe"],
		preCook: ["panda", "Gấu trúc"],
		preCookImageSource: "https://c.wallhere.com/photos/7c/35/panda_trees_claws_forest-2036007.jpg!d",
		cookSteps: [
			{ title: "hehe", steps: ["go", "jo"], additionalImageSource: "https://c.wallhere.com/photos/7c/35/panda_trees_claws_forest-2036007.jpg!d" },
			{ title: "hehe", steps: ["go", "jo"], additionalImageSource: "https://c.wallhere.com/photos/7c/35/panda_trees_claws_forest-2036007.jpg!d" },
		],
	},
	{
		avatarSource: "./avatar.jpg",
		post: {
			imageSource: "https://cdn.tuoitre.vn/thumb_w/640/2021/7/10/screen-shot-2021-07-10-at-114922-1625892571909294221772.png",
			favourite: 0,
			viewer: 0,
			content: "Mì Ý Spaghetti chắc không có gì xa lạ với chúng ta.  Đây là món ăn thường được coi là đặc trưng tiêu biểu cho nền văn hóa ẩm thực Ý. Món ăn nổi tiếng này được dùng kèm với hỗn hợp sốt cà chua và thịt bò bằm nhưng ngoài ra cũng có thể kết hợp ngon không kém với những loại thịt khác nhau. Sau đây, mình sẽ chia sẻ công thức của riêng mình cho món ăn kinh điển này.",
			title: "Mì ý spaghetti sốt cà chua",
			poster: "nhatminh 88888888",
			date: "Apr 16",
			time: "3 min",
			desc: ["Mỳ", "Indomie"],
		},
		id: "post1",
		prepare: ["hehehe", "hehehe"],
		preCook: ["panda", "Gấu trúc"],
		preCookImageSource: "https://c.wallhere.com/photos/7c/35/panda_trees_claws_forest-2036007.jpg!d",
		cookSteps: [
			{ title: "hehe", steps: ["go", "jo"], additionalImageSource: "https://c.wallhere.com/photos/7c/35/panda_trees_claws_forest-2036007.jpg!d" },
			{ title: "hehe", steps: ["go", "jo"], additionalImageSource: "https://c.wallhere.com/photos/7c/35/panda_trees_claws_forest-2036007.jpg!d" },
		],
	},
];

export const createBlog = () => {
	blogs.map(async (item) => {
		const docRef = doc(firestore, "blog", item.id as string);
		await setDoc(docRef, item);
	});
};
