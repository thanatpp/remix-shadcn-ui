import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Card } from "../ui/card";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <Card className={cn("shadow-xl")}>{children}</Card>;
}
