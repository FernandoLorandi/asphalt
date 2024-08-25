import Compliance from "@/sections/compliance/compliance";
import Hero from "@/sections/hero/hero";
import Partners from "@/sections/partners/partners";
import Servicos from "@/sections/services/servicos";
import Stats from "@/sections/stats/stats";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Servicos />
      <Partners />
      <Compliance />
    </>
  );
};

export default Home;
