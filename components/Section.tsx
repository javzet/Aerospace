import { SectionProps } from "../types/types";

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={className ? className : " "}>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </section>
  );
};
