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
  return <div className="min-h-[calc(100vh-5rem)]"></div>;
}
