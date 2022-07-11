interface Rendered {
  rendered: string;
}

export interface IPost {
  id: number;
  slug: string;
  content: Rendered;
}

export interface Post {
  post: IPost[];
}
