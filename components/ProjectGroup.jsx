import { ChevronRight, Heart, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectGroup({ heading, projects }) {
  function toggleLike() {}

  return (
    <div className="mx-20 my-10 bg-gray-50 pt-4 pb-6 px-10 rounded-xl">
      <h1 className="text-xl font-semibold text-gray-700 pb-4 flex">
        {heading}
        <span className="inline-flex pt-1 hover:text-gray-600 hover:scale-110 cursor-pointer transition-all">
          <ChevronRight />
        </span>
      </h1>

      <hr className="border w-4/5 flex items-center mx-auto" />
      {projects.map((item, index) => (
        <div
          id=""
          className="my-6 flex rounded-2xl hover:from-gray-100 hover:bg-gradient-to-l hover:delay-[3000ms] transition"
        >
          <div className="bg-gray-700 rounded-xl w-14 h-14"></div>

          <Link className="flex flex-col px-8" href="/">
            <p className="py-1 text-gray-800 hover:text-gray-400 cursor-pointer">
              <span className="w-1/2 ">{item.name} - </span>
              <span className="w-1/2 text-sm">{item.description}</span>
              <ExternalLink className="inline-flex mb-1 mx-2" size="1rem" />
            </p>
            <p className="text-xs text-gray-600">{item.category}</p>
          </Link>

          <div className="border border-gray-200 rounded-lg h-10 w-10 ml-80 flex flex-col items-center group hover:border-gray-400 transition-all">
            <p className="text-xs">{item.totalLikes}</p>
            <Heart
              className="text-gray-100 fill-gray-700 group-hover:fill-gray-500 cursor-pointer"
              onClick={() => toggleLike(id)}
              size="1.1rem"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
