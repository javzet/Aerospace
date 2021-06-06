import { FC, ReactChild } from "react";
import { useRouter } from "next/router";
import NL from "next/link";

type LinkProps = { children: ReactChild; href: string; className?: string };

const Link: FC<LinkProps> = ({ children, href, className }) => {
  return (
    <NL href={href}>
      <a className={className ? className : ""}>{children}</a>
    </NL>
  );
};

export const Activelink: FC<LinkProps> = ({ children, href, className }) => {
  const router = useRouter();

  return (
    <NL href={href}>
      <a
        className={`${`${className}` ? className : " "} ${
          router.pathname === href ? "activelink" : ""
        }`}
      >
        {children}
      </a>
    </NL>
  );
};
