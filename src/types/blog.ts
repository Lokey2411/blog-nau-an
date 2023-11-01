export interface PostType {
  imageSource: string;
  desc: string[];
  poster: string;
  date: string;
  time: string;
  title: string;
  content: string;
  viewer: number;
  favourite: number;
}

export interface BlogProps {
  id: string | number;
  avatarSource: string;
  post: PostType;
  prepare: string[];
  otherPrepare?: string[];
  preCook: string[];
  preCookImageSource: string;
  cookSteps: {
    title?: string;
    steps: string[];
    additionalImageSource?: string;
  }[];
}

export interface UIBlogProps {
  title: string;
  data: string[];
  otherTextes?: string[];
  imageAdditional?: string;
}
