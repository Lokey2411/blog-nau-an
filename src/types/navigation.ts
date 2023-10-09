export interface NavigationType {
	label: string;
	navigateTo: string;
}

export interface HeaderPartProps extends NavigationType {
	active?: boolean;
}
