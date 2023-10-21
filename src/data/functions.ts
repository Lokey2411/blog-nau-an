import { useEffect, useState } from "react";

export const limitedChar = (str: string, length: number) => `${str.length <= length ? str : str.substring(0, length)}...`;
export const useIsFocused = () => {
	const [isFocused, setIsFocused] = useState(document.hasFocus());

	useEffect(() => {
		const onFocus = () => setIsFocused(true);
		const onBlur = () => setIsFocused(false);

		window.addEventListener("focus", onFocus);
		window.addEventListener("blur", onBlur);

		return () => {
			window.removeEventListener("focus", onFocus);
			window.removeEventListener("blur", onBlur);
		};
	}, []);

	return isFocused;
};
