import React, { FC } from "react";
import { Activelink } from "../Links";

export const Nav: FC = () => {
  return (
    <nav className={"navbar"}>
      <Activelink href="/" className={"navbarlink"}>
        Reserva tu vuelo
      </Activelink>
      <Activelink href="/destinos" className={"navbarlink"}>
        Destinos
      </Activelink>
      <Activelink href="/acerca-de" className={"navbarlink"}>
        Conócenos
      </Activelink>
    </nav>
  );
};
