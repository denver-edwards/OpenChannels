import Header from "@/components/Header";
import ProjectGroup from "@/components/ProjectGroup";

export default function ReadyPage() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

function Body() {
  const data = [
    {
      name: "This",
      description: "This is a test",
      category: "Game",
      totalLikes: 0,
    },
  ];
  return (
    <main>
      <ProjectGroup heading="Showcase" projects={data} />
    </main>
  );
}
