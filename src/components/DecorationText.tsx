type TextStyledProps = {
	text: string;
	color: string;
};

export default function DecorationText({ text, color }: TextStyledProps) {
	return (
		<div className="flex justify-center w-full items-center">
			<div className={`flex-1 bg-[${color}] h-[1px]`}></div>
			<div className={`uppercase text-2xl text-[${color}]`}>{text}</div>
			<div className={`flex-1 bg-[${color}] h-[1px]`}></div>
		</div>
	);
}
