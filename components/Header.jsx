import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Plus, Search } from "lucide-react";
import { useSession } from "next-auth/react";
import NewPostModal from "@/components/NewPostModal";

export default function Header() {
  const session = useSession();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (session == null || session.status === "unauthenticated") {
    return (
      <nav className="border border-gray-700 px-2 sm:px-4 py-5 bg-gray-800 shadow-xl">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-400 hover:text-gray-300">
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
              <Menu size={20} />
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
                href="/login"
                className="block border border-gray-300 shadow-xl py-2 px-2 bg-gray-800 md:hover:bg-gray-100 rounded-xl text-white hover:text-gray-800"
              >
                Sign in / Sign up
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <>
        <nav className="z-50 border border-gray-700 px-2 sm:px-4 py-5 bg-gray-800 shadow-xl">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-400 hover:text-gray-300">
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
                <Menu size={20} />
              </button>
            </div>

            <div
              className={
                "w-full md:flex md:w-auto" +
                (!showMenu
                  ? " hidden"
                  : " transition-transform duration-500 ease-linear")
              }
              id="mobile-menu"
            >
              <div
                className="mr-4 rounded-lg border border-gray-500 text-gray-500 flex items-center justify-center w-8 h-8 group cursor-pointer hover:bg-gray-700 transition-all"
                title="Create new project..."
                onClick={() => setShowModal(!showModal)}
              >
                <Plus size={"1.1em"} className="group-hover:text-white" />
              </div>
              <Link
                className="rounded-full bg-white w-8 h-8 hover:scale-110 cursor-pointer"
                href="/profile"
                title="Profile"
              >
                <Image
                  src="/default_profile.png"
                  width={500}
                  height={500}
                  quality={100}
                  alt="User Profile Picture"
                  className=""
                />
              </Link>
            </div>
          </div>
        </nav>
        {showModal && (
          <NewPostModal
            session={session}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </>
    );
  }
}
