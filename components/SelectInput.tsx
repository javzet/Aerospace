import { useState } from "react";
import { DataSelectProps, SelectProps } from "../types/types";

export const Select = ({ name, id, className, data }: SelectProps) => {
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

export const TestSelect = ({ className, data }) => {
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
