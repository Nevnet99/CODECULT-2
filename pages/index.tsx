import type { NextPage } from "next";
import Intro from "../src/components/feature/Intro/Intro";
import Layout from "../src/components/global/Layout/Layout";
import Text from "../src/components/shared/Text/Text";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <Text size="xxxl">Apples</Text>
      <Text size="xxxl">Apples</Text>
      <Text size="xxxl">Apples</Text>
      <Text size="xxxl">Apples</Text>
      <Text size="xxxl">Apples</Text>
    </>
  );
};

export default Home;
