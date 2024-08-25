import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  label?: string;
  placeholder?: string;
};

const FormInput = ({ label, placeholder }: Props) => {
  return (
    <div>
      <Label className="text-slate-950 font-normal">{label}</Label>
      <Input placeholder={placeholder} className="mt-2" />
    </div>
  );
};

export default FormInput;
