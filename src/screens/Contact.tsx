import HeaderNavigation from "../components/Header/HeaderNavigation";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import UnderlineText from "../components/UnderlineText";

export default function Contact() {
  return (
    <div className="bg-gray-100">
      <HeaderNavigation active="Liên lạc" />
      <Slogan />
      <div className="flex flex-col flex-1 justify-between w-1/3 m-auto py-20">
        <UnderlineText>
          <p className="text-2xl">Hãy liên lạc với tôi</p>
        </UnderlineText>
        <div className="text-gray-600">
          Nếu bạn có câu chuyện hay công thức gì muốn chia sẻ với tôi, hãy nhắn
          lại cho tôi. Ngoài ra, bạn cũng có thể liên lạc với tôi qua các mạ xã
          hội nữa.
        </div>
        <div className="w-full flex flex-col bg-white p-2 my-8">
          <div className="flex">
            <input
              type="text"
              className="flex-1 border-b border-b-black mr-6 p-2"
              placeholder="Name"
            />

            <input
              type="text"
              className="flex-1 border-b border-b-black p-2 w-full"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="flex-1 border-b border-b-black mr-6 p-2"
          />
          <textarea
            className="flex-1 border-b border-b-black p-2 pb-28 placeholder:text-[#116dff]"
            placeholder="Type your message here"
          ></textarea>
          <button
            className="flex-1 bg-gray-300 py-2 my-2"
            onBlur={() => alert("Thư đã được gửi")}
          >
            Gửi
          </button>
          <center className="flex-1 py-2">Cảm ơn vì đã gửi!</center>
        </div>
      </div>
      <Footer />
    </div>
  );
}
