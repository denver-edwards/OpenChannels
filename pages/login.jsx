import { signIn, auth, providerMap } from "@/auth";
import Header from "@/components/Header";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Join OpenChannels</title>
      </Head>
      <Header />
    </>
  );
}
