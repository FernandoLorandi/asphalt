import AboutGalery from "@/sections/about/aboutGalery";
import Team from "./team";
import Principles from "./principles";
const About = () => {
  return (
    <>
      <div className="container grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-12 py-8 md:py-12">
        <div className="col-span-2 md:col-span-6 lg:col-span-6">
          <p className="text-base md:text-base leading-relaxed text-slate-950">
            Fundada em 1º de agosto de 1991 pelo engenheiro Cesar José
            Fernandez, a Asphalt surgiu com o{" "}
            <strong>
              {" "}
              propósito de transformar o cenário da construção civil e da
              infraestrutura rodoviária no Brasil.{" "}
            </strong>
            Com um foco especializado na construção e recuperação de rodovias,
            bem como na conservação de faixas de domínio, a empresa rapidamente
            se consolidou como uma referência no setor.
            <br />
            <br />
            Ao longo de mais de três décadas de atuação, a Asphalt participou de
            importantes licitações e executou obras para órgãos renomados, como
            o Departamento de Estradas de Rodagem do Paraná (DER/PR), a COPEL, a
            Sanepar, a Usina Itaipu e diversas prefeituras nos estados do
            Paraná.{" "}
            <strong>
              Com um portfólio robusto, já firmamos mais de 160 contratos,
              sempre entregando excelência e qualidade em cada projeto.
            </strong>
            <br />
            <br />
            Hoje, a empresa é liderada pela engenheira civil Deborah Monique
            Fernandez, filha do fundador Cesar José Fernandez. Sob sua gestão, a
            Asphalt continua a expandir suas operações e fortalecer sua
            reputação. Atualmente, somos responsáveis por 6 contratos de
            conservação rotineira, 1 contrato de recuperação de pavimentos, e 1
            contratos que pertenciam ao antigo Anel de Integração. Além disso,
            estamos trabalhando em parceria com consorciadas na implantação de
            uma nova rodovia, reforçando nossa capacidade de executar projetos
            de grande porte.
            <br />
            <br />
            <strong>Com mais de 30 anos de experiência </strong>, a Asphalt
            segue
            <strong> comprometida com a inovação, a sustentabilidade</strong> e
            a entrega de obras que impactam positivamente as comunidades e o
            desenvolvimento regional.
          </p>
        </div>
        <AboutGalery />
      </div>
      <Principles />\
      <div className="border-b border-slate-200">
        <Team />
      </div>
    </>
  );
};

export default About;
