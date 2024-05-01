// import { signIn, auth, providerMap } from "@/auth";
import { signIn } from "next-auth/react";
import Header from "@/components/Header";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Join OpenChannels</title>
      </Head>
      <Header />
      <Body />
    </>
  );
}

function Body() {
  return (
    <>
      <div></div>
      <button onClick={() => signIn()}>Github</button>
    </>
  );
}
