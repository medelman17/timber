/** @jsx jsx */
import { jsx } from "theme-ui";
import { Layout, MainContainer } from "../src/containers";
import { SEO } from "../src/components/seo";

export const Home = () => {
  return (
    <>
      <SEO title="Timber" />
      <Layout>
        <MainContainer />
      </Layout>
    </>
  );
};

export default Home;
