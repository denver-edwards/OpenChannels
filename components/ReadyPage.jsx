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
  const data = [
    {
      name: "This",
      description: "This is a test",
      category: "Game",
      link: "/",
      totalLikes: 0,
    },
  ];
  return (
    <main>
      <ProjectGroup heading="Showcase" projects={data} />
      <ProjectGroup heading="Latest Projects" projects={data} />
    </main>
  );
}
