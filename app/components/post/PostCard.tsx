"use client";

import { truncateContent } from "@/utils/truncateContent";
import { truncateTitle } from "@/utils/truncateTitle";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { useRouter } from "next/navigation";

interface postProps {
  data: {
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
function PostCard({ data }: postProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/post/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-smp-2 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col item-center w-full gap-1 p-2 mb-2">
        <div className="justify-center overflow-hidden relative w-full">
          <Image
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-full object-contain p-2"
            width="200"
            height="200"
          />
        </div>
        <div className="font-semibold text-xl mt-2">
          {truncateTitle(data.title)}
        </div>
        <div className="text-md mt-2 h-[130px]">
          {truncateContent(data.content)}
        </div>
        <div className="text-slate-500 flex items-center gap-1 mb-2 ml-4">
          <p>Read more</p>
          <div className="">
            <MdArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
