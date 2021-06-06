import gsap from "gsap";
import Head from "next/head";
import { useEffect } from "react";
import { Banner } from "../components/Banner/Banner";
import { MainForm } from "../components/MainForm";

export default function Home() {
  const tl = gsap.timeline({});

  useEffect(() => {
    tl.from(".texto", { translateX: "-50%", duration: 0.8 });
    tl.from(".avion", {
      duration: 1.2,
      translateX: "-300%",
      translateY: "10%",
      ease: "circ.out",
    });
    tl.from(".estrella", { opacity: 0, duration: 1 });
    tl.from(".mainform-overlay", { opacity: 0, translateX: -50 });
    tl.to("#logoytitulo", { opacity: 0 });
  }, []);

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Conócenos - Aerospace, el límite lo pones tú"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://aerospace.vercel.app/icon.png"
        />
        <meta
          property="og:description"
          content="Vuela con Aerospace a Méxcio y el mundo, con los mejores precios"
        />
        <title>¡Reserva tu vuelo! - Aerospace, el límite lo pones tú</title>
        <meta
          name="description"
          content="Vuela con Aerospace a Méxcio y el mundo, con los mejores precios"
        />
      </Head>
      <Banner />
      <MainForm />
    </>
  );
}
