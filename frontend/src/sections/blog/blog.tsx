import { Newspaper } from "lucide-react";
import CardBlog from "./cardBlog";

const Blog = () => {
  return (
    <>
      <div className="mt-10 bg-brand-secondary-500 py-10 border-t-8 border-brand-primary-950">
        <div className="container flex flex-col">
          <span className="text-white font-light mb-3 italic">Data</span>
          <span className=" text-4xl text-white font-semibold inline-flex items-center gap-3">
            <Newspaper size={32} strokeWidth={1} />
            Noticias e blog
          </span>
          <span className="mt-3 text-white">
            Fique ligado em tudo que acontece no mundo da pavimentação
            asfáltica!
          </span>
        </div>
      </div>
      <div className="container py-12 gap-8 flex flex-wrap md:flex-wrap lg:flex-nowrap ">
        <CardBlog
          title="Conservação de pavimento"
          description="Oferecemos manutenção e reparos especializados para conservar e prolongar a vida útil dos pavimentos asfaltados. Nossos serviços garantem durabilidade e desempenho superior, mantendo suas superfícies em excelente estado."
        />
        <CardBlog
          title="Conservação de pavimento"
          description="Oferecemos manutenção e reparos especializados para conservar e prolongar a vida útil dos pavimentos asfaltados. Nossos serviços garantem durabilidade e desempenho superior, mantendo suas superfícies em excelente estado."
        />
        <CardBlog
          title="Conservação de pavimento"
          description="Oferecemos manutenção e reparos especializados para conservar e prolongar a vida útil dos pavimentos asfaltados. Nossos serviços garantem durabilidade e desempenho superior, mantendo suas superfícies em excelente estado."
        />
      </div>
    </>
  );
};
export default Blog;
