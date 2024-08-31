import TeamMembers from "./teamMembers";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const Team = (...props: any) => {
  return (
    <div className="container pt-10 pb-20 md:py-24 flex flex-col gap-10 md:flex-row justify-between">
      <div className="flex flex-col gap-3 max-w-xl">
        <h2 className="text-3xl font-semibold text-slate-950">
          Conheça nossa equipe
        </h2>
        <p className="text-base text-slate-600 leading-6">
          Valorizamos a diversidade e destacamos a liderança feminina em nossa
          equipe, com a maioria dos cargos administrativos ocupados por
          mulheres. Esse compromisso reflete nossa busca constante por
          eficiência e qualidade em cada projeto.
        </p>
        <Button
          size="sm"
          variant="outline"
          className="text-brand-primary-950 rounded-sm border-brand-primary-950 font-semibold max-w-max gap-2 mt-10"
        >
          Entrar em contato
          <MoveRight size={16} strokeWidth={2} className=" w-5 h-5" />
        </Button>
      </div>
      <div className="flex max-w-7xl flex-wrap md:flex-col md:flex-nowrap lg:flex-row gap-10">
        <div className="space-y-10">
          <TeamMembers
            avatarImg="https://github.com/FernandoLorandi.png"
            avatarFallBack="FL"
            name="Fernando Lorandi"
            position="Recursos Humanos"
            email="recursoshumanos@asphalt.com.br"
            {...props}
          />
          <TeamMembers
            avatarImg="https://github.com/FernandoLorandi.png"
            avatarFallBack="FL"
            name="Fernando Lorandi"
            position="Recursos Humanos"
            email="recursoshumanos@asphalt.com.br"
            {...props}
          />
        </div>
        <div className="space-y-10">
          <TeamMembers
            avatarImg="https://github.com/FernandoLorandi.png"
            avatarFallBack="FL"
            name="Fernando Lorandi"
            position="Recursos Humanos"
            email="recursoshumanos@asphalt.com.br"
            {...props}
          />
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
    </div>
  );
};

export default Team;
