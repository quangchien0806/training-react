import React from "react";
import { IPost } from "../collections";

interface Props {
  slug: IPost[];
}

export default function ShowDetail({ slug }: Props) {
  console.log(slug);
  return (
    <div>
      {slug.map((data) => {
        return (
          <div
            key={data.id}
            dangerouslySetInnerHTML={{ __html: data.content.rendered }}
          />
        );
      })}
    </div>
  );
}
