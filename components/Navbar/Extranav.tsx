import React, { FC } from "react";
import { Monedabtn } from "./Moneda";

export const Extranav: FC = () => {
  return (
    <div className={"extranav"}>
      <button className="extranavlink">Información</button>
      <Monedabtn className="extranavlink pointer" />
    </div>
  );
};
