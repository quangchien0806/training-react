import { GetServerSideProps, GetStaticProps } from "next/types";
import React from "react";
import { Post } from "../../collections";
import ShowDetail from "../../Components/ShowDetail";

interface Props {
  post: any;
}

export default function Slug({ post }: Props) {
  // console.log(post);
  return <ShowDetail slug={post} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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

// export const getSeStaticProps: GetStaticProps = async (context) => {
//   const response = await fetch(
//     `https://api.gcosoftware.vn/wp-json/wp/v2/posts?slug=${context.params?.slug}`
//   );

//   const post = await response.json();
//   console.log(post);
//   return {
//     props: {
//       post,
//     },
//   };
// };
