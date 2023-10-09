export interface BlogProps {
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
}
