import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = useState({
    creatorEmail: "",
    name: "",
    category: "",
    link: "",
    slug: "",
    description: "",
    totalLikes: 0,
  });

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        try {
          const res = await fetch(`/api/post-specific-project`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ slug: slug }),
          });

          if (res.status >= 200 && res.status < 300) {
            const result = await res.json();
            setData(result.data);
            console.log(data);
            // toast.success("Project data fetched successfully.", {
            //   position: "top-center",
            // });
          } else {
            toast.error(`Something went wrong. Error: ${res.status}`, {
              position: "top-center",
            });
          }
        } catch (e) {
          toast.error("An error has occurred.", { position: "top-center" });
        }
      };

      fetchData();
    }
  }, [slug, data]);

  if (!slug) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{data.name} | OpenChannels</title>
      </Head>
      <Header />
      <Body data={data} />
      <Footer />
    </>
  );
}

function Body({ data }) {
  return (
    <main className="min-h-screen">
      <div>
        <h1>{data.name}</h1>
        <p>
          <strong>Category:</strong> {data.category}
        </p>
        <p>
          <strong>Description:</strong> {data.description}
        </p>
        <p>
          <strong>Link:</strong> <a href={data.link}>{data.link}</a>
        </p>
        <p>
          <strong>Total Likes:</strong> {data.totalLikes}
        </p>
        <p>
          <strong>Creator Email:</strong> {data.creatorEmail}
        </p>
      </div>
    </main>
  );
}
