import { ReactNode } from "react";

export interface DataSelectProps {
  name: string;
  value: string;
  className?: string;
}

export interface SelectProps {
  name?: string;
  id: string | "className";
  className?: string;
  data: Array<DataSelectProps>;
}

export interface MesProps {
  className?: string;
  year: number;
  month: number;
  children: ReactNode;
  onClick?: () => void;
}

export interface DateInputProps {
  className?: string;
}
