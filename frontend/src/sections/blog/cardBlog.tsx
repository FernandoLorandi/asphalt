import { Button } from "@/components/ui/button";
import { CalendarFold } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};

const CardBlog = ({ title, description }: Props) => {
  return (
    <>
      <div className="border rounded-sm border-slate-200 flex flex-col hover:drop-shadow-lg hover:transition-all">
        <img
          src="/img/img-card.jpg"
          alt=""
          className="w-auto h-48 object-cover rounded-t-sm"
        />
        <div className=" bg-white px-6 pt-3 pb-4 rounded-b-sm">
          <h2 className="text-slate-950 font-semibold text-2xl">{title}</h2>
          <p className="text-sm text-slate-600 mt-3">{description}</p>
          <div className="mt-3 flex items-center gap-2">
            <CalendarFold size={16} className="text-slate-600" />
            <p className="text-slate-600 font-normal text-sm">25/09</p>
          </div>
          <Button
            variant="outline"
            className="mt-5 border-brand-primary-950 text-sm"
          >
            Ver mais
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardBlog;
