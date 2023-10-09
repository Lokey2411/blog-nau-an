import React from "react";
import HeaderNavigation from "../components/Header/HeaderNavigation";
import Slogan from "../components/Slogan";
import UnderlineText from "../components/UnderlineText";
import Footer from "../components/Footer";

export default function Summary() {
	return (
		<div className="bg-gray-100">
			<HeaderNavigation active="Tổng hợp" />
			<Slogan />
			<div className="flex flex-col w-2/3 m-auto h-screen">
				<UnderlineText>
					<h1 className="text-3xl">Share your Creations</h1>
				</UnderlineText>
				<p className="w-3/5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, illo tenetur explicabo itaque dolor voluptates suscipit corrupti tempora eaque provident amet sapiente quae, iste illum deleniti ratione, tempore nam fugit.</p>
				<div className="mt-12 text-4xl font-semibold text-center">There's a technical problem on our end. Please wait a few minutes and try again</div>
			</div>
			<Footer />
		</div>
	);
}
