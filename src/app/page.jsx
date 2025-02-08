import Blogs from "../components/ui/Blogs";
import Footer from "../components/ui/Footer";
import Intro from "../components/ui/Intro";

export default function Home() {
  return (
    <>
      <main className="mx-10">
        <Intro />
        <Blogs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
