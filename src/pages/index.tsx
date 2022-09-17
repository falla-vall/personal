import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="sm:(space-y-2) md:(space-y-4) w-full">
        <p className="text-lg xs:(text-xl) sm:(text-2xl) md:(text-4xl) text-white">
          Nothing here, atleast for now.
        </p>
        <h1 className="text-3xl xs:(text-4xl) sm:(text-5xl) md:(text-7xl) font-bold text-white">
          flla.
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
