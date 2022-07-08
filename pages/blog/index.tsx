import Link from "next/link";
import React from "react";
import Title from "../../Components/Title";

import blog from "./[blog]";

interface Title {
  rendered: string;
}

interface Acf {
  avtq: string;
}
interface Post {
  id: number;
  acf: Acf;
  title: Title;
  slug: string;
}

interface Data {
  id: number;
  slug: string;
  name: string;
}
interface Props {
  posts: Post[];
  datas: Data[];
}

export default function index({ datas, posts }: Props) {
  console.log(datas, posts);
  return (
    <div className="max-w-[1230px] mx-auto">
      <Title></Title>
      <div className="flex">
        {datas.map((data) => (
          <div key={data.id}>
            <Link href={`/blog/${data.slug}`}>
              <button className="p-3 ml-3">{data.name}</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg shadow-lg">
            <Link href={`/detail/${post.slug}`}>
              <div>
                <div className="w-auto h-[320px] block ">
                  <img
                    src={post.acf.avtq}
                    alt="img for blog"
                    className="w-full h-full object-cover rounded-t-lg"
                  ></img>
                </div>
                <h2 className="m-5 font-semibold text-lg line-clamp-1">
                  {post.title.rendered}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=10&page=1"
  );
  const res = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/categories"
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
