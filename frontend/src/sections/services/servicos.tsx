import CardServicos from "./cardServicos";

const Servicos = () => {
  return (
    <div className="mx-auto flex flex-col lg:flex-row md:flex-col border-t border-slate-200">
      <div className="bg-brand-primary-950 pb-10 w-full max-w-full md:max-w-full py-14 flex">
        <div className="pl-8 xl:pl-16 xl:ml-auto md:pl-12 lg:ml-8">
          <div className="flex flex-col pr-8 pt-14 gap-3">
            <div>
              <p className="text-brand-secondary-500 uppercase text-sm font-semibold">
                +30 anos de experiência
              </p>
              <h2 className="text-4xl font-semibold text-white" title="Teste">
                Nossos serviços
              </h2>
            </div>
            <h2 className="text-white font-normal">
              Oferecemos soluções completas em pavimentação asfaltiva, desde a
              preparação do terreno até a aplicação de asfalto de alta
              qualidade, garantindo durabilidade, segurança e eficiência para
              projetos residenciais, comerciais e industriais.
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full">
        <CardServicos
          title="Conservação de pavimentos"
          description="Oferecemos manutenção e reparos especializados para conservar e prolongar a vida útil dos pavimentos asfaltados. Nossos serviços garantem durabilidade e desempenho superior, mantendo suas superfícies em excelente estado."
        />
        <CardServicos
          title="Roçada e manutenção de áreas verdes"
          description="Oferecemos manutenção e reparos especializados para conservar e prolongar a vida útil dos pavimentos asfaltados. Nossos serviços garantem durabilidade e desempenho superior, mantendo suas superfícies em excelente estado."
        />
        <CardServicos
          title="Implantação de rodovias"
          description="Oferecemos manutenção e reparos especializados para conservar e prolongar a vida útil dos pavimentos asfaltados. Nossos serviços garantem durabilidade e desempenho superior, mantendo suas superfícies em excelente estado."
        />
      </div>
    </div>
  );
};

export default Servicos;
