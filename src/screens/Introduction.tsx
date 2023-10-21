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
				<div className="flex-1">
					<img
						src="./blog-image.jpg"
						alt="blog"
						className=" flex-1 "
					/>
				</div>
				<div className="flex-1 flex flex-col justify-between ml-6 h-fit">
					<UnderlineText>
						<p className="text-2xl">About me</p>
					</UnderlineText>
					<p className="my-16">I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
					<p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
