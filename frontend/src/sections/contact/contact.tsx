import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILES_TYPES = ["file.pdf", "file.docx", "file.dotx"];

const formSchema = z.object({
  name: z
    .string({
      message: "O nome é obrigatório",
    })
    .min(3, {
      message: "O campo precisa ter mais que 3 caracteres",
    })
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(" ");
    }),
  mail: z
    .string()
    .min(1, { message: " O e-mail é obrigatório" })
    .email({ message: "Formato de e-mail inválido" })
    .toLowerCase(),
  phone: z.string().regex(phoneRegex, {
    message: "Telefone inválido",
  }),
  file: z
    .instanceof(FileList)
    .refine((files) => !!files.item(0), "O curriculo é obrigatório")
    .refine(
      (files) => files.item(0)!.size <= MAX_FILE_SIZE,
      "Tamanho máximo de 5mb",
    )
    .refine(
      (files) => ACCEPTED_FILES_TYPES.includes(files.item(0)!.type),
      "Formato de arquivo inválido",
    )
    .transform((files) => {
      return files.item(0)!;
    }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input
                          type="name"
                          placeholder="Digite seu nome completo"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="sm"
                  className=" w-full md:w-full lg:w-auto xl:w-auto
                 gap-2 rounded-sm bg-brand-primary-950 hover:bg-brand-primary-900"
                >
                  Enviar
                </Button>
              </form>
            </Form>
          </div>

          {/* Primeira etapa do cadastro */}

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

            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
