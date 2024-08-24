import { Separator } from "@/components/ui/separator";
import { ChartNoAxesCombined } from "lucide-react";

const Stats = () => {
  return (
    <>
      <div className="mt-16 mb-24">
        <div className="container">
          <div className="justify-center flex items-center gap-2">
            <ChartNoAxesCombined
              size={32}
              className="text-brand-secondary-500"
            />
            <div className="text-4xl font-semibold tracking-tight text-slate-950">
              Nossos números
            </div>
          </div>
          <p className="justify-center flex items-center mt-3 mb-14 text-slate-950 font-normal text-base">
            Veja como nossos números comprovam nosso compromisso com qualidade e
            inovação!
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 ">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-semibold">20 mi</h2>
            <p className="italic leading-7 font-normal text-slate-600">
              m² de asfalto aplicado
            </p>
          </div>
          <Separator orientation="vertical" className="h-20 mx-8"></Separator>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-semibold">+160</h2>
            <p className="italic leading-7 font-normal text-slate-600">
              projetos executados
            </p>
          </div>
          <Separator orientation="vertical" className="h-20 mx-8"></Separator>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-semibold">+120</h2>
            <p className="italic leading-7 font-normal text-slate-600">
              colaboradores
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Stats;
