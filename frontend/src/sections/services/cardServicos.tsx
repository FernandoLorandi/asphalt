import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};
const data = [
  {
    img: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const CardServicos = ({ title, description }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const hoverRef = useRef(null);
  const handleScroll = () => {
    const secao = document.getElementById("contato");
    if (secao) {
      secao.scrollIntoView({ behavior: "smooth"  });
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      ref={hoverRef}
      className="border-b border-slate-200 h-auto w-auto py-6 pr-28 pl-8 lg:pl-12 md:pl-12 transition ease-out duration-500"
    >
      <div
        className={
          isHover ? "flex flex-col md:flex-row md:justify-between" : ""
        }
      >
        <div className="space-y-6 flex flex-col">
          <div
            className={
              isHover ? "max-w-7xl md:max-w-lg " : "max-w-7xl md:max-w-max"
            }
          >
            <h2 className="text-slate-950 font-semibold text-2xl"> {title}</h2>
            <h2
              className="text-slate-950 font-semibold text-2xl"
              title={title}
            ></h2>
            <p className="font-normal text-sm text-slate-600 mt-3">
              {description}
            </p>
          </div>
          <div>
            <Button
              onClick={handleScroll}
              size="sm"
              variant="outline"
              className="bg-inherit text-brand-primary-950 rounded-sm border-brand-primary-950 font-medium w-a gap-2"
            >
              Saiba mais
              <ArrowRight
                size={16}
                strokeWidth={2}
                className=" w-5 h-5"
              ></ArrowRight>
            </Button>
          </div>
        </div>
        {isHover && (
          <div className="h-auto md:h-auto md:w-80 hidden md:flex transition ease-out duration-500">
            {data.map((item, index) => (
              <img
                key={index}
                src={item.img}
                className="border bg-cover border-slate-200 rounded-md transition ease-out duration-500"
              ></img>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardServicos;
