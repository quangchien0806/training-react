import React from "react";
import { GetStaticProps } from "next";

interface Post {
  id: number;
  slug: string;
}

interface Props {
  post: Post[];
}

export default function index({ post }: Props) {
  // console.log(post);

  return <div>index</div>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    `https://api.gcosoftware.vn/wp-json/wp/v2/posts?slug=${context.params?.slug}`
  );

  const post = await response.json();
  // console.log(post);
  return {
    props: {
      post,
    },
  };
};
