import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import DownHeader from "../public/Downheader.svg";
import Link from "next/link";


export default function Header() {
  return (
    <>
      <section id="header">
        <div className="max-w-[1230px] my-0 mx-auto min-h-[90px] flex items-center justify-between">
          <p className="w-[150px]">
            <Image alt="a" src={logo} />
          </p>
          <div className="flex items-center">
            <ul className="flex mr-8 cursor-pointer">
              <li className="ml-[41px] text-xl flex items-center">
                <a href="#">Ngành</a> <Image alt="a" src={DownHeader} />
              </li>
              <li className="ml-[41px] text-xl flex items-center">
                <a href="#">Dịch vụ</a>
                <Image alt="a" src={DownHeader} />
              </li>
              <li className="ml-[41px] text-xl">
                <a href="#">Dự án</a>
              </li>
              <li className="ml-[41px] text-xl">
                <a href="#">Về chúng tôi</a>
              </li>
              <li className="text-blue-600 ml-[41px] text-xl">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="ml-[41px] text-xl">
                <a href="#">Tuyển dụng</a>
              </li>
            </ul>
            <button className="py-2 px-6 text-white bg-blue-700 rounded-md border border-blue-700 hover:text-blue-700 hover:bg-white">
              <a href="#">Liên hệ</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
