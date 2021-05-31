import React, { FC } from "react";

interface DataSelectProps {
  name: string;
  value: string;
  className?: string;
}

interface SelectProps {
  name?: string;
  id: string | "className";
  className?: string;
  data: Array<DataSelectProps>;
}

const Select: FC<SelectProps> = ({ name, id, className, data }) => {
  return (
    <select
      name={name}
      id={id === className ? className : id}
      className={className ? className : ""}
    >
      {data.map((item: DataSelectProps) => (
        <option
          value={item.value}
          className={`select-option ${item.className ? item.className : ""}`}
          key={item.value}
        >
          {item.name}
        </option>
      ))}
    </select>
  );
};

export const MainForm: FC = () => {
  const tipo_vuelo: DataSelectProps[] = [
    { value: "completo", name: "Ida y vuelta" },
    { value: "sencillo", name: "Vuelo sencillo" },
  ];

  const ciudadOrigen: DataSelectProps[] = [];
  const ciudadDestino: DataSelectProps[] = [];

  return (
    <div className="mainform-overlay">
      <div className="mainform">
        <div className="mainform-left">
          <h2>Vuela con Aerospace</h2>
          <form>
            <Select
              data={tipo_vuelo}
              className={"vuelos-select"}
              id={"className"}
            />
            <div className="form-control">
              <label htmlFor="origen-select">Orígen</label>
              <Select
                data={ciudadOrigen}
                className={"origen-select"}
                id={"className"}
              />
            </div>
            <div className="form-control">
              <label htmlFor="destino-select">Destino</label>
              <Select
                data={ciudadDestino}
                className={"destino-select"}
                id={"className"}
              />
            </div>
            <div className="form-control">
              <label htmlFor="fecha">Fechas</label>
              <input type="date" id="fecha" />
            </div>
            <button type="submit">Reserva tu vuelo</button>
          </form>
        </div>
      </div>
    </div>
  );
};
