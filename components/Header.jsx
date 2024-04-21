import Link from "next/link";
import { useState } from "react";
import { Menu, Search } from "lucide-react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="border border-gray-700 px-2 sm:px-4 py-5 rounded bg-gray-800 shadow-xl">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-400">
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
            <Menu size={20} toggled={showMenu} toggle={setShowMenu} />
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
              className="block py-2 pr-2 pl-1.5 border-b md:border-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 pr-2 pl-1.5 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white"
            >
              Contact
            </Link>

            <div className="relative flex items-center">
              <Search color="White" className="translate-x-8" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 px-3 py-2 text-gray-300 bg-gray-600 border border-gray-700 rounded-md focus:outline-none focus:border-gray-900"
              />
            </div>

            <Link
              href=""
              className="block py-2 pr-2 pl-1.5 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="block py-2 pr-2 pl-1.5 md:hover:bg-transparent rounded border rounded border-white text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white"
            >
              Sign up
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
