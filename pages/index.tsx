import dynamic from "next/dynamic";
import { NextPage } from "next";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to My Next.js App</h1>
      </main>
    </div>
  );
};

export default Home;
