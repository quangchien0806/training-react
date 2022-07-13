import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Title from "../../../Components/Title";
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
