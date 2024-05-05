import Header from "@/components/Header";
import Head from "next/head";
import { useState } from "react";

import Checkbox from "@/components/Checkbox";

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
  const [selectedInterests, setSelectedInterests] = useState([]);

  function handleCheckboxChange(interest, isChecked) {
    if (isChecked) {
      setSelectedInterests((prevInterests) => [...prevInterests, interest]);
    } else {
      setSelectedInterests((prevInterests) =>
        prevInterests.filter((item) => item !== interest)
      );
    }
  }

  function handleChange(event) {
    const selectedRole = event.target.value;
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] py-10 px-2 bg-gray-900s">
      <div className="w-3/4">
        <div className="font-medium text-2xl text-gray-700 pb-4 pl-8 w-3/4">
          Public Profile
        </div>

        <div className="flex items-center mt-4 text-gray-700 px-10">
          <label htmlFor="name" className="mr-2 w-1/5 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name..."
            value=""
            onChange=""
            className="border border-1.5 border-gray-300 rounded-md px-2 py-1 outline-none w-4/5"
          />
        </div>

        <div className="flex items-center mt-4 text-gray-700 px-10">
          <label htmlFor="username" className="mr-2 w-1/5 font-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter a username..."
            value=""
            onChange=""
            className="border border-1.5 border-gray-300 rounded-md px-2 py-1 outline-none w-4/5"
          />
        </div>

        <div className="flex items-center mt-4 text-gray-700 px-10">
          <label htmlFor="headline" className="mr-2 w-1/5 font-semibold">
            Headline
          </label>
          <input
            type="text"
            id="headline"
            placeholder="Ex. Love making open-source libraries"
            value=""
            onChange=""
            className="border border-1.5 border-gray-300 rounded-md px-2 py-1 outline-none w-4/5"
          />
        </div>

        <div className="flex items-center mt-4 text-gray-700 px-10">
          <label className="mr-2 w-1/5 font-semibold">Areas of Interest:</label>

          <div className="flex flex-wrap">
            <Checkbox value="technology" onChange={handleCheckboxChange} />

            <Checkbox value="art" onChange={handleCheckboxChange} />

            <Checkbox value="science" onChange={handleCheckboxChange} />
          </div>
        </div>

        <div className="flex items-center mt-4 text-gray-700 px-10">
          <button className="bg-blue-700 hover:bg-blue-900 w-1/3 text-white rounded-lg px-8 py-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
