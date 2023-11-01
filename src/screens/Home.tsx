import HeaderNavigation from "../components/Header/HeaderNavigation";
import Slogan from "../components/Slogan";
import { AiTwotoneStar } from "react-icons/ai";
import { colors } from "../styles/colors";
import DecorationText from "../components/DecorationText";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import UnderlineText from "../components/UnderlineText";
import HBlog from "../components/blog/HBlog";
import { blogs, createBlog } from "../data/blog";
import { useEffect, useState } from "react";
import { BlogProps } from "../types/blog";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

export default function Home() {
  const [blogData, setBlogData] = useState<BlogProps[]>([]);
  // const isFocused = useIsFocused();
  const fetchBlogs = async () => {
    const blogPromises = blogs.map((item) => {
      const docRef = doc(firestore, "blog", item.id as string);
      return getDoc(docRef);
    });

    const blogDocs = await Promise.all(blogPromises);
    const newBlogData = blogDocs.map((doc) => doc.data() as BlogProps);
    setBlogData(newBlogData);
  };
  useEffect(() => {
    createBlog();
    fetchBlogs();
  }, []);
  return (
    <div className="bg-gray-100">
      <HeaderNavigation active="Trang chủ" />
      <Slogan />
      <div className="flex justify-center py-6 px-8 m-auto">
        <div className="w-[20%]">
          <UnderlineText>
            <i className="text-2xl">Xin chào!</i>
          </UnderlineText>
          <div className=" w-[100%]  border-b border-black">
            <p className=" pb-6 w-[70%]">
              Tôi là Nhật Minh, một người thích nấu những món ăn vừa dễ, vừa
              ngon. Blog này được tạo ra để chia sẻ những công thức đơn giản
              dành cho mọi người bất kể trình độ nấu ăn.
            </p>
          </div>
          <ContactInfo />
          <div className="flex justify-center">
            <AiTwotoneStar size={32} color={colors.secondary} />
            <AiTwotoneStar
              size={32}
              color={colors.secondary}
              className="mx-5"
            />
            <AiTwotoneStar size={32} color={colors.secondary} />
          </div>
          <div className="flex items-center flex-col justify-between ">
            <DecorationText text="GARAN APPROVE" color={colors.secondary} />
            <p className="uppercase text-5xl my-16">Những</p>
            <UnderlineText>
              <p className="text-4xl my-14 text-center">Công thức nổi tiếng</p>
            </UnderlineText>
            <DecorationText text="garan" color={colors.secondary} gap={4} />
          </div>
        </div>
        <div className="flex flex-col w-[40%]">
          {blogData.map((blog) => (
            <HBlog {...blog} key={blog.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
