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
  onClick?: (e: any) => void;
}

export interface DateInputProps {
  className?: string;
  onClick?: (
    e: any,
    date?: { day: number; month: number; year: number }
  ) => number;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
}
