import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";
import React from "react";

interface Props {
  datas: any[];
}

const Nav = ({ datas }: Props) => {
  console.log(datas);
  const router = useRouter();
  return (
    <div className="category-nav">
      <ul className="flex">
        <li className="p-3 ml-3">
          <Link href={`/blog/page`}>
            <a className={` /blog/page` === router.pathname ? "active" : ""}>
              Tất cả
            </a>
          </Link>
        </li>
        {datas.map((item) => (
          <li className="p-3 ml-3" key={item.id}>
            <Link href={`/cat/${item.slug}`}>
              <a
                className={
                  `/cat/${item.slug}` === router.asPath ? "active" : ""
                }
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
