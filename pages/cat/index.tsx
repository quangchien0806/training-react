import { GetStaticPaths, GetStaticProps } from "next/types";
import React from "react";
import FromShear from "../../Components/FromShear";
import Blog from "../blogs";

import Nav from "../nav/nav";

interface Props {
  posts: any[];
  name: string;
  datas: any[];
}

export default function index({ posts, name, datas }: Props) {
  console.log(posts);
  return (
    <div className="main-container">
      <main>
        <section className="section page-hero">
          <div className="container-base">
            <div className="flex justify-between items-center">
              <div className="text-center lg:text-left lg:basis-1/2 px-3">
                <div>
                  <h2 className="section__heading">{name}</h2>
                </div>
              </div>
              <div>
                <div className="hidden lg:block h-[450px] w-[591px]"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-content">
          <div className="container-base">
            <div className="filter-blogs__pages">
              <FromShear />
              <Nav datas={datas} />
            </div>
            <Blog posts={posts} />
          </div>
        </section>
      </main>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const categories = await fetch(
    `https://api.gcosoftware.vn/wp-json/wp/v2/categories?lang=vi`
  );
  const response = await categories.json();
  const categoryId = response.find((item: any) => item.slug === params.slug);
  const posts = await fetch(
    `https://api.gcosoftware.vn/wp-json/wp/v2/posts?lang=vi&per_page=12&page=1&categories=${categoryId.id}`
  );

  return {
    props: {
      datas: response,
      posts,
      name: categoryId.name,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await fetch(
    "https://api.gcosoftware.vn/wp-json/wp/v2/categories?lang=vi"
  );
  const res = await categories.json();
  const paths = res.map((item: any) => {
    return {
      params: { slug: item.slug },
    };
  });

  return { paths, fallback: "blocking" };
};
