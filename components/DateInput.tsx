import { useState } from "react";
import { getMonthName } from "../helpers/calendarHelper";
import { DateInputProps } from "../types/types";
import { Mes } from "./Calendario/Mes";

export const DateInput = ({ className }: DateInputProps) => {
  const [currentValue, setCurrentValue] = useState("Selecionar fecha");
  const [viewOptions, setViewOptions] = useState(false);

  const handleViewOptions = () => {
    setCurrentValue("Selecione una opción");
    setViewOptions(!viewOptions);
  };

  const handleOptionClick = () => {
    setViewOptions(false);
  };

  return (
    <div
      className={`date-input ${className ? className : ""}`}
      onClick={handleViewOptions}
    >
      <Mes year={2021} month={1} className="calendario">
        <div className="mes-header">
          <div className="arrow-icon">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="mes-titulo">
            <span className="mes">{getMonthName(1)}</span>{" "}
            <span className="year">{2021}</span>
          </div>
          <div className="arrow-icon">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </Mes>
      <span className="current-value">{currentValue}</span>
    </div>
  );
};
