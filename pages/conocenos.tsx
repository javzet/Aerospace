import Head from "next/head";
import { AvionLogo } from "../components/Images/AvionLogo";
import { Section } from "../components/Section";

export default function Conocenos() {
  return (
    <>
      <Head>
        <title>
          Conoce a la aerolínea en la que: ¡el límite lo pones tú! - Aerospace,
          el límite lo pones tú
        </title>
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
          content="Nuestra misión convertirnos en la primera opción del público
                  que necesita viajar, satisfacer sus necesidades con excelencia y calidad, así como brindarles total seguridad, integridad con los más altos estándares."
        />
        <meta
          name="description"
          content="Nuestra misión convertirnos en la primera opción del público
                  que necesita viajar, satisfacer sus necesidades con excelencia y calidad, así como brindarles total seguridad, integridad con los más altos estándares."
        />
      </Head>
      <main className="conocenos">
        <div className="fondo"></div>
        <div className="conocenos-encabezado">
          <div className="fondo-avion">
            <AvionLogo />
          </div>
          <div className="center">
            <h1>Conoce a grupo Aerospace</h1>
            <p>
              Conoce más acerca de nosostros, entérate de nuestro origen, conoce
              nuestros valores. Descubre cúal es nuestra misón, y cómo es
              nuestra visión.
            </p>
          </div>
        </div>
        <div className="secciones-conocenos">
          <Section className="origen white content-center">
            <h2>Nuestro Orígen</h2>
            <p>
              El origen de nuestra compañía surge a partir de un acuerdo que se
              llevó a acabo con cada uno de los integrantes, ya que resultó un
              nombre sofisticado e inigualable. Así mismo tomamos en cuenta los
              objetivos y el impacto que deseamos tener hacia el público.
            </p>
            <img
              src="/aerospace-avion.jpg"
              alt="Cruce de aviones Aerospace"
              title="Avión Aerospace"
            />
          </Section>
          <Section className="mision blue content-center">
            <h2>Nuestra Misión</h2>
            <p>
              Nuestra misión convertirnos en la primera opción del público que
              necesita viajar, satisfacer sus necesidades con excelencia y
              calidad, así como brindarles total seguridad, integridad con los
              más altos estándares.
            </p>
            <img
              src="/aerospace-avion-servicio-calidad.jpg"
              alt="Servicio de calidad en Aerospace"
              title="Servicio de excelencia"
            />
          </Section>
          <Section className="vision blue content-center">
            <h2>Nuestra Visión</h2>
            <p>
              Nuestra visión es ser líderes en la prestación de servicios aéreos
              de excelencia y seguridad, convirtiéndonos así en la opción número
              uno para el público.
            </p>
            <img
              src="/aerospace-aviones.jpg"
              alt="Cruce de aviones Aerospace"
              title="Aviones Aerospace"
            />
          </Section>
          <Section className="valores white">
            <h2 className="content-center">Nuestros Valores</h2>
            <ul>
              <li>
                <h3>Seguridad y confianza:</h3>
                <p>
                  Cumplimos con los más altos estándares de seguridad; siendo
                  así brindando servicios totalmente confiables.
                </p>
              </li>
              <li>
                <h3>Eficiencia y Conectividad:</h3>
                <p>
                  Nos enfocamos en optimizar los recursos y potenciar la calidad
                  brindando un servicio rápido y confortable.
                </p>
              </li>
              <li>
                <h3>Calidad y Respeto:</h3>
                <p>
                  Queremos satisfacer con excelencia las necesidades del
                  público.
                </p>
              </li>
            </ul>
          </Section>
        </div>
      </main>
    </>
  );
}
