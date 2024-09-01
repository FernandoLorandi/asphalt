import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CircleChevronDownIcon, Construction } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGoTo = () => {
    navigate("/Empresa");
  };
  return (
    <div
      id="hero"
      className=" bg-slate-500 h-[600px] bg-[url('/img/background-img.png')] bg-cover "
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-6 gap-8">
          <div className="mt-[72px] lg:col-span-6 md:col-span-5 flex flex-col items-start gap-6 lg:gap-6">
            <Badge className="bg-brand-primary-900 gap-2 font-medium hover:bg-brand-primary-900">
              <Construction strokeWidth={1} className=" w-4 h-4" />
              Inovação, qualidade e compromisso
            </Badge>
            <h2 className="font-bold text-3xl md:text-4xl md:leading-10 text-white">
              Pavimentação Asfáltica com Excelência e Durabilidade.
            </h2>
            <p className="text-md md:text-lg font-normal text-white  max-w-md md:max-w-full">
              Trazemos inovação e profissionalismo à pavimentação asfáltica. Com
              serviços personalizados e atenção aos detalhes, garantimos
              pavimentos que combinam resistência e estética para todas as suas
              necessidades.
            </p>
            <div className="flex gap-3 mt-2">
              <Button
                size="lg"
                className="bg-brand-secondary-500 gap-3 rounded-sm font-medium hover:bg-brand-secondary-600"
              >
                Entrar em contato
                <ArrowRight strokeWidth={2} className=" w-5 h-5"></ArrowRight>
              </Button>
              <Button
                onClick={handleGoTo}
                size="lg"
                variant="outline"
                className="bg-inherit text-white rounded-sm font-medium hidden md:flex"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>

        <span className="inline-flex flex-col items-center gap-2 w-full justify-center md:mt-24 lg:mt-28 xl:mt-32">
          <CircleChevronDownIcon className="items-center text-white hidden md:flex animate-bounce" />
          <p className="text-sm text-white hidden md:flex">
            Role para ver mais
          </p>
        </span>
      </div>
    </div>
  );
};

export default Hero;
