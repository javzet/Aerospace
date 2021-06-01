import { useEffect, useState } from "react";
import { getDayName, getMonthName } from "../helpers/calendarHelper";
import { DateInputProps } from "../types/types";
import { CalendarioHeader } from "./Calendario/CalendarioHeader";
import { Mes } from "./Calendario/Mes";

export const DateInput = ({ className, onClick }: DateInputProps) => {
  const [viewOptions, setViewOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState("Selecionar fecha");

  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(5);
  const [day, setDay] = useState(1);

  const handleViewOptions = () => {
    setCurrentValue(`${getMonthName(month)} ${year}`);
    setViewOptions(!viewOptions);
  };

  const handleOptionClick = (e: any) => {
    const dia = onClick(e);
    setDay(dia);
    setCurrentValue(`${dia} de ${getMonthName(month)} ${year}`);
    setViewOptions(false);
  };

  const handleAddMonth = () => {
    if (month >= 12) {
      setYear((year) => year + 1);
      setMonth(1);
    } else {
      setMonth((month) => month + 1);
    }
  };

  const handleLessMonth = () => {
    if (month <= 1) {
      setYear((year) => year - 1);
      setMonth(12);
    } else {
      setMonth((month) => month - 1);
    }
  };
  return (
    <div className="date-input">
      <div
        className={`input ${className ? className : ""}`}
        onClick={handleViewOptions}
      >
        <span className="current-value">{currentValue}</span>
      </div>
      {viewOptions && (
        <Mes
          year={year}
          month={month}
          className="calendario"
          onClick={handleOptionClick}
        >
          <CalendarioHeader
            year={year}
            month={month}
            handleAddMonth={handleAddMonth}
            handleLessMonth={handleLessMonth}
          />
        </Mes>
      )}
    </div>
  );
};
