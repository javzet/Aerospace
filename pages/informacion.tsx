import Link from "next/link";

export default function Informacion() {
  return (
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
              <li>Christopher Pérez Estrada</li>
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
  );
}
