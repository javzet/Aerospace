import { Calendario } from "../../helpers/calendarHelper";
import { MesProps } from "../../types/types";

export const Mes = ({
  className,
  year,
  month,
  children,
  onClick,
}: MesProps) => {
  const mes = new Calendario().mes(year, month);

  return (
    <div className={`mes ${className ? className : ""}`}>
      {children}
      <ol className="mes-container">
        <li className="mes-dia">Lun</li>
        <li className="mes-dia">Mar</li>
        <li className="mes-dia">Mié</li>
        <li className="mes-dia">Jue</li>
        <li className="mes-dia">Vie</li>
        <li className="mes-dia">Sáb</li>
        <li className="mes-dia">Dom</li>
        {mes.diasMes.map((dia) => (
          <li
            className={
              dia + 1 === 1
                ? `mes-first-day-${mes.primerDia.number.toString()} mes-day`
                : "mes-day"
            }
            key={dia}
            onClick={onClick}
            value={dia + 1}
          >
            {dia + 1}
          </li>
        ))}
      </ol>
    </div>
  );
};
