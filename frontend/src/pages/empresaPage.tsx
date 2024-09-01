import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import About from "@/sections/about/about";
import Compliance from "@/sections/compliance/compliance";
import Contact from "@/sections/contact/contact";
import Partners from "@/sections/partners/partners";

const Empresa = () => {
  return (
    <>
      <div className=" bg-slate-white">
        <div className="container w-full flex flex-col p-10 gap-6">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <a href="Home">Home</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage> Empresa</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="text-slate-950 text-2xl md:text-4xl font-bold">
            Sobre nós
          </div>
        </div>
      </div>
      <About />
      <Partners />
      <Compliance />
      <Contact />
    </>
  );
};

export default Empresa;
