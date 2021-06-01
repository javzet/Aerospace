import { getMonthName } from "../../helpers/calendarHelper";

export const CalendarioHeader = ({
  handleLessMonth,
  year,
  month,
  handleAddMonth,
}) => {
  return (
    <div className="mes-header">
      <div className="arrow-icon" onClick={handleLessMonth}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="mes-titulo">
        <span className="mes">{getMonthName(month)}</span>{" "}
        <span className="year">{year}</span>
      </div>
      <div className="arrow-icon" onClick={handleAddMonth}>
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};
