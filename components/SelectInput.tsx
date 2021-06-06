import { useState } from "react";
import { DataSelectProps } from "../types/types";

export const Select = ({ className, data }) => {
  const [currentValue, setCurrentValue] = useState("Selecionar");
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
      className={`select ${className ? className : ""}`}
      onClick={handleViewOptions}
    >
      {viewOptions && (
        <div className="options">
          {data.map((item: DataSelectProps) => (
            <div
              className={`select-option option ${
                item.className ? item.className : ""
              }`}
              key={item.value}
              onClick={handleOptionClick}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
      <span className="current-value">{currentValue}</span>
    </div>
  );
};
