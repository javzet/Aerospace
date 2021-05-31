import Link from "next/link";
import { FC } from "react";
import { Extranav } from "./Navbar/Extranav";
import { Nav } from "./Navbar/Nav";

export const Header: FC = () => {
  return (
    <header className={"header"}>
      <div className={"navcontainer"}>
        <Link href="/">
          <>
            <img
              src="/prueba-logo-1.svg"
              alt="Aerospace logo"
              className={"logo"}
            />
            <h1 className={"logotitle"}>Aerospace</h1>
          </>
        </Link>
        <Nav />
        <Extranav />
      </div>
    </header>
  );
};
