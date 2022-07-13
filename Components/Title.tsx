import React from "react";
import Animation from "../public/animation.svg";
import Image from "next/image";
import FromShear from "./FromShear";

export default function TitleBlog() {
  return (
    <main className="">
      <div className="flex items-center justify-between">
        <div className="flex flex-col flex-[0_0_50%]">
          <h1 className="text-6xl font-bold text-slate-800 mb-6">Blog</h1>
          <p className="text-lg">
            Chúng tôi muốn chia sẻ cái nhìn sâu sắc và kinh nghiệm của mình để
            giúp bạn tìm hiểu thêm về các chuyển đổi kỹ thuật số tuyệt vời. Để
            có thông tin, ý tưởng và thông điệp mạnh mẽ, hãy đọc các bài đăng
            trên blog của chúng tôi.
          </p>
        </div>

        <p>
          <Image
            src={Animation}
            alt="anition img"
            width={500}
            height={500}
          ></Image>
        </p>
      </div>
      <FromShear />
    </main>
  );
}
