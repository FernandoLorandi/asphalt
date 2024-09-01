import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CardBlog from "@/sections/blog/cardBlog";

const timestamp = Date.now();

const data = new Intl.DateTimeFormat("pt-BR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  weekday: "long",
}).format(timestamp);

const Blog = () => {
  return (
    <div>
      <div className=" bg-brand-secondary-500 border-b-8 border-brand-primary-950">
        <div className="container w-full flex flex-col p-10 gap-6">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="text-white hover:text-brand-primary-950"
                  >
                    <a href="Home">Home</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-brand-primary-900" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-brand-primary-900">
                    Blog
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col gap-3 text-white text-2xl md:text-4xl font-bold">
            Blog
            <span className="text-slate-100 text-sm font-normal mb-3">
              {data}
            </span>
          </div>
        </div>
      </div>
      <div className="container py-12 gap-8 flex flex-wrap md:flex-nowrap lg:flex-nowrap ">
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
    </div>
  );
};

export default Blog;
