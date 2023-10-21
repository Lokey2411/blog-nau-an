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
					<p className="text-2xl">Get in touch</p>
				</UnderlineText>
				<div className="text-gray-600">I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</div>
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
					<button className="flex-1 bg-gray-300 py-2 my-2">Submit</button>
					<center className="flex-1 py-2">Thanks for submitting!</center>
				</div>
			</div>
			<Footer />
		</div>
	);
}
