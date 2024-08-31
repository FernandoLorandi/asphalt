import TeamMembers from "./teamMembers";

const Team = (...props: any) => {
  return (
    <div className="container py-24 flex flex-row  ">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-slate-950">
          Conheça nossa equipe
        </h2>
        <p className="text-base text-slate-600 leading-6">
          Valorizamos a diversidade e destacamos a liderança feminina em nossa
          equipe, com a maioria dos cargos administrativos ocupados por
          mulheres. Esse compromisso reflete nossa busca constante por
          eficiência e qualidade em cada projeto.
        </p>
      </div>
      <div className="col-span-4">
        <TeamMembers
          avatarImg="https://github.com/FernandoLorandi.png"
          avatarFallBack="FL"
          name="Fernando Lorandi"
          position="Recursos Humanos"
          email="recursoshumanos@asphalt.com.br"
          {...props}
        />
      </div>
    </div>
  );
};

export default Team;
