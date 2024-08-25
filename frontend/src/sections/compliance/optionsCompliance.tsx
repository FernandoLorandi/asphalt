import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileSearch,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Shrub,
  Users,
} from "lucide-react";

type IconName = "shieldcheck" | "scale" | "heart" | "shrub" | "file" | "users";

type Props = {
  title?: string;
  description?: string;
  icon?: IconName;
};
const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  shieldcheck: ShieldCheck,
  scale: Scale,
  heart: HeartHandshake,
  shrub: Shrub,
  file: FileSearch,
  users: Users,
};
const OptionsCompliance = ({ title, description, icon }: Props) => {
  const Icon = icon ? iconMap[icon] : null;
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-slate-950 font-semibold">
            <span className="inline-flex gap-3">
              {Icon && <Icon className="text-brand-secondary-500" />}
              {title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            {description}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default OptionsCompliance;
