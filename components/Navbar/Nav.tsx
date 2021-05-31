import React, { FC } from "react";
import { Activelink } from "../Links";

export const Nav: FC = () => {
  return (
    <nav className={"navbar"}>
      <Activelink href="/reservar" className={"navbarlink"}>
        Reserva tu vuelo
      </Activelink>
      <Activelink href="/destinos" className={"navbarlink"}>
        Destinos
      </Activelink>
      <Activelink href="/conocenos" className={"navbarlink"}>
        Conócenos
      </Activelink>
    </nav>
  );
};
