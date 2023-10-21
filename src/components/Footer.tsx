import ContactInfo from "./ContactInfo";

export default function Footer() {
	return (
		<div className=" border-t  ">
			<div className="flex justify-between w-1/2 m-auto mt-6">
				<p className="text-gray-500 pl-8">2023</p>
				<div className="w-1/5">
					<ContactInfo />
				</div>
			</div>
		</div>
	);
}
