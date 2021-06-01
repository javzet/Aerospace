import React, { FC } from "react";
import { getMonthName } from "../helpers/calendarHelper";
import { DataSelectProps } from "../types/types";
import { Calendario } from "./Calendario/Calendario";
import { Mes } from "./Calendario/Mes";
import { DateInput } from "./DateInput";
import { Select, TestSelect } from "./SelectInput";

export const MainForm: FC = () => {
  const tipo_vuelo: DataSelectProps[] = [
    { value: "completo", name: "Ida y vuelta" },
    { value: "sencillo", name: "Vuelo sencillo" },
  ];

  const ciudadOrigen: DataSelectProps[] = [];
  const ciudadDestino: DataSelectProps[] = [];

  const handleClickDay = ({ target }: { target: { value: string } }) => {
    console.log(target.value);
    return parseInt(target.value);
  };

  return (
    <div className="mainform-overlay">
      <div className="mainform">
        <div className="mainform-left">
          <h2>Vuela con Aerospace</h2>
          <form className="reservar-vuelo-form">
            <div className="form-control">
              <label htmlFor="vuelos-select">Tipo de vuelo</label>
              <TestSelect className="vuelos-select" data={tipo_vuelo} />
            </div>
            <div className="form-control">
              <label htmlFor="origen-select">Orígen</label>
              <TestSelect className="origen-select" data={ciudadOrigen} />
            </div>
            <div className="form-control">
              <label htmlFor="destino-select">Destino</label>
              <TestSelect className="destino-select" data={ciudadDestino} />
            </div>
            <div className="form-control">
              <label htmlFor="fecha">Fechas</label>
              <DateInput onClick={handleClickDay} />
            </div>
            {/* <Calendario /> */}
            {/* <Mes year={2021} month={1}>
              <span className="mes-titulo">{`${getMonthName(1)} ${2021}`}</span>
            </Mes> */}
            <button type="submit" className="reserva-vuelo-boton">
              Reserva tu vuelo
            </button>
          </form>
        </div>
        <div className="mainform-right">
          <h1>aaaaaaaaaa</h1>
        </div>
      </div>
    </div>
  );
};
