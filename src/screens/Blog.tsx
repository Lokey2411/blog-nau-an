import HeaderNavigation from "../components/Header/HeaderNavigation";
import Slogan from "../components/Slogan";
// import { colors } from "../styles/colors";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { blogs } from "../data/blog";
import { FaCrown } from "react-icons/fa";
import { styles } from "../styles/styles";
import UIList from "../components/blog/UIList";

const Blog = () => {
  //   const textColor = colors.primary;
  const { state } = useLocation();
  const blog = blogs.find((item) => item.id === state.id);
  return (
    <div className="bg-gray-100">
      <HeaderNavigation />
      <Slogan />
      <div className="m-auto w-3/5 py-6">
        <div className="border p-10">
          <div className="flex justify-between w-full">
            <div className="flex items-center w-3/4">
              <img
                src={blog?.avatarSource}
                alt=""
                className={`mr-3 ${styles.avatar}`}
              />
              <div className="flex justify-between  ">
                <p>{blog?.post.poster}</p>
                <FaCrown className="ml-1" />
                <div className="mr-2">{blog?.post.date}</div>
                <div>{blog?.post.time}</div>
              </div>
            </div>
          </div>
          <p className="font-bold text-[#116dff] uppercase text-2xl my-4">
            {blog?.post.title}
          </p>
          <img src={blog?.post.imageSource} alt="" className="w-full mb-7" />
          <b>Giới thiệu</b>
          <p>- {blog?.post.content}</p>
          <UIList
            title="Nguyên liệu chính"
            data={blog?.prepare as string[]}
            otherTextes={["Suất ăn cho 1-2 người"]}
          />
          {blog?.otherPrepare && (
            <UIList title="(Nguyên liệu khác)" data={blog?.otherPrepare} />
          )}
          <UIList
            title="Sơ chế nguyên liệu"
            data={blog?.preCook as string[]}
            imageAdditional={blog?.preCookImageSource}
          />
          <b>Chế biến</b>
          {blog?.cookSteps.map((step, index) => (
            <UIList
              data={step.steps}
              title={
                step.title ? ` *Bước ${index + 1}:  ${step.title}` : "Thành quả"
              }
              imageAdditional={
                step.additionalImageSource ? step.additionalImageSource : ""
              }
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
