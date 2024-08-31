import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};

const CardServicos = ({ title, description }: Props) => {
  return (
    <div className=" border-b border-slate-200 h-auto w-auto py-6 pr-28 pl-8 lg:pl-12 md:pl-12">
      <div className="flex flex-col space-y-6">
        <div className="gap-3">
          {title && (
            <h2 className="text-slate-950 font-semibold text-2xl"> {title}</h2>
          )}
          <h2
            className="text-slate-950 font-semibold text-2xl"
            title={title}
          ></h2>
          {description && (
            <p className="font-normal text-sm text-slate-600 mt-3">
              {description}
            </p>
          )}
        </div>
        <div>
          <Button
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
    </div>
  );
};

export default CardServicos;
