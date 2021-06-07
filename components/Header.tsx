import Link from "next/link";
import { FC, useEffect } from "react";
import { Extranav } from "./Navbar/Extranav";
import { Nav } from "./Navbar/Nav";

export const Header: FC = () => {
  useEffect(() => {
    const setNavMenu = () => {
      document.querySelector(".navigation-movile").classList.toggle("show");
    };

    const hamburgerIcon = document.querySelector(".hamburger-icon");
    hamburgerIcon.addEventListener("click", setNavMenu);

    return () => {
      hamburgerIcon.removeEventListener("click", setNavMenu);
    };
  }, []);

  return (
    <header className={"header"}>
      <div className={"navcontainer"}>
        <>
          <img
            src="/aerospace-logo.svg"
            alt="Aerospace logo"
            className={"logo"}
          />
          <Link href="/">
            <h1 className={"logotitle pointer"}>Aerospace</h1>
          </Link>
        </>
        <div className="hamburger-icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="navigation-movile">
          <Nav />
          <Extranav />
        </div>
      </div>
    </header>
  );
};
