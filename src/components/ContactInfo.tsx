import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const ContactInfo = () => (
  <div className="flex w-full justify-between mt-2 mb-16">
    <a href="https://www.facebook.com/profile.php?id=100009617582381">
      <BiLogoFacebook size={24} />
    </a>

    <a href="https://www.youtube.com/channel/UCUQFtbK1Lg9A8dEJmDsud8Q">
      <AiFillYoutube size={24} />
    </a>
    <a href="https://www.instagram.com/nhatmin2504/">
      <AiOutlineInstagram size={24} />
    </a>
  </div>
);
export default ContactInfo;
