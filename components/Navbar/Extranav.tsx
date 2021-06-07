import Link from "next/link";
import React, { FC } from "react";
import { Monedabtn } from "./Moneda";

export const Extranav: FC = () => {
  return (
    <div className={"extranav"}>
      <Link href="/informacion">
        <button className="extranavlink">Información</button>
      </Link>
      <Monedabtn className="extranavlink pointer" />
    </div>
  );
};
