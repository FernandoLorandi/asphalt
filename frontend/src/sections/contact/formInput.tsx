import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  label?: string;
  placeholder?: string;
  type?: string;
};

const FormInput = ({ label, placeholder, type }: Props) => {
  return (
    <div>
      <Label className="text-slate-950 font-normal">{label}</Label>
      <Input type={type} placeholder={placeholder} className="mt-2" />
    </div>
  );
};

export default FormInput;
