import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { toast } from "react-toastify";
import * as emailValidator from "email-validator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");

  const handleButtonClick = (type) => {
    setShowInput(true);
    setType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email);

    if (type === "" || email === "") {
      toast("Please enter your email address");
      return;
    }

    if (!emailValidator.validate(email)) {
      toast("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("/api/post-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, email }),
      });

      if (!response.ok) {
        toast.error("Failed to insert document");
      }

      return await response.json();
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  return (
    <div>
      <Head>
        <title>Open Channels | Connecting Developers with Developers</title>
        <meta
          name="description"
          content="A platform where developers and programming enthusiasts can directly engage with other creators to build a better product."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <div className="max-w-lg px-8 py-12 bg-white shadow-md rounded-lg space-y-8">
            <h1 className="text-3xl font-semibold text-center">
              Welcome to Open Channels
            </h1>

            <p className="text-gray-600 text-center">
              Connecting Developers with Developers
            </p>

            <p className="text-gray-600 text-center">
              A platform where developers and programming enthusiasts can
              directly engage with other creators to build a better product as
              well as foster a community of collaboration and feedback-driven
              development.
            </p>

            <div className="flex justify-center gap-x-4">
              <button
                onClick={() => handleButtonClick("waitlist")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl"
              >
                Join our waitlist to get notified when we&apos;re live!
              </button>
              <button
                onClick={() => handleButtonClick("help")}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl"
              >
                Want to help? Join our team!
              </button>
            </div>

            {showInput && (
              <form
                onSubmit={handleSubmit}
                className="mt-4 flex justify-center"
              >
                <label htmlFor="email" className="py-2 text-gray-600 mr-2">
                  Enter your email:
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`border ${
                    type === "waitlist" ? "border-blue-500" : "border-green-500"
                  } px-4 py-2 rounded-md outline-none`}
                />

                <button
                  type="submit"
                  className={`${
                    type === "waitlist"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white font-semibold px-4 py-2 ml-2 rounded-3xl`}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
