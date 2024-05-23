import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGroup from "@/components/ProjectGroup";

export default function ReadyPage() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

function Body() {
  const [latestPosts, setLatestPosts] = useState([]);

  const getLatestProjects = async () => {
    try {
      const res = await fetch("/api/get-latest-projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status >= "200" && res.status < "300") {
        const data = await res.json();
        setLatestPosts(data.data);
      } else {
        toast.error(`Something went wrong. Error: ${res.status}`, {
          position: "top-center",
        });
      }
    } catch (e) {
      toast.error("An error has occurred.", { position: "top-center" });
    } finally {
    }
  };

  useEffect(() => {
    getLatestProjects();
  }, []);

  const data = [
    {
      name: "This",
      description: "This is a test",
      category: "Game",
      slug: "/",
      totalLikes: 0,
    },
  ];

  return (
    <main className="min-h-screen">
      {/*<ProjectGroup heading="Showcase" projects={data} /> */}
      <ProjectGroup heading="Latest Projects" projects={latestPosts} />
    </main>
  );
}
