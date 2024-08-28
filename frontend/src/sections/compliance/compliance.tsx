import { Button } from "@/components/ui/button";
import OptionsCompliance from "./optionsCompliance";
import { Download, MoveRight } from "lucide-react";

const Compliance = () => {
  return (
    <div className=" flex flex-wrap lg:flex-nowrap  ">
      <div className="flex flex-wrap py-14">
        <div
          className="container flex flex-wrap 2xl:ml-56
           xl:ml-8 lg:pl-8 md:pl-8"
        >
          <div className="flex w-full max-w-7xl flex-wrap flex-col space-y-10">
            <div className="flex flex-col">
              <p className="uppercase text-sm text-brand-secondary-500 font-semibold">
                {" "}
                Políticas de compliance
              </p>
              <h2 className="text-3xl text-slate-950 font-semibold">
                {" "}
                Compliance
              </h2>
              <p className="font-normal text-slate-600 mt-3">
                Estamos comprometidos com os mais altos padrões de ética e
                conformidade em todas as nossas operações de pavimentação
                asfáltica. Nossa Política de Compliance é fundamental para
                garantir que nossas atividades estejam em total conformidade com
                as leis, regulamentações e normas do setor, promovendo um
                ambiente de negócios transparente e responsável.
              </p>
            </div>
            <OptionsCompliance
              title="Conformidade legal"
              description="Cumprimos todas as leis e regulamentações aplicáveis, incluindo normas ambientais e de segurança."
              icon="shieldcheck"
            />
            <OptionsCompliance
              title="Ética e Integridade"
              description="Promovemos práticas honestas e proibimos qualquer forma de corrupção ou suborno."
              icon="scale"
            />
            <OptionsCompliance
              title="Segurança e Saúde"
              description="Garantimos um ambiente de trabalho seguro e saudável para nossos colaboradores."
              icon="heart"
            />
            <OptionsCompliance
              title="Proteção ambiental"
              description="Adotamos práticas sustentáveis para minimizar nosso impacto ambiental."
              icon="shrub"
            />
            <OptionsCompliance
              title="Transparência"
              description="Facilitamos a comunicação aberta e tratamos denúncias com confidencialidade."
              icon="file"
            />
            <OptionsCompliance
              title="Treinamento"
              description="Oferecemos treinamentos regulares para garantir a conformidade com nossas políticas."
              icon="users"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl md:max-w-7xl lg:max-w-xl bg-brand-primary-950 py-14 flex">
        <div className="w-full pl-8 md:pl-12 flex flex-col justify-between h-auto">
          <div>
            <div className="text-brand-secondary-500 font-semibold text-sm uppercase">
              Política de compliance
            </div>
            <div className=" text-white font-semibold text-2xl mt-1">
              Canal de denúncias
            </div>
            <div className="my-4">
              <div className="text-brand-secondary-500 font-semibold text-sm">
                Via telefone
              </div>
              <div className="text-white font-medium text-lg">0800-0000</div>
              <div className="text-brand-secondary-500 font-semibold text-sm mt-4">
                Via e-mail
              </div>
              <div className="text-white font-medium text-lg">
                asphalt@ouvidoria.com.br
              </div>
              <div className="text-brand-secondary-500 font-semibold text-sm mt-4 mb-2">
                Via formulário
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="text-brand-primary-950 rounded-sm font-medium w-a gap-2"
              >
                Saiba mais
                <MoveRight size={16} strokeWidth={2} className=" w-5 h-5" />
              </Button>
            </div>
          </div>
          <div>
            <div className=" text-white font-medium text-2xl mt-10 md:mt-10 lg:mt-1">
              Código de ética e condura
            </div>
            <Button
              size="sm"
              variant="outline"
              className="bg-inherit text-white rounded-sm font-medium mt-2 gap-2"
            >
              Fazer download
              <Download size={16} strokeWidth={2} className=" w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
