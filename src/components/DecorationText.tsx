type TextStyledProps = {
	text: string;
	color: string;
	gap?: number;
};

export default function DecorationText({ text, color, gap }: TextStyledProps) {
	return (
		<div className="flex justify-center w-full items-center">
			<div
				className={`flex-1 h-[1px]`}
				style={{ backgroundColor: color }}
			></div>
			<div
				className={`uppercase text-2xl`}
				style={{
					color,
					marginInline: gap ? gap * 4 : 0,
				}}
			>
				{text}
			</div>
			<div
				className={`flex-1 h-[1px]`}
				style={{ backgroundColor: color }}
			></div>
		</div>
	);
}
