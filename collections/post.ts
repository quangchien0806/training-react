interface Rendered {
  rendered: string;
}

export interface IPost {
  id: number;
  slug: string;
  content: Rendered;
  title: Rendered;
}

export interface Post {
  post: IPost[];
}
