import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="bg-brand-primary-950 pt-6 pb-10">
      <div className="container ">
        <div className="flex gap-4 justify-center">
          <div className="text-right text-white text-sm font-light">
            <img
              src="/img/logo-default.png"
              alt=""
              className="h-auto w-56 ml-auto"
            />
            <p>Rua Marechal Deodoro, nº 893, 2º andar, sala 12</p>
            <p>84400-000</p>
            <p>Prudentópolis, Paraná</p>
            <p>(42) 99873-0129</p>
          </div>
          <Separator
            orientation="vertical"
            className="h-auto text-white opacity-10"
          />
          <div className="mt-auto">
            <p className="text-brand-secondary-500 font-medium text-lg pb-1">
              Acesso rápido
            </p>
            <ul className="text-white  font-light ">
              <li className="hover:cursor-pointer hover:underline hover:decoration-solid">
                Início
              </li>
              <li className="hover:cursor-pointer hover:underline hover:decoration-solid">
                Empresa
              </li>
              <li className="hover:cursor-pointer hover:underline hover:decoration-solid">
                Serviços
              </li>
              <li className="hover:cursor-pointer hover:underline hover:decoration-solid">
                Compliance
              </li>
              <li className="hover:cursor-pointer hover:underline hover:decoration-solid">
                Contato
              </li>
            </ul>
          </div>
        </div>
        <Separator className="mt-10 mb-10 opacity-10" />
        <span className="flex justify-center gap-4 text-white font-light text-xs">
          <p>Todos os direitos reservado</p>
          <Separator orientation="vertical" className=" h-auto opacity-10" />
          <a href="#" className=" hover:underline hover:decoration-solid">
            Politica de privacidade
          </a>
          <Separator orientation="vertical" className=" h-auto opacity-10" />
          <a href="#" className="hover:underline hover:decoration-solid">
            Termos de uso
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
