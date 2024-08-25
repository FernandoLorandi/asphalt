import { Textarea } from "@/components/ui/textarea";
import FormInput from "./formInput";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoveRight, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <div className="w-full py-24 border-y border-slate-200 bg-slate-50">
      <div className="container flex flex-col space-y-10">
        <div className="flex flex-col gap-1">
          <p className="text-brand-primary-600 font-semibold text-sm uppercase">
            Construindo caminhos
          </p>
          <h2 className="text-slate-950 font-semibold text-3xl">
            Trabalhe conosco
          </h2>
          <p className="text-slate-600 font-normal mt-2">
            Preencha os campos abaixo para entrar em contato.
          </p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-8">
          <div className="w-full space-y-4">
            <FormInput
              label="Nome completo"
              placeholder="Digite seu nome completo"
            />
            <FormInput
              type="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
            />
            <FormInput label="Telefone" placeholder="Digite seu telefone" />
          </div>
          <div className="w-full flex flex-col justify-between space-y-4">
            <div className="h-auto space-y-4">
              <div>
                <Label
                  htmlFor="arquivo"
                  className="text-slate-950 font-normal mb-4"
                >
                  Upload de curriculo
                </Label>
                <Input id="arquivo" type="file" className="mt-2" />
              </div>
              <div>
                <Label className="text-slate-950 font-normal mb-4">
                  Digite sua mensagem
                </Label>
                <Textarea
                  placeholder="Digite sua mensagem aqui"
                  className="mt-2"
                />
              </div>
            </div>

            <span>
              <Button
                size="sm"
                className=" w-full md:w-full lg:w-auto xl:w-auto
                 gap-2 rounded-sm bg-brand-primary-950 hover:bg-brand-primary-900"
              >
                Enviar
                <MoveRight size={16} />
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
