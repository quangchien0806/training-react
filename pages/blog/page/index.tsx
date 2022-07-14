import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Title from "../../../Components/Title";
import BlogList from "../../blogList";
import Nav from "../../nav/nav";

// interface Title {
//   rendered: string;
// }

// interface Acf {
//   avtq: string;
// }
// interface Post {
//   id: number;
//   acf: Acf;
//   title: Title;
//   slug: string;
// }

// interface Data {
//   id: number;
//   slug: string;
//   name: string;
// }
interface Props {
  // posts: Post[];
  // datas: Data[];
  posts: any[];
  datas: any[];
}

export default function index({ posts, datas }: Props) {
  console.log(posts);
  const router = useRouter();
  return (
    <div className="max-w-[1230px] mx-auto">
      <Title></Title>
      <Nav datas={datas} />
      <BlogList posts={posts} />
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=12&page=1"
  );
  const res = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/categories?lang=vi"
  );
  const data = await response.json();
  const post = await res.json();

  return {
    props: {
      posts: data,
      datas: post,
    },
  };
}
