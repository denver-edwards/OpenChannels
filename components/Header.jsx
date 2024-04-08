import Link from "next/link";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-white border border-gray-700 px-2 sm:px-4 py-5 rounded bg-gray-800 shadow-xl">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            OpenChannels
          </span>
        </Link>

        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <Hamburger size={20} toggled={showMenu} toggle={setShowMenu} />
          </button>
        </div>

        <div
          className={
            "w-full md:block md:w-auto" +
            (!showMenu
              ? " hidden"
              : " transition-transform duration-500 ease-linear")
          }
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <Link
              href="/about"
              className="block py-2 pr-4 pl-3 border-b md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 pr-4 pl-3 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white"
            >
              Contact
            </Link>

            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0a8 8 0 100 16A8 8 0 008 0zM6 8a2 2 0 114 0 2 2 0 01-4 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 px-3 py-2 text-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-gray-900"
              />
            </div>

            <Link
              href=""
              className="block py-2 pr-4 pl-3 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href=""
              className="block py-2 pr-4 pl-3 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-800 md:hover:text-white hover:bg-gray-700 border bg-white rounded transition-all"
            >
              <p className="px-2 py-1.5 hover:text-white font-semibold">
                Sign up
              </p>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
