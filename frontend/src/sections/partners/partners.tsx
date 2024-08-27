import { PartnersCard } from "./partnersCard";

const Partners = () => {
  return (
    <div className="bg-slate-50 w-full py-24">
      <div className="container flex flex-wrap flex-col space-y-10">
        <div className="flex flex-col">
          <p className="uppercase text-sm text-brand-primary-600 font-semibold">
            {" "}
            Nossos parceiros
          </p>
          <h2 className="text-3xl text-slate-950 font-semibold">
            {" "}
            Empresas que confiam no nosso trabalho
          </h2>
          <p className="font-normal text-slate-600 mt-3">
            Juntos com nossos parceiros, estamos alcançando novos patamares de
            inovação e sucesso.
          </p>
        </div>
        <PartnersCard />
        {/* <div className="flex w-full justify-between gap-8">
          <img
            src="/img/sanepar.png"
            alt="Logotipo Sanepar"
            className="h-36 w-full border border-slate-200 rounded-sm"
          />
          <img
            src="/img/copel.png"
            alt="Logotipo Copel"
            className="h-36 w-full border border-slate-200 rounded-sm"
          />
          <img
            src="/img/DER.png"
            alt="Logotipo DER Paraná"
            className="h-36 w-full border border-slate-200 rounded-sm"
          />
          <img
            src="/img/incra.png"
            alt="Logotipo Incra"
            className="h-36 w-full border border-slate-200 rounded-sm"
          />
          <img
            src="/img/itaipu.png"
            alt="Logotipo Itaipu binacional"
            className="h-36 w-full border border-slate-200 rounded-sm"
          />
          <img
            src="/img/viapar.png"
            alt="Logotipo Viapar"
            className="h-36 w-full border border-slate-200 rounded-sm"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Partners;
