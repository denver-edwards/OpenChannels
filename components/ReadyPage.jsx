import Header from "@/components/Header";
import { ChevronRight, Heart } from "lucide-react";

export default function ReadyPage() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

function Body() {
  return (
    <main>
      <div className="mx-20 my-10 bg-gray-50 pt-4 pb-6 px-10 rounded-xl">
        <h1 className="text-xl font-semibold text-gray-700 pb-4 flex">
          Showcase
          <span className="inline-flex pt-1 hover:text-gray-600 hover:scale-110 cursor-pointer transition-all">
            <ChevronRight />
          </span>
        </h1>

        <hr className="border w-4/5 flex items-center mx-auto" />

        <div
          id=""
          className="my-6 flex rounded-3xl hover:from-cyan-50 hover:bg-gradient-to-l hover:delay-[3000ms] transition"
        >
          <div className="bg-gray-700 rounded-xl w-14 h-14"></div>

          <div className="flex flex-col px-8">
            <p className="pt-1 text-lg text-gray-800">Title</p>
            <p className="text-sm text-gray-600">Category</p>
          </div>

          <div className="border border-gray-200 rounded-lg h-10 w-10 ml-80 flex items-center hover:border-gray-400 transition">
            <Heart className="text-gray-100 fill-gray-700 hover:fill-gray-500" />
          </div>
        </div>
      </div>
    </main>
  );
}
