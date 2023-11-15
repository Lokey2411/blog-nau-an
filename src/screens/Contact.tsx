import HeaderNavigation from "../components/Header/HeaderNavigation";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import UnderlineText from "../components/UnderlineText";
import { useState } from "react";

export default function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const isSendValid = formState.name && formState.email && formState.subject && formState.message;
	const background = isSendValid ? "bg-[#4d8495]" : "bg-gray-300";
	const updateForm = (key: string, value: string) => {
		setFormState((prevState) => ({
			...prevState,
			[key]: value,
		}));
	};
	const clearForm = () => {
		if (isSendValid) {
			setFormState({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
			alert("Thư đã được gửi");
		}
	};
	return (
		<div className="bg-gray-100">
			<HeaderNavigation active="Liên lạc" />
			<Slogan />
			<div className="flex flex-col flex-1 justify-between w-1/3 m-auto py-20">
				<UnderlineText>
					<p className="text-2xl">Hãy liên lạc với tôi</p>
				</UnderlineText>
				<div className="text-gray-600">Nếu bạn có câu chuyện hay công thức gì muốn chia sẻ với tôi, hãy nhắn lại cho tôi. Ngoài ra, bạn cũng có thể liên lạc với tôi qua các mạ xã hội nữa.</div>
				<div className="w-full flex flex-col bg-white p-2 my-8">
					<div className="flex">
						<input
							type="text"
							className="flex-1 border-b border-b-black mr-6 p-2"
							placeholder="Name"
							value={formState.name}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								updateForm("name", event.target.value);
							}}
						/>

						<input
							type="text"
							className="flex-1 border-b border-b-black p-2 w-full"
							placeholder="Email"
							value={formState.email}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								updateForm("email", event.target.value);
							}}
						/>
					</div>
					<input
						type="text"
						placeholder="Subject"
						className="w-full border-b border-b-black mr-6 p-2"
						value={formState.subject}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							updateForm("subject", event.target.value);
						}}
					/>
					<textarea
						className="flex-1 border-b border-b-black p-2 pb-28 placeholder:text-[#116dff]"
						placeholder="Type your message here"
						value={formState.message}
						onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
							updateForm("message", event.target.value);
						}}
					></textarea>
					<button
						className={`flex-1 ${background}  py-2 my-2 text-white font-semibold`}
						onClick={clearForm}
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
