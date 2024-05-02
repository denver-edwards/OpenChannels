import Header from "@/components/Header";
import Head from "next/head";

export default function Settings() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Your Profile | OpenChannels</title>
      </Head>
      <Header />
      <Body />
    </div>
  );
}

function Body() {
  return (
    <div className="min-h-[calc(100vh-5rem)] py-10 px-2 bg-gray-900">
      <div className="w-3/4">
        <div className="font-medium text-2xl text-white pb-4 pl-8 w-3/4">
          Public Profile
        </div>
        <hr className="border border-gray-200" />

        <div className="flex items-center mt-4 text-white">
          <label htmlFor="name" className="mr-2 w-1/3">
            Display Name
          </label>
          <input
            type="text"
            id="name"
            placeholder=""
            value=""
            onChange=""
            className="border border-2 border-gray-200 rounded-lg px-2 outline-none w-2/3"
          />
        </div>
      </div>
    </div>
  );
}
