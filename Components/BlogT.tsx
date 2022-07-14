import Link from "next/link";
import React from "react";

export default function Main() {
  return (
    <div>
      <Link href="/blog/page">
        <button className="p-4 border border-blue-600  rounded-lg">Blog</button>
      </Link>
    </div>
  );
}
