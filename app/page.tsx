import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { Nav } from "@/components/nav";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <StarsBackground className="fixed inset-0 -z-10 size-full w-full h-full" />
      <div className="max-w-5xl mx-auto bg-black">
        <Nav />
        <Projects />
      </div>
    </>
  );
}
