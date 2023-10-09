import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";

const ContactInfo = () => (
	<div className="flex w-full justify-between mt-2 mb-16">
		<BiLogoFacebook size={24} />
		<BiLogoPinterestAlt size={24} />
		<AiFillYoutube size={24} />
		<AiOutlineInstagram size={24} />
	</div>
);
export default ContactInfo;
