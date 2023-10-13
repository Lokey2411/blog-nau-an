export interface BlogProps {
	id: string | number;
	avatarSource: string;
	blogImageSource: string;
	postDesc?: string;
	poster: string;
	postDate?: string;
	postTime?: string;
	postTitle: string;
	postContent: string;
	viewer: number;
	commenter: number;
	isFavorite?: boolean;
	prepare: string[];
	otherPrepare?: string[];
	preCook: string[];
	preCookImageSource: string;
	cookSteps: { title: string; steps: string[]; additionalImageSource: string }[];
}

export interface UIBlogProps {
	title: string;
	data: string[];
	otherTextes?: string[];
	imageAdditional?: string;
}
