import { doc, setDoc } from "firebase/firestore";
import { BlogProps } from "../types/blog";
import { firestore } from "../firebase";

export const blogs: BlogProps[] = [
  {
    avatarSource:
      "https://lh3.googleusercontent.com/a/ACg8ocIF9NA5n0Ildl0k2jBT3FDjdf16yfm-HT2exJ6UQJkq5Wc=s360-c-no",
    post: {
      imageSource:
        "https://cdn.tgdd.vn/Files/2022/03/07/1418852/tong-hop-13-cach-lam-mi-xao-ngon-don-gian-ai-cung-lam-duoc-202203071113179118.jpg",
      favourite: 64,
      viewer: 127,
      content:
        "Mì xào là một món ăn phổ biến trong ẩm thực Việt Nam, được chế biến từ nhiều loại mì khác nhau, phổ biến nhất là mì trứng, mì gạo và mì tôm. Món ăn này có thể được xào với nhiều loại nguyên liệu khác nhau, từ thịt, cá, hải sản đến rau củ.",
      title: "MÌ XÀO VIỆT NAM",
      poster: "nhatminh250406",
      date: "May 4",
      time: "15 min",
      desc: ["Mỳ", "Đơn giản"],
    },
    id: "post0",
    prepare: [
      "200g mì trứng",
      "200g thịt bò",
      "1 củ hành tây",
      "1 củ cà rốt",
      "100g nấm hương",
      "2 quả trứng",
      "Gia vị: muối, tiêu, hạt nêm, dầu ăn, nước mắm, đường",
    ],
    preCook: [
      "Thịt bò rửa sạch, thái miếng mỏng vừa ăn. Ướp thịt với 1 muỗng hạt nêm, 1/2 muỗng cà phê tiêu, 1 muỗng dầu hàu trong 15 phút.",
      "Hành tây bóc vỏ, thái múi cau. Cà rốt rửa sạch, thái sợi. Nấm hương ngâm nở, thái sợi. Giá đỗ rửa sạch.",
      "Trứng đập ra bát, đánh tan.",
    ],
    preCookImageSource:
      "https://cdn.tgdd.vn/2021/03/content/sdfghj-800x450.jpg",
    cookSteps: [
      {
        title: "Nấu mì",
        steps: [
          "Cho mì vào nồi nước sôi, luộc chín theo hướng dẫn trên bao bì. Vớt mì ra, để ráo nước.",
          "Luộc trong 1p-2p để Mì giữ độ dai",
        ],
        additionalImageSource:
          "https://image.phunuonline.com.vn/fckeditor/upload/2021/20210704/images/trung-mi-qua-nuoc-soi-cach-_811625416781.jpg",
      },
      {
        title: "Xào Mì",
        steps: [
          "Phi thơm hành khô với dầu ăn. Cho thịt bò vào xào chín.",
          "Cho hành tây, cà rốt, nấm hương vào xào chín.",
          "Cho giá đỗ vào xào qua.",
          "Cho trứng vào xào chín.",
          "Nêm nếm gia vị cho vừa ăn.",
          "Cho mì vào xào chung, đảo đều cho mì thấm đều gia vị.",
        ],
        additionalImageSource:
          "https://i.ytimg.com/vi/OYJx-5f0JEk/maxresdefault.jpg",
      },
      {
        title: "Trưng bày",
        steps: [
          "Múc mì xào ra đĩa, trang trí với hành lá và hạt tiêu. Dùng nóng với tương ớt hoặc xì dầu.",
          "Hãy sáng tạo lên. Thay thế các loại nguyên liệu theo sở thích của mình. Ví dụ, bạn có thể cho thêm tôm, cua, mực, hoặc các loại rau củ khác như su su, bắp cải, dưa chuột,...",
        ],
        additionalImageSource:
          "https://helenrecipes.com/wp-content/uploads/2021/10/Screenshot-2021-10-06-101702-1200x675.png",
      },
      {
        steps: [
          "Mì xào thịt bò có màu sắc bắt mắt, hương vị đậm đà, thơm ngon. Món ăn này có thể ăn nóng hoặc nguội đều rất ngon.",
        ],
      },
    ],
  },
  {
    avatarSource:
      "https://lh3.googleusercontent.com/a/ACg8ocIF9NA5n0Ildl0k2jBT3FDjdf16yfm-HT2exJ6UQJkq5Wc=s360-c-no",
    post: {
      imageSource:
        "https://static.wixstatic.com/media/8b0b8d_f968985776e54ae98bc26b4428e3f04d~mv2.png",
      favourite: 43,
      viewer: 184,
      content:
        "Mì Ý Spaghetti chắc không có gì xa lạ với chúng ta.  Đây là món ăn thường được coi là đặc trưng tiêu biểu cho nền văn hóa ẩm thực Ý. Món ăn nổi tiếng này được dùng kèm với hỗn hợp sốt cà chua và thịt bò bằm nhưng ngoài ra cũng có thể kết hợp ngon không kém với những loại thịt khác nhau. Sau đây, mình sẽ chia sẻ công thức của riêng mình cho món ăn kinh điển này.",
      title: "Mì Ý Spaghetti Sốt Cà Chua",
      poster: "nhatminh250406",
      date: "Apr 15",
      time: "30 min",
      desc: ["Mỳ", "Châu Âu", "Đơn giản"],
    },
    id: "post1",
    prepare: [
      "250g Mì ý (~ nửa hộp mỳ Ý)",
      "2 Củ cà chua",
      "2 Thìa sốt cà chua Bolognese của Barilla (Có thể bỏ qua nếu có máy xay)",
      "200g Thịt bò / lợn (xày hoặc thái mỏng)",
      "3-4 Nhánh tỏi",
      "2-3 Củ hành tím",
      "8g Bơ",
      "Dầu ăn (ưu tiên dầu ô liu)",
      "Muối, tiêu",
      "1,5g Bột tỏi",
      "1g Bột hành",
      "0.2g Bột ớt",
      "Hành lá",
      "20g Phô mai (Ưu tiên loại cheddar/ mozzarella)",
    ],
    preCook: [
      "Rửa sạch và bóc vỏ tỏi và hành tím, sau đó đem xắt nhỏ",
      "Rửa sạch cà chua, cắt bỏ phần cuống và đem thái nhỏ thành 8 phần để riêng",
      "Rửa sạch và cắt nhỏ hành lá ",
      "Bóc lát hoặc bào sẵn phô mai",
      "Mướp thịt với 1 thìa muối và 1/3 thìa tiêu và trộn đều",
    ],
    preCookImageSource:
      "https://static.wixstatic.com/media/8b0b8d_61a5d12d8da64ec8a49751dbc0fa0b2b~mv2.png",
    cookSteps: [
      {
        title: "Nấu thịt",
        steps: [
          "Cho 2 muỗng dầu vào sao cho tráng 2/3 mặt chảo và để lửa to để làm nóng. ",
          "Sau 2 phút khi dầu nóng, cho thịt vào xào:",
          "Nếu là bò thái mỏng: đảo cho miếng không bị dính tảng rồi để nguyên 30 giây, sau đó đảo mặt còn lại nấu thêm 30 giây",
          "Nếu là bò xay: Dầm thịt rời ra để không bị dính tảng và đảo đều tay trong 1 phút.",
          "Giảm lửa xuống vừa. Thêm hành và tỏi băm và đảo cùng thịt để phi thơm.",
          "Thêm các một nửa số gia vị phụ (0.75g bột tỏi, 0.5g bột hành, 0.2g bột ớt)",
          "Nấu đến khi thịt chín (~4 phút) sau đó giảm lửa xuống thấp",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_44a2967f630c439197740b30e6dee15b~mv2.jpg",
      },
      {
        title: "Luộc mì",
        steps: [
          "Đổ nước đầy 1/2 nồi to và đun sôi",
          "Khi sôi, cho mì vào và đảo mì đến khi toàn bộ chìm dưới nồi",
          "Cho 1,5 thìa muối và đậy vung nồi",
          "Luộc mì theo chỉ dẫn của gói (10~12 phút). Có thể dùng đũa gắp 1 sợi mì lên nếm thử để kiểm tra độ chín và điều chỉnh độ mặn theo ý muốn.",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_4705c75aae114c83995a55fc9b754a04~mv2.png",
      },
      {
        title: "Làm sốt",
        steps: [
          "Trong lúc đang luộc mì, cho cà chua vào máy xay nhuyễn ra rồi đổ vào chảo. (Nếu không có máy xay, cho chà chua đã cắt vào chảo và dùng thìa to (hoặc búa đập thịt, hoặc bất cứ đồ dùng nào có đáy to) nghiền nhuyễn cà chua. )",
          "Cho 2 thìa sốt cà chua Bolognese để tạo độ ngon và đặc cho sốt cũng tiết kiệm chi phí (Có thể bỏ qua nếu có máy xay)",
          "Thêm 3 thìa nước luộc mì và tăng lửa lên trung bình, đổ nốt số gia vị phụ cùng với tiêu và 1/2 thìa muối kết hợp với đảo đều sốt và thịt để không cháy.",
          "Sau 2 phút, thêm bơ và tiếp tục đảo đều trong 6~8 phút hoặc đến khi sốt sánh và sệt lại. ",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_9021e50509cd48658c5c731db6986659~mv2.png",
      },
      {
        title: "Trộn mì",
        steps: [
          "Cho mì chín vào chảo cùng với 1~2 thìa nước luộc rồi trộn đều mì",
          "Nếm thử và điều chỉnh gia vị cho phù hợp khẩu vị",
          "Cho phô mai vào và nấu tiếp đến khi chảy",
          "Cho ra đĩa và trang trí với hành lá cắt nhỏ",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_f21d633816124f059b30af48b5f2326d~mv2.jpg",
      },
      {
        steps: [
          "Vậy là bạn đã thành công nấu được món mì Ý Spaghetti, một món đơn giản nhưng lại vô cùng ngon miệng và bổ dưỡng. Mỳ Ý là một nguồn thực phẩm giàu carbohydrate và chất xơ cùng với các vitamin và khoáng chất quan trọng khác. Nó không có chất béo bão hòa hoặc natri, để bắt đầu. Nó cũng có một lượng đáng kể protein, canxi, phốt pho và magiê. Chắc chắn, đây là một món ăn kinh điển mà không chỉ giàu giá trị dinh dưỡng mà còn kiến gia đình và người thân ngưỡng mộ. Nếu bạn thấy công thức này hay, hãy cân nhắc yêu thích nó và theo dõi page hoặc bình luận để chia sẻ ý kiến của mình. ",
        ],
      },
    ],
  },
  {
    avatarSource:
      "https://lh3.googleusercontent.com/a/ACg8ocIF9NA5n0Ildl0k2jBT3FDjdf16yfm-HT2exJ6UQJkq5Wc=s360-c-no",
    post: {
      imageSource:
        "https://cdn.tgdd.vn/Files/2022/03/07/1418852/tong-hop-13-cach-lam-mi-xao-ngon-don-gian-ai-cung-lam-duoc-202203071113179118.jpg",
      favourite: 64,
      viewer: 127,
      content:
        "Mì xào là một món ăn phổ biến trong ẩm thực Việt Nam, được chế biến từ nhiều loại mì khác nhau, phổ biến nhất là mì trứng, mì gạo và mì tôm. Món ăn này có thể được xào với nhiều loại nguyên liệu khác nhau, từ thịt, cá, hải sản đến rau củ.",
      title: "MÌ XÀO VIỆT NAM",
      poster: "nhatminh250406",
      date: "May 4",
      time: "15 min",
      desc: ["Mỳ", "Đơn giản"],
    },
    id: "post2",
    prepare: [
      "200g mì trứng",
      "200g thịt bò",
      "1 củ hành tây",
      "1 củ cà rốt",
      "100g nấm hương",
      "2 quả trứng",
      "Gia vị: muối, tiêu, hạt nêm, dầu ăn, nước mắm, đường",
    ],
    preCook: [
      "Thịt bò rửa sạch, thái miếng mỏng vừa ăn. Ướp thịt với 1 muỗng hạt nêm, 1/2 muỗng cà phê tiêu, 1 muỗng dầu hàu trong 15 phút.",
      "Hành tây bóc vỏ, thái múi cau. Cà rốt rửa sạch, thái sợi. Nấm hương ngâm nở, thái sợi. Giá đỗ rửa sạch.",
      "Trứng đập ra bát, đánh tan.",
    ],
    preCookImageSource:
      "https://cdn.tgdd.vn/2021/03/content/sdfghj-800x450.jpg",
    cookSteps: [
      {
        title: "Nấu mì",
        steps: [
          "Cho mì vào nồi nước sôi, luộc chín theo hướng dẫn trên bao bì. Vớt mì ra, để ráo nước.",
          "Luộc trong 1p-2p để Mì giữ độ dai",
        ],
        additionalImageSource:
          "https://image.phunuonline.com.vn/fckeditor/upload/2021/20210704/images/trung-mi-qua-nuoc-soi-cach-_811625416781.jpg",
      },
      {
        title: "Xào Mì",
        steps: [
          "Phi thơm hành khô với dầu ăn. Cho thịt bò vào xào chín.",
          "Cho hành tây, cà rốt, nấm hương vào xào chín.",
          "Cho giá đỗ vào xào qua.",
          "Cho trứng vào xào chín.",
          "Nêm nếm gia vị cho vừa ăn.",
          "Cho mì vào xào chung, đảo đều cho mì thấm đều gia vị.",
        ],
        additionalImageSource:
          "https://i.ytimg.com/vi/OYJx-5f0JEk/maxresdefault.jpg",
      },
      {
        title: "Trưng bày",
        steps: [
          "Múc mì xào ra đĩa, trang trí với hành lá và hạt tiêu. Dùng nóng với tương ớt hoặc xì dầu.",
          "Hãy sáng tạo lên. Thay thế các loại nguyên liệu theo sở thích của mình. Ví dụ, bạn có thể cho thêm tôm, cua, mực, hoặc các loại rau củ khác như su su, bắp cải, dưa chuột,...",
        ],
        additionalImageSource:
          "https://helenrecipes.com/wp-content/uploads/2021/10/Screenshot-2021-10-06-101702-1200x675.png",
      },
      {
        steps: [
          "Mì xào thịt bò có màu sắc bắt mắt, hương vị đậm đà, thơm ngon. Món ăn này có thể ăn nóng hoặc nguội đều rất ngon.",
        ],
      },
    ],
  },
  {
    avatarSource:
      "https://lh3.googleusercontent.com/a/ACg8ocIF9NA5n0Ildl0k2jBT3FDjdf16yfm-HT2exJ6UQJkq5Wc=s360-c-no",
    post: {
      imageSource:
        "https://cdn.tgdd.vn/Files/2022/03/07/1418852/tong-hop-13-cach-lam-mi-xao-ngon-don-gian-ai-cung-lam-duoc-202203071113179118.jpg",
      favourite: 64,
      viewer: 127,
      content:
        "Mì xào là một món ăn phổ biến trong ẩm thực Việt Nam, được chế biến từ nhiều loại mì khác nhau, phổ biến nhất là mì trứng, mì gạo và mì tôm. Món ăn này có thể được xào với nhiều loại nguyên liệu khác nhau, từ thịt, cá, hải sản đến rau củ.",
      title: "MÌ XÀO VIỆT NAM",
      poster: "nhatminh250406",
      date: "May 4",
      time: "15 min",
      desc: ["Mỳ", "Đơn giản"],
    },
    id: "post3",
    prepare: [
      "200g mì trứng",
      "200g thịt bò",
      "1 củ hành tây",
      "1 củ cà rốt",
      "100g nấm hương",
      "2 quả trứng",
      "Gia vị: muối, tiêu, hạt nêm, dầu ăn, nước mắm, đường",
    ],
    preCook: [
      "Thịt bò rửa sạch, thái miếng mỏng vừa ăn. Ướp thịt với 1 muỗng hạt nêm, 1/2 muỗng cà phê tiêu, 1 muỗng dầu hàu trong 15 phút.",
      "Hành tây bóc vỏ, thái múi cau. Cà rốt rửa sạch, thái sợi. Nấm hương ngâm nở, thái sợi. Giá đỗ rửa sạch.",
      "Trứng đập ra bát, đánh tan.",
    ],
    preCookImageSource:
      "https://cdn.tgdd.vn/2021/03/content/sdfghj-800x450.jpg",
    cookSteps: [
      {
        title: "Nấu mì",
        steps: [
          "Cho mì vào nồi nước sôi, luộc chín theo hướng dẫn trên bao bì. Vớt mì ra, để ráo nước.",
          "Luộc trong 1p-2p để Mì giữ độ dai",
        ],
        additionalImageSource:
          "https://image.phunuonline.com.vn/fckeditor/upload/2021/20210704/images/trung-mi-qua-nuoc-soi-cach-_811625416781.jpg",
      },
      {
        title: "Xào Mì",
        steps: [
          "Phi thơm hành khô với dầu ăn. Cho thịt bò vào xào chín.",
          "Cho hành tây, cà rốt, nấm hương vào xào chín.",
          "Cho giá đỗ vào xào qua.",
          "Cho trứng vào xào chín.",
          "Nêm nếm gia vị cho vừa ăn.",
          "Cho mì vào xào chung, đảo đều cho mì thấm đều gia vị.",
        ],
        additionalImageSource:
          "https://i.ytimg.com/vi/OYJx-5f0JEk/maxresdefault.jpg",
      },
      {
        title: "Trưng bày",
        steps: [
          "Múc mì xào ra đĩa, trang trí với hành lá và hạt tiêu. Dùng nóng với tương ớt hoặc xì dầu.",
          "Hãy sáng tạo lên. Thay thế các loại nguyên liệu theo sở thích của mình. Ví dụ, bạn có thể cho thêm tôm, cua, mực, hoặc các loại rau củ khác như su su, bắp cải, dưa chuột,...",
        ],
        additionalImageSource:
          "https://helenrecipes.com/wp-content/uploads/2021/10/Screenshot-2021-10-06-101702-1200x675.png",
      },
      {
        steps: [
          "Mì xào thịt bò có màu sắc bắt mắt, hương vị đậm đà, thơm ngon. Món ăn này có thể ăn nóng hoặc nguội đều rất ngon.",
        ],
      },
    ],
  },
];

export const createBlog = () => {
  blogs.map(async (item) => {
    const docRef = doc(firestore, "blog", item.id as string);
    await setDoc(docRef, item);
  });
};
