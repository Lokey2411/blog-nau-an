import { doc, setDoc } from "firebase/firestore";
import { BlogProps } from "../types/blog";
import { firestore } from "../firebase";

export const blogs: BlogProps[] = [
  // Phở
  {
    avatarSource:
      "https://lh3.googleusercontent.com/a/ACg8ocIF9NA5n0Ildl0k2jBT3FDjdf16yfm-HT2exJ6UQJkq5Wc=s360-c-no",
    post: {
      imageSource:
        "https://static.wixstatic.com/media/8b0b8d_64d59578cd334ae09e70ea6034ae463a~mv2.jpg",
      favourite: 35,
      viewer: 131,
      content:
        "Phở là một món ăn truyền thống của Việt Nam, được coi là món ăn quốc hồn quốc túy của đất nước. Cách làm phở rất đơn giản, nhưng để có một tô phở ngon đòi hỏi người nấu phải có kinh nghiệm và sự khéo léo. Hôm nay tôi sẽ chia sẽ cho các bạn công thức làm món phở miền Bắc truyền thống của gia đình tôi. Bạn có thể tham khảo cách nấu qua video youtube của tôi: https://youtu.be/AVMG28xx42s?si=QhHo-QyCLGkubk8J",
      title: "PHỞ",
      poster: "nhatminh250406",
      date: "Sep 2",
      time: "4 hour",
      desc: ["Việt", "Lành mạnh"],
    },
    id: "post8",
    prepare: [
      "300g thịt bò",
      "400g bánh phở tươi (Mua ở chợ)",
      "Xương bò ống",
      "Hành lá",
      "Vài quả ớt tươi",
      "Chanh",
      "Gia vị nấu nước dùng:",
      "Hạt nêm",
      "Nước mắm",
      "3 Củ hành tím",
      "Hành hoa",
      "2 Củ Gừng",
      "Hồi quế",
      "Thảo quả",
      "Hạt Tiêu",
      "Hạt Ngò",
      "Đinh hương",
    ],
    preCook: [
      "Rửa sạch thịt",
      "Rửa sạch các loại rau củ",
      "Cắt chanh",
      "Sắp xếp gọn các nguyên liệu",
    ],
    preCookImageSource:
      "https://static.wixstatic.com/media/8b0b8d_4bcffd1df3914c9b860798cc8e263540~mv2.jpg",
    cookSteps: [
      {
        title: "Thái Thịt",
        steps: ["Thái thịt thật mỏng"],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_287f9ade5eb44f22bf5217c99024680f~mv2.png",
      },
      {
        title: "Cắt rau củ",
        steps: [
          "Bóc vỏ rồi bổ đôi hành tím và gừng",
          "Cắt nhỏ hành hoa và hành lá",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_024e5468d1d84c21bd0d70e2c036a38a~mv2.jpg",
      },
      {
        title: "Nướng gia vị",
        steps: [
          "Cho hồi quế, thảo quả, hạt tiêu, hạt ngò, đinh hương vào chảo và nướng trên lửa nóng",
          "Tắt bếp khi mùi hương bốc lên ",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_b553aa9f5a4f47329e12d24370387c20~mv2.jpg",
      },
      {
        title: "Nướng các rau củ",
        steps: [
          "Nướng hành tím và gừng trên chảo hoặc ngay trên lửa",
          "Dừng khi chúng xuất hiện các phần cháy",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_dc558ee3f7a145c2bf22d9ea7bfed681~mv2.png",
      },
      {
        title: "Làm nước Phở",
        steps: [
          "Đổ nước vào 3/5 nồi to ~ 2 lít",
          "Bỏ sương ống vào và đun sôi để ninh sương",
          "Đổ hành tím, gừng và các gia vị đã nướng vào",
          "Sau mỗi 3 phút, vớt các váng bọt từ sương nổi lên trên nồi",
          "Khi nước đã trong, thêm 3 thìa hạt nêm, 3 thìa nước mắm, và 1 thìa đường (có thểm thêm 1 thìa bột ngọt)",
          "Khuấy đều rồi hầm trong tối thiểu 2-4 tiếng",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_aade43de36ea46bc9a74e242e0f84646~mv2.jpg",
      },
      {
        title: "Trụng bánh phở",
        steps: [
          "Cho phở vào trụng trong nước dùng",
          "Sau ~5 giây, nhấc phở ra và xóc ráo nước",
          "Đổ phở ra bát tô",
          "(Nếu thích ăn bò chính có thể trụng cả thịt bò ở bước này",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_fe16e085431b4ed2a8871fdf3f95ec9a~mv2.jpg",
      },
      {
        title: "Trưng bày",
        steps: ["Bỏ thịt bò sống vào bát", "Trang trí với hành hoa và hành lá"],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_3bef321299ff44d68cb188f84e5eade0~mv2.jpg",
      },
      {
        steps: ["Đổ nước Phở sôi vào bát để nấu thịt bò"],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_1c88bdea98c04a6088b8ae76b6a38e2a~mv2.jpg",
      },
      {
        title: "end",
        steps: [
          "Vậy là ta đã hoàn thành món Phở truyền thống của miền Bắc",
          "Tùy theo khẩu vị mỗi người có thểm cho thêm tiêu, chanh; ớt tươi hoặc ớt tương; hành, tỏi dấm;...",
          "Phở có thể được ăn vào bất cứ thời điểm nào trong ngày, nhưng phổ biến nhất là bữa sáng. (Khi nấu nên cân nhắc thời gian làm nước rất dài để có một bữa ăn phù hợp).",
          "Phở là món ăn giàu dinh dưỡng, có tác dụng bồi bổ cơ thể. Nó đã trở thành món ăn mang tính biểu tượng của Việt Nam và luôn được nhiều người Việt Nam yêu thích và tự hào giới thiệu với bạn bè quốc tế.",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_64d59578cd334ae09e70ea6034ae463a~mv2.jpg",
      },
    ],
  },

  //Gà rán
  {
    avatarSource:
      "https://lh3.googleusercontent.com/a/ACg8ocIF9NA5n0Ildl0k2jBT3FDjdf16yfm-HT2exJ6UQJkq5Wc=s360-c-no",
    post: {
      imageSource:
        "https://static.wixstatic.com/media/8b0b8d_85c3588d882249eca586066c177d72e5~mv2.jpg",
      favourite: 22,
      viewer: 88,
      content:
        "Tôi sẽ không thể nào có một website tên là Garan Food Blog nếu không chia sẻ công thức nấu gà rán đúng không. Vậy hôm nay ta sẽ làm món ăn phổ biến và được yêu chuộng trên toàn thế giới này. Gà rán có nguồn gốc từ Scotland, được cho là ra đời vào thế kỷ 17. Món ăn này ban đầu được chế biến từ gà nguyên con, nhưng sau đó được thay thế bằng các miếng gà nhỏ hơn để dễ dàng chế biến và thưởng thức. Nó mang hương vị thơm ngon, giòn rụm, kết hợp với các loại nước sốt đậm đà tạo nên một món ăn hấp dẫn, khó cưỡng. ",
      title: "GÀ RÁN",
      poster: "nhatminh250406",
      date: "Aug 19",
      time: "30 min",
      desc: ["Tây", "Phức tạp"],
    },
    id: "post7",
    prepare: [
      "400g thịt gà đùi/ức",
      "~400ml Sữa tươi không đường",
      "Tương ớt",
      "~200g Bột mì",
      "~75g Tinh bột ngô",
      "Hành lá",
      "Gia vị: muối, tiêu, bột hành, bột tỏi, bột ớt paprika, bột ớt cayenne",
      "Sốt gà: 1 thìa tương cà, mayonnaise, mù tạt vàng",
      "(Tùy chọn: các loại rau ăn kèm như dưa chuột, rau xà lách,...)",
    ],
    preCook: [
      "Thái thịt gà to khoảng bàn tay",
      "Ướp gà QUA ĐÊM trong:",
      "~400ml Sữa",
      "2 thìa tương ớt",
      "2 thìa muối",
      "1/2 thìa bột hành, bột tỏi, bột ớt paprika, bột ớt cayenne",
      "(Cắt lát dưa chuột)",
    ],
    preCookImageSource:
      "https://static.wixstatic.com/media/8b0b8d_9b68f165ceb8474480e295a92f739b3a~mv2.jpg",
    cookSteps: [
      {
        title: "Làm bột tẩm gà",
        steps: [
          "Trộn đều:",
          "~200g Bột mì",
          "~75g Tinh bột ngô",
          "2 thìa muối",
          "1/2 thìa tiêu, bột hành, bột tỏi, bột ớt paprika, bột ớt cayenne",
          "1/4 thìa bột nở (baking powder)",
          "2 thìa nước ướp gà",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_d95c53f352b94ef0980d77c89bb5f3b8~mv2.jpg",
      },
      {
        title: "Tẩm bột",
        steps: [
          "Cho gà vào bột rồi ấn mạnh để bột dính lên",
          "Tẩm đều, không để thừa phần nào chưa bị phủ bởi bột",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_5de0f05b6ee6464ab0a3950c253c9493~mv2.jpg",
      },
      {
        steps: [
          "Nếu sau khi tẩm xong còn thừa bột, có thể nhúng lại vào nước ướp rồi thẩm thêm lần nữa cho gà giòn hơn",
          "Bỏ thịt gà ra đĩa",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_b3a93f9acfc641978ea07b8eecb7e294~mv2.jpg",
      },
      {
        title: "Rán gà",
        steps: [
          "Đổ dầu cho đến 3 cm hoặc đủ để chìm miếng gà",
          "Để lửa vừa-cao sao cho dầu nóng ~ 163°C",
          "Bỏ 1-2 miếng gà vào và rán",
          "Lật sau mỗi 1p để gà chín đều và không cháy",
          "Sau 8-12 phút tùy vào độ dày hoặc khi miếng gà đạt 165°C",
          "Để gà ra đĩa với giấy thấm dầu hoặc giá để dầu chảy ra, giữ cho gà gión hơn sau khi đã nguội",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_1b36bc37d6c04607b5e9ab2df53fe3ce~mv2.jpg",
      },
      {
        title: "Làm nước sốt",
        steps: [
          "Trong một bát con, trộn đều:",
          "2 thìa tương cà",
          "2 thìa mayonnaise",
          "1 thìa mù tạt vàng",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_4f409181125640a381eca140114575b6~mv2.jpg",
      },
      {
        title: "end",
        steps: [
          "Trang trí đĩa gà và với rau củ (dưa chuột) và một chút hành lá cắt nhỏ và thế là ta đã được một suất ăn như KFC",
          "Bạn có thể ăn không, nhưng mình khuyên bạn ăn cùng với cơm trắng",
          "Gà rán là món ăn ngon miệng, dễ ăn, và phù hợp với mọi khẩu vị. Đây là món ăn được nhiều người lựa chọn để thưởng thức trong những dịp đặc biệt hoặc đơn giản là những bữa ăn hàng ngày.",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_85c3588d882249eca586066c177d72e5~mv2.jpg",
      },
    ],
  },

  //Indomie
  {
    avatarSource:
      "https://lh3.googleusercontent.com/a/ACg8ocIF9NA5n0Ildl0k2jBT3FDjdf16yfm-HT2exJ6UQJkq5Wc=s360-c-no",
    post: {
      imageSource:
        "https://static.wixstatic.com/media/8b0b8d_ea5969e4d2c444648096eeaf13da00d2~mv2.jpg",
      favourite: 25,
      viewer: 98,
      content:
        "Mì trộn Indomie là một món ăn nổi tiếng của Indonesia. Món ăn này được chế biến từ mì gói Indomie và có hương vị đậm đà, thơm ngon, kết hợp với các gia vị tươi ngon tạo nên một món ăn hấp dẫn, đơn giản, và phù hợp với mọi khẩu vị.",
      title: "MÌ TRỘN INDOMIE",
      poster: "nhatminh250406",
      date: "July 29",
      time: "13 min",
      desc: ["Mỳ", "Đơn giản"],
    },
    id: "post6",
    prepare: [
      "300g thịt bò ",
      "2 gói mì Indomie (Vị tùy chọn)",
      "Hành lá",
      "2 nhánh tỏi",
      "Gia vị: các gói gia vị mì, bột hành, bột tỏi, bột ớt, tiêu, xì dầu, dầu hàu",
      "(Tùy chọn: các loại rau củ như cà rốt cắt nhỏ, ngô, đậu Hà Lan,...)",
    ],
    preCook: [
      "Thái thịt mỏng",
      "Ướp thịt với:",
      "1/2 thìa bột tỏi, hành, ớt, tiêu",
      "1 thìa dầu hàu và xì dầu",
      "Bóc vỏ và băm nhỏ tỏi",
      "Rửa sạch các loại rau củ",
      "Cắt hành lá",
    ],
    preCookImageSource:
      "https://static.wixstatic.com/media/8b0b8d_287a9c0f6c424a6cbf705982e291d0e9~mv2.jpg",
    cookSteps: [
      {
        title: "Xào thịt",
        steps: [
          "Đổ chút dầu ăn vào và phi thơm tỏi",
          "Xào thịt trong lửa vừa-cao trong 7 phút",
          "Đảo thường xuyên để thịt chín đều",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_4de1e65af372494ab40b160039144e0b~mv2.jpg",
      },
      {
        title: "Luộc mì",
        steps: [
          "Cho 500 ml nước vào và đun sôi trong nồi",
          "Khi sôi, bỏ mì vào và luộc trong 1p30",
          "(Có thể cùng bước này bỏ các loại rau củ vào để nấu cùng mì",
          "Xong, chắt nước",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_56333556a3784254b315ce6a94efa531~mv2.jpg",
      },
      {
        title: "Trộn mì",
        steps: [
          "Đổ hết gói gia vị Indomie vào (Có thể chỉ đổ 1/2 gói muối thứ 2 nếu không muốn mì quá mặn)",
          "1/4 thìa bột tỏi và bột hành",
          "1/2 thìa xì dầu",
          "Trộn đều mì lên",
          "Bỏ thịt bò vào và trộn đều cùng",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_62aaa50701524298bd1d84e7dd1182ca~mv2.jpg",
      },

      {
        title: "end",
        steps: [
          "Đổ mì ra bát tô và trang trí với chút hành lá",
          "Mì trộn Indomie là một món ăn đơn giản, dễ làm nhưng lại vô cùng thơm ngon. Đây là món ăn phù hợp cho những bữa ăn nhanh gọn cho những ngày bận rộn hoặc những bữa ăn nhẹ.",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_ea5969e4d2c444648096eeaf13da00d2~mv2.jpg",
      },
    ],
  },

  //Bít tết
  {
    avatarSource:
      "https://lh3.googleusercontent.com/a/ACg8ocIF9NA5n0Ildl0k2jBT3FDjdf16yfm-HT2exJ6UQJkq5Wc=s360-c-no",
    post: {
      imageSource:
        "https://static.wixstatic.com/media/8b0b8d_ae3fe32fa75740dfa091b9b5b978b9f8~mv2.jpg",
      favourite: 31,
      viewer: 106,
      content:
        "Bít tết là một món ăn truyền thống của ẩm thực phương Tây, được làm từ thịt bò cắt lát dày, thường là thăn ngoại, thăn vai hoặc thăn lưng. Bít tết có thể được chế biến theo nhiều cách khác nhau, nhưng phổ biến nhất là áp chảo, nướng hoặc chiên.",
      title: "BÍT TẾT",
      poster: "nhatminh250406",
      date: "July 14",
      time: "15 min",
      desc: ["Lành mạnh", "Tây"],
    },
    id: "post4",
    prepare: [
      "400g Thịt bò bít tết (Thường là các loại thăn vì chúng mềm và hợp làm bít tết nhất) ",
      "Vài nhánh tỏi",
      "Rau củ tùy thích: cà chua bi, dưa chuột, xà lách, măng xào, ...",
      "30g bơ",
      "Gia vị: muối, tiêu, bột tỏi",
      "(Tùy chọn: Sốt bơ cao bồi",
      "20g bơ",
      "3 nhánh tỏi",
      "1 củ hành tím",
      "Mù tạt",
      "Mùi tây",
      "Chút chanh",
      "Muối, tiêu, bột tỏi, hành, ớt)",
    ],
    preCook: [
      "Thấm khô thịt bò",
      "Cho gia vị, xoa cho đều lên mọi mặt của thịt rồi ướp trong khoảng 15 phút",
      "Tỏi bóc vỏ, băm nhuyễn hành tím",
      "Rửa sạch các loại rau củ",
    ],
    preCookImageSource:
      "https://perfectforhome.com/wp-content/uploads/2021/08/opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__04__Anova-Steak-Guide-Sous-Vide-Photos04-seasoning-4c1d343ca18e4630b65339948744cb3b.jpg",
    cookSteps: [
      {
        title: "Nấu thịt",
        steps: [
          "Bắc chảo lên bếp, rồi để ở nhiệt độ cao nhất có thể trong 2 phút",
          "Cho dầu ăn rồi để dầu nóng trong thêm 2 phút.",
          "Cho thịt bò vào chảo, áp chảo ở lửa lớn trong 2 phút mỗi mặt.",
          "Đảo 2-4 lần để làm vỏ thịt giòn",
          "Giảm lửa xuống vừa",
        ],
        additionalImageSource:
          "https://res.cloudinary.com/hksqkdlah/image/upload/SFS_pan_seared_strip_steaks-34_1_zil1gw.jpg",
      },
      {
        title: "Phết bơ và chế biến rau củ",
        steps: [
          "Bỏ bơ vào chảo rồi phi thơm với tỏi",
          "Cho các loại rau củ hoặc rau mùi vào chảo",
          "Dùng thìa phết bơ lên miếng thịt cho chín đều và đậm vị hơn",
          "Sau 2-4 phút (Tùy theo sở thích độ tái của ban), tắt lửa và bỏ thịt ra đĩa đợi trong 15 phút",
          "Mẹo nhỏ: Nếu bạn không có nhiệt kế thịt, bạn có thể kiểm tra độ chín của bít tết bằng cách dùng ngón tay ấn vào thịt. Nếu thịt mềm và đàn hồi, đó là bít tết medium rare. Nếu thịt cứng hơn một chút, đó là bít tết medium. Nếu thịt cứng và không đàn hồi, đó là bít tết well done.",
        ],
        additionalImageSource:
          "https://jesspryles.com/wp-content/uploads/2020/08/untitled-1-scaled.jpg",
      },
      {
        title: "Nấu sốt bơ cao bồi",
        steps: [
          "Để lửa vừa rồi cho bơ vào chảo phi cùng tỏi và hành",
          "Tăng lửa chút và khuấy sốt đều cùng mù tạt, các gia vị, và rau củ",
          "Để sôi, khuấy đều rồi đổ ra bát",
        ],
        additionalImageSource:
          "https://www.seannaskitchen.com/wp-content/uploads/2023/05/Cowboy-Butter-Sauce.jpg",
      },
      {
        title: "end",
        steps: [
          "Để thịt ra đĩa và trưng bày thật đẹp với các món phụ và nước sốt",
          "Bít tết thường được ăn kèm với các loại rau củ như khoai tây chiên, khoai tay nghiền, salad, rau củ nướng, và cả cơm trắng",
          "Đây là một món cực kì sang trảnh nhưng lại không quá phức tạp và vô cùng bổ dưỡng, ngon miệng. Nó là bữa ăn phù hợp cho những buổi liên hoan hoặc triêu đãi người thân và gia đình.",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_ae3fe32fa75740dfa091b9b5b978b9f8~mv2.jpg",
      },
    ],
  },

  //Cơm rang
  {
    avatarSource:
      "https://lh3.googleusercontent.com/a/ACg8ocIF9NA5n0Ildl0k2jBT3FDjdf16yfm-HT2exJ6UQJkq5Wc=s360-c-no",
    post: {
      imageSource:
        "https://static.wixstatic.com/media/8b0b8d_e9bb368301ae4ff8819b33fec4a309a3~mv2.jpg",
      favourite: 37,
      viewer: 113,
      content:
        "Cơm rang dưa bò là một món ăn quen thuộc trong ẩm thực Việt Nam và nhiều nước châu Á. Đây là một món ăn được nhiều người yêu thích vì sự kết hợp hoàn hảo của các hương vị: sự mềm và đậm đà của thịt bò, vị chua ngọt của dưa cải và vị giòn của cơm rang trứng. Bình thường, cơm rang dưa bò hay được làm trong nhà hàng vì độ khó và yêu cầu có thiết bị nấu riêng, nhưng bạn hoàn toàn có thể thử sức chế biến đặc sản Việt này mà thỏa thích sáng tạo để phù hợp với sở thích của mình",
      title: "CƠM RANG DƯA BÒ",
      poster: "nhatminh250406",
      date: "June 30",
      time: "25 min",
      desc: ["Cơm", "Việt", "Phức tạp"],
    },
    id: "post5",
    prepare: [
      "300g thịt bò ",
      "400g cơm nguội (để qua đêm trong tủ lạnh tối thiểu 1 ngày)",
      "2 quả trứng",
      "200g dưa cải chua",
      "4 nhánh tỏi",
      "1 củ hành tím",
      "Hành lá",
      "100g dưa chuột muối",
      "Gia vị: hạt nêm, tiêu đen, bột tỏi, bột hành, xì dầu, dầu hàu, đường",
      "(Tùy chọn: các loại rau củ khác như cà rốt, ngô, đậu Hà Lan,...)",
    ],
    preCook: [
      "Thái thịt mỏng",
      "Tỏi, hành bóc vỏ, băm nhỏ",
      "Rửa sạch các loại rau củ",
      "Cắt lát nhỏ dưa chuột muối",
    ],
    preCookImageSource:
      "https://vhkt.net/upload/images/mon-an-ngon/com-rang-dua-bo-1.jpg",
    cookSteps: [
      {
        title: "Ướp thịt",
        steps: [
          "Cho thịt vào bát cùng với gia vị ướp:",
          "1 thìa hạt nêm",
          "1 thìa xì dầu",
          "1 thìa dàu hàu",
          "1/3 thìa đường",
          "1/3 thìa bột tỏi",
          "1/3 thìa bột hành",
          "1/3 thìa tiêu đen",
          "Ướp khoảng 15 phút",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_f1c6bda4b1a34527a3cbe4307fdcc3d3~mv2.jpg",
      },
      {
        title: "Trộn cơm",
        steps: [
          "Bỏ cơm nguội ra 1 bát tô trộn đều với:",
          "2 quả trứng",
          "1 thìa dầu hàu",
          "1/2 thìa hạt nêm",
          "1 thìa xì dầu",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_a485cb69f20e4038add5c46888548aa1~mv2.jpg",
      },
      {
        title: "Rang cơm",
        steps: [
          "Để lửa to, đổ dầu vào chảo (chảo wok hoặc loại chảo to là hợp lí nhất) cho nóng khoảng 2 phút",
          "Đổ cơm đã trộn vào và đảo đều",
          "Khi cơm đã vàng óng, thêm các loại rau củ tùy thích",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_b8ab4ec6ea27474dbbc5b202db66c529~mv2.jpg",
      },
      {
        steps: [
          "Rang thêm khoảng 5-10 phút cho cơm giòn, cứng",
          "Xong, đổ cơm ra đĩa",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_971f402957154f42ad1c7a6ea45aa3d6~mv2.jpg",
      },

      {
        title: "Xào thịt và dưa",
        steps: [
          "Bật lửa to và phi tỏi và hành đến khi thơm",
          "Bỏ thịt bò vào, đảo nhiều và liên tục để thịt chín đều trong 3-4 phút",
          "Giảm lửa xuống vừa rồi đổ dưa chua vào, tiếp tục đảo để trộn với thịt trong 2-3 phút",
          "Nếm và tủy chỉnh gia vị cho phù hợp rồi đổ ra đĩa to",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_481b9252528149358201e6491d1a1acf~mv2.jpg",
      },
      {
        title: "end",
        steps: [
          "Vậy là ta đã hoàn thành món cơm rang dưa bò truyền thống của Việt Nam",
          "Để thưởng thức, gắp thịt và dưa từ đĩa cho vào cơm rang",
          "Có thể thêm dì dầu và ăn kèm cùng dưa chuột muối và nhiều loại rau củ khác",
          "Cơm rang dưa bò là một món phức tạp nhưng rất ngon miệng và bổ dưỡng",
          "Dù không phải món mà ta có thể nấu hằng ngày, nhưng nó là bữa ăn mà sẽ chắc chắn mang lại cho bạn lời khen từ người thân và gia đình.",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_e9bb368301ae4ff8819b33fec4a309a3~mv2.jpg",
      },
    ],
  },

  //Gà mật ong
  {
    avatarSource:
      "https://lh3.googleusercontent.com/a/ACg8ocIF9NA5n0Ildl0k2jBT3FDjdf16yfm-HT2exJ6UQJkq5Wc=s360-c-no",
    post: {
      imageSource:
        "https://static.wixstatic.com/media/8b0b8d_19f377fe63ec4eacb08a77734c106f76~mv2.jpg",
      favourite: 26,
      viewer: 97,
      content:
        "Gà sốt mật ong bơ tỏi là một món ăn đơn giản nhưng lại vô cùng ngon miệng và bổ dưỡng. Thịt ức gà mềm ngọt, thấm đều gia vị tỏi và mật ong thơm lừng, ăn cùng cơm trắng rất hợp. Món ăn này cũng rất thích hợp cho những ngày bận rộn, chỉ cần vài bước đơn giản là bạn đã có ngay một món ăn ngon miệng và healthy cho cả gia đình.",
      title: "GÀ SỐT MẬT ONG BƠ TỎI",
      poster: "nhatminh250406",
      date: "June 6",
      time: "12 min",
      desc: ["Cơm", "Lành mạnh", "Đơn giản", "Tây"],
    },
    id: "post3",
    prepare: [
      "400g ức gà",
      "4 nhánh tỏi",
      "hành lá",
      "2 thìa mật ong",
      "20g bơ",
      "1 thìa xì dầu",
      "1/2 thìa giấm",
      "Gia vị: muối, tiêu, bột tỏi, bột hành, bột ớt paprika, bột ớt xay",
    ],
    preCook: [
      "Ức gà rửa sạch, thấm khô, thái miếng cho cùng độ dày khoảng 2-3 cm",
      "Ướp gà 30 phút bằng các gia vị",
      "Tỏi bóc vỏ, băm nhỏ.",
    ],
    preCookImageSource:
      "https://static.wixstatic.com/media/8b0b8d_625d9e767d9b4d059052039d92533d14~mv2.jpg",
    cookSteps: [
      {
        title: "Nấu gà",
        steps: [
          "Vậy là bạn đã thành công nấu được món mì Ý Spaghetti, một món đơn giản nhưng lại vô cùng ngon miệng và bổ dưỡng. Mỳ Ý là một nguồn thực phẩm giàu carbohydrate và chất xơ cùng với các vitamin và khoáng chất quan trọng khác. Nó không có chất béo bão hòa hoặc natri, để bắt đầu. Nó cũng có một lượng đáng kể protein, canxi, phốt pho và magiê. Chắc chắn, đây là một món ăn kinh điển mà không chỉ giàu giá trị dinh dưỡng mà còn kiến gia đình và người thân ngưỡng mộ. Nếu bạn thấy công thức này hay, hãy cân nhắc yêu thích nó và theo dõi page hoặc bình luận để chia sẻ ý kiến của mình. ",
          "Cho một ít dầu ăn vào chảo, đun nóng. Cho ức gà vào xào ở lửa lớn trong khoảng 4.",
          "Xào cho đến khi thịt gà đổi nâu thì giảm lửa nhỏ và tiếp tục xào thêm khoảng 6 phút cho thịt gà chín đều và mềm.",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_7a42659695034c739cad01d621eebec5~mv2.png",
      },
      {
        steps: ["Xong, bỏ gà ra đĩa để nguội"],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_06a912b59e8343578916a320b23474f9~mv2.jpg",
      },
      {
        title: "Phi tỏi",
        steps: ["Phi thơm tỏi với bơ với lửa vừa khoảng 3 phút"],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_34719ba2a3f3467796c35d1444cb4fcd~mv2.jpg",
      },
      {
        title: "Nấu sốt bơ tỏi mật ong",
        steps: [
          "Cho mật ong, xì dầu, giấm vào chảo",
          "Tăng lửa chút và khuấy sốt đều đến khi sôi rồi giảm lửa",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_c1affb3f748d4b5dbd88e5813b66eadc~mv2.jpg",
      },
      {
        title: "Trộn sốt với gà",
        steps: [
          "Bỏ lại ức gà vào sốt",
          "Đảo đều đến khi sốt được phủ hết các miếng gà",
          "trang trí với ít hành lá và thưởng thức",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_8ea16ff9ccba4cbd8a7dc34024227dfc~mv2.jpg",
      },
      {
        title: "end",
        steps: [
          "Ta được một món đơn giản, bổ dưỡng nhưng lại vô cùng thơm ngon và hấp dẫn. Món ăn này có vị ngọt thanh của mật ong, vị thơm của tỏi, vị đậm đà của thịt gà, và rất hợp khi ăn với cơm trắng",
        ],
        additionalImageSource:
          "https://static.wixstatic.com/media/8b0b8d_19f377fe63ec4eacb08a77734c106f76~mv2.jpg",
      },
    ],
  },

  //Mì xào
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
      desc: ["Mỳ", "Đơn giản", "Việt"],
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
        title: "end",
        steps: [
          "Mì xào thịt bò có màu sắc bắt mắt, hương vị đậm đà, thơm ngon. Món ăn này có thể ăn nóng hoặc nguội đều rất ngon.",
        ],
      },
    ],
  },

  //Mì Ý
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
      desc: ["Mỳ", "Châu Âu", "Phức tạp"],
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
        title: "end",
        steps: [
          "Vậy là bạn đã thành công nấu được món mì Ý Spaghetti, một món đơn giản nhưng lại vô cùng ngon miệng và bổ dưỡng. Mỳ Ý là một nguồn thực phẩm giàu carbohydrate và chất xơ cùng với các vitamin và khoáng chất quan trọng khác. Nó không có chất béo bão hòa hoặc natri, để bắt đầu. Nó cũng có một lượng đáng kể protein, canxi, phốt pho và magiê. Chắc chắn, đây là một món ăn kinh điển mà không chỉ giàu giá trị dinh dưỡng mà còn kiến gia đình và người thân ngưỡng mộ. Nếu bạn thấy công thức này hay, hãy cân nhắc yêu thích nó và theo dõi page hoặc bình luận để chia sẻ ý kiến của mình. ",
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
