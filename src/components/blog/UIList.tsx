import { UIBlogProps } from "../../types/blog";

const UIList = (props: UIBlogProps) => {
	return (
		<div>
			<b>{props.title}</b>
			<ul>
				{props.otherTextes?.map((text) => (
					<p key={text}>{text}</p>
				))}
				{props.data.map((item, index) => (
					<li key={`${index}`}>- {item}</li>
				))}
			</ul>
			{props.imageAdditional && (
				<img
					src={props.imageAdditional}
					alt="Hình ảnh được thêm"
					className="w-full my-7"
				/>
			)}
		</div>
	);
};

export default UIList;
