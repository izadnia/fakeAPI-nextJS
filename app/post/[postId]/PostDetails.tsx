"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};
interface postProps {
  post: {
    id: number;
    slug: string;
    url: string;
    title: string;
    content: string;
    image: string;
    thumbnail: string;
    status: string;
    category: string;
    publishedAt: string;
    updatedAt: string;
    userId: number;
  };
}
function PostDetails({ post }: postProps) {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
      <div className="justify-center overflow-hidden relative w-full">
          <Image
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-contain p-2"
            width="200"
            height="200"
          />
        </div>
        <Horizontal />
      </div>

      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{post.title}</h2>
        <Horizontal />
        <div className="text-justify ">Post numder : {post.id}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">{post.updatedAt}</span>
        </div>
        <Horizontal />
        <div>
          <span className="">{post.content}</span>
        </div>
        <Horizontal />
        <div>
          <span className="font-semibold">Category : {post.category}</span>
        </div>
        <Horizontal />
        <div>
          <span className="">Status : {post.status}</span>
        </div>
        <Horizontal />
      </div>
    </div>
  );
}

export default PostDetails;
