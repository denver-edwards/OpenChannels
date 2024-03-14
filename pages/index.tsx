import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Connecting Gamers and Developers</title>
        <meta
          name="description"
          content="A platform where gaming enthusiasts can directly engage with game creators."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <div className="max-w-lg px-8 py-12 bg-white shadow-md rounded-lg space-y-8">
            <h1 className="text-3xl font-semibold text-center">
              Welcome to Our Platform
            </h1>
            <p className="text-gray-600 text-center">
              Connecting Gamers and Developers
            </p>
            <p className="text-gray-600 text-center">
              A platform where gaming enthusiasts can directly engage with game
              creators, fostering community collaboration and feedback-driven
              game development.
            </p>
            <div className="flex justify-center">
              <a
                href="/signup"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md"
              >
                Sign Up
              </a>
              <a
                href="/explore"
                className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-md"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
