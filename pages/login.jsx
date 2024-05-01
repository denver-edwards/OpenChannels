// import { signIn, auth, providerMap } from "@/auth";
import { signIn, useSession } from "next-auth/react";
import Header from "@/components/Header";
import Head from "next/head";
import { Github } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session != null) {
      router.push("/");
    }
  }, [router, session]);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Join OpenChannels</title>
      </Head>
      <Header />
      <Body />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-gray-200 min-h-[calc(100vh-5rem)] flex justify-center items-center">
      <div className="shadow-xl bg-white rounded-2xl w-2/5 text-center px-6 py-6">
        <button
          className="bg-gray-900 text-white px-8 py-3.5 rounded-lg"
          onClick={() => signIn("github")}
        >
          <Github className="inline pb-1 mr-6" />
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
