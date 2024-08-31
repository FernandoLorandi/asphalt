import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

type Props = {
  avatarImg: any;
  avatarFallBack: any;
  name?: string;
  position?: string;
  email?: string;
};
const TeamMembers = ({
  avatarImg,
  name,
  position,
  email,
  avatarFallBack,
  ...prop
}: Props) => {
  return (
    <div className="flex flex-row gap-2">
      <Avatar className="h-12 w-12">
        <AvatarImage src={avatarImg} alt="teste" {...prop}></AvatarImage>
        <AvatarFallback>{avatarFallBack}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-0">
        <h3 className="font-medium text-lg text-slate-950">{name}</h3>
        <p className="font-normal text-sm italic text-slate-600">{position}</p>
        <span className="inline-flex items-center gap-2">
          <Mail size={14} className="text-brand-secondary-600" />
          <p>{email}</p>
        </span>
      </div>
    </div>
  );
};
export default TeamMembers;
