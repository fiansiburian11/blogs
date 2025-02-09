import Blogs from "../components/ui/Blogs";
import Intro from "../components/ui/Intro";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <div>
      <main className="md:mx-5 lg:mx-20 sm:mx-5 mx-2 overflow-x-hidden">
        <Intro />
        <Blogs />
      </main>
    </div>
  );
}
