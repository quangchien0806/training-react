import React from "react";
import { IPost } from "../collections";

interface Props {
  slug: IPost[];
}

export default function ShowDetail({ slug }: Props) {
  console.log(slug);
  return (
    <div className="max-w-[1230px] mx-auto mt-40">
      <div className="flex items-center">
        {slug.map((data) => {
          return (
            <div className="ml-[20%] w-[62%]" key={data.id}>
              <h2 className="text-6xl font-bold mb-[15px]">
                {data.title.rendered}
              </h2>
              <span className="opacity-90 ">Business</span>
              <div
                className="mt-[20px]"
                dangerouslySetInnerHTML={{ __html: data.content.rendered }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
