const Principles = () => {
  return (
    <>
      <div className="grid md:grid-cols-4">
        <div className="col-span-2 py-14 bg-brand-secondary-500 max-w pr-12">
          <div
            className="flex flex-col gap-3 ml-8 2xl:ml-56 xl:ml-12
           lg:pl-0"
          >
            <h2 className="text-white text-2xl font-semibold">Missão</h2>
            <p className="text-white text-base font-light">
              Estamos comprometidos com os mais altos padrões de ética e
              conformidade em todas as nossas operações de pavimentação
              asfáltica. Nossa Política de Compliance é fundamental para
              garantir que nossas atividades estejam em total conformidade com
              as leis, regulamentações e normas do setor, promovendo um ambiente
              de negócios transparente e responsável.
            </p>
          </div>
        </div>
        <div className="col-span-2 py-14 bg-brand-primary-950">
          <div className="flex flex-col gap-3 ml-8 mr-8 lg:pl-8 2xl:mr-56 xl:mr-8 lg:pr- md:pr-8">
            <h2 className="text-white text-2xl font-semibold">Visão</h2>
            <p className="text-white text-base font-light">
              Ser reconhecida como a empresa líder em construção e recuperação
              de rodovias no Paraná, mantendo a tradição familiar de excelência
              e integridade, e expandindo nossas operações de forma sustentável
              para novas regiões e desafios dentro do estado.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-slate-100 border-b border-slate-200">
        <div className="container flex flex-col py-14 gap-3">
          <h2 className="text-slate-950 text-2xl font-semibold">Valores</h2>
          <ul className="text-slate-600 list-disc pl-4">
            <li>
              Qualidade: Compromisso inabalável com a excelência em todos os
              aspectos do nosso trabalho.
            </li>
            <li>
              Tradição: Honramos nossa história e mantemos os valores familiares
              que nos guiaram por mais de três décadas.
            </li>
            <li>
              Responsabilidade: Conduzimos nossos negócios com ética,
              transparência e respeito às pessoas e ao meio ambiente.
            </li>
            <li>
              Sustentabilidade: Buscamos sempre o equilíbrio entre o crescimento
              econômico, a preservação ambiental e o bem-estar social.
            </li>
            <li>
              Inovação: Incorporamos as melhores práticas e tecnologias para
              aprimorar continuamente nossos processos e resultados.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Principles;
