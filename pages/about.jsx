import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>About OpenChannels</title>
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Body() {
  return (
    <main className="py-14 px-2 flex justify-center">
      <div className="w-3/5">
        <h1 className="text-5xl font-bold text-center text-slate-700">
          Building our future together
        </h1>
        <h3 className="text-xl py-8 text-center text-slate-500">
          It takes a village to raise a child and it takes a <b>community</b> to
          build a product.
        </h3>

        <p className="text-left py-8 text-slate-600">
          We understand the power of collaboration in the world of programming.
          That's why we've created a space where programmers from all
          backgrounds and expertise levels can connect with one another, share
          their experiences, and inspire innovation. Whether you're a seasoned
          developer or just starting out, there's a place for you here.
        </p>
      </div>
    </main>
  );
}
