import { useEffect, useState } from "react";
import {
  calendarHelper,
  calendar,
  Calendario as Can,
} from "../../helpers/calendarHelper";

export const Calendario = () => {
  const validYears = [2021, 2022];

  const calendarData = calendar(2021);

  return (
    <div className="calendario">
      {calendarData.calendario.map(({ nombreMes, diasMes, primerDia }) => (
        <div className="calendario-mes" key={nombreMes}>
          <span className="calendario-mes-year">{`${nombreMes} ${calendarData.year}`}</span>
          <ol className="caliendario-container">
            <li className="nombre-dia">Lun</li>
            <li className="nombre-dia">Mar</li>
            <li className="nombre-dia">Mié</li>
            <li className="nombre-dia">Jue</li>
            <li className="nombre-dia">Vie</li>
            <li className="nombre-dia">Sáb</li>
            <li className="nombre-dia">Dom</li>
            {diasMes.map((dia) => (
              <li
                className={
                  dia + 1 === 1
                    ? `first-day-${primerDia.number.toString()}`
                    : ""
                }
                key={dia}
                value={dia}
              >
                {dia + 1}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};
