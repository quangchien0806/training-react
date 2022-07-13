import React from "react";
import Image from "next/image";
import Searchblog from "../public/searchblog.png";
import Mail from "../public/mail.svg";
function FromShear() {
  return (
    <div>
      <div className="mb-10 flex justify-between gap-5">
        <form className="flex items-center  flex-[0_0_70%]">
          <input
            className="px-[15px] py-[20px] border border-r-0 rounded-xl rounded-r-none w-full focus:outline-none"
            placeholder="Tìm kiếm bài viết..."
            type="text"
          ></input>
          <div className="p-[10px] border border-l-0 rounded-lg rounded-l-none">
            <button className="bg-blue-600 py-[10px] px-[30px] rounded-xl">
              <p className="flex items-center">
                <Image
                  src={Searchblog}
                  alt="search"
                  width={37.5}
                  height={37.5}
                ></Image>
              </p>
            </button>
          </div>
        </form>
        <form className="flex items-center">
          <input
            className="px-[15px] py-[20px] border border-r-0 r;ounded-xl rounded-r-none w-full focus:outline-none"
            placeholder="Đăng ký nhận tin"
            type="text"
          ></input>
          <div className="p-[10px] border border-l-0 rounded-lg rounded-l-none">
            <button className="bg-blue-600 py-[10px] px-[30px] rounded-xl">
              <Image src={Mail} alt="mail" width={40} height={40}></Image>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FromShear;
