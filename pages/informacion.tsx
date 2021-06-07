import Head from "next/head";
import Link from "next/link";

export default function Informacion() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Información del grupo - Aerospace, el límite lo pones tú"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Vuela con Aerospace a Méxcio y el mundo, con los mejores precios"
        />
        <title>Información del grupo - Aerospace, el límite lo pones tú</title>
        <meta
          name="description"
          content="Integrantes que conforman el grupo Aerospace"
        />
      </Head>
      <div className="fondo">
        <div className="informacion-overlay">
          <div className="informacion">
            <div className="informacion-container">
              <h1>Información del proyecto</h1>

              <p>
                Somos grupo <b>Aerospace</b> conformado por:
              </p>

              <ul className="integrantes">
                <li>Andrés Antonio León Morales</li>
                <li>Carisma Sánchez Acosta</li>
                <li>Areli Jazmín Morales Gonzáles</li>
                <li>Alex Andrés García Martínez</li>
                <li>Cristopher Pérez Estrada</li>
                <li>Mayra Aceves Romero</li>
                <li>Luis Javier Zetina Aguilar</li>
              </ul>

              <Link href="/">
                <button className="return-btn">
                  Volver a la página principal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
