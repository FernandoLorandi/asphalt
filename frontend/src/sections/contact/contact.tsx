import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Info, MoveRight } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILES_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

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
  email: z
    .string({ message: "O e-mail é obrigatório" })
    .min(1, { message: " O e-mail é obrigatório" })
    .email({ message: "Formato de e-mail inválido" })
    .toLowerCase(),
  phone: z.string({ message: "O telefone é obrigatório" }).regex(phoneRegex, {
    message: "Telefone inválido",
  }),
  file: z
    .instanceof(FileList, {
      message: "O currículo é obrigatório",
    })
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
  bio: z
    .string({ message: "Mensagem obrigatória" }) //
    .min(10, {
      message: "A mensagem precisa ter mais que 10 caracteres.",
    })
    .max(160, {
      message: "A mensagem precisa ter menos que 160 caracteres.",
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
      <div className="container gap-10 flex flex-col md:flex-row justify-between">
        {/* titulo */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-brand-primary-600 font-semibold text-sm uppercase">
            Construindo caminhos
          </p>
          <h2 className="text-slate-950 font-semibold text-3xl">
            Trabalhe conosco
          </h2>
          <p className="text-slate-600 font-normal mt-2">
            Preencha os campos ao lado para entrar em contato.
          </p>
        </div>
        {/* form */}
        <div className="w-full ">
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Digite seu nome completo"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Digite seu e-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Digite seu e-mail"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="(  )" {...field} />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="file">Selecione o arquivo</FormLabel>
                      <FormControl>
                        <Input
                          id="file"
                          type="file"
                          placeholder="File"
                          onChange={(e) => field.onChange(e.target.files)}
                          onBlur={field.onBlur}
                          ref={field.ref}
                        />
                      </FormControl>
                      <FormDescription className="inline-flex gap-1 items-center">
                        <Info size={16} fill="blue" className="text-white" />
                        Formatos de arquivo permitidos: PDF ou DOCX
                      </FormDescription>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="file">Escreva sua mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Escreva um pouco sobre você"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="sm"
                  className="gap-2 rounded-sm bg-brand-primary-950 hover:bg-brand-primary-900"
                >
                  Enviar
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
