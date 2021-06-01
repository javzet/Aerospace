export function getDayName(fecha: Date) {
  return [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ][new Date(fecha).getDay()];
}

export function getDayData(fecha: Date) {
  return {
    number: [7, 1, 2, 3, 4, 5, 6][new Date(fecha).getDay()],
    name: [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ][new Date(fecha).getDay()],
  };
}

export function getMonthName(mes: number, locale: string = "es") {
  const intl = new Intl.DateTimeFormat(locale, { month: "long" });
  return intl.format(new Date(2021, mes - 1));
}

export function calendarHelper() {
  const actualYear = 2021;
  const locale = "es";
  let meses = [...Array(12).keys()];
  const intl = new Intl.DateTimeFormat(locale, { month: "long" });
  const calendario = meses.map((mes) => {
    meses = [...meses, mes + 1];
    return {
      nombreMes: intl.format(new Date(actualYear, mes)),
      diasMes: [...Array(new Date(actualYear, mes + 1, 0).getDate()).keys()],
      primerDia: getDayData(new Date(actualYear, mes, 1)),
      ultimoDia: getDayData(new Date(actualYear, mes + 1, 0)),
    };
  });
  return calendario;
}

export function calendar(year: number, locale: string = "es") {
  let meses = [...Array(12).keys()];

  const intl = new Intl.DateTimeFormat(locale, { month: "long" });

  const calendario = meses.map((mes) => {
    meses = [...meses, mes + 1];

    return {
      nombreMes: intl.format(new Date(year, mes)),
      diasMes: [...Array(new Date(year, mes + 1, 0).getDate()).keys()],
      primerDia: getDayData(new Date(year, mes, 1)),
      ultimoDia: getDayData(new Date(year, mes + 1, 0)),
    };
  });
  return { calendario, year };
}

export class Calendario {
  private locale: string;
  private readonly intl: Intl.DateTimeFormat;
  private _meses = [...Array(12).keys()];

  constructor(locale: string = "es") {
    this.locale = locale;
    this.intl = new Intl.DateTimeFormat(this.locale, { month: "long" });
  }

  public calendario(year: number) {
    return {
      mesesCalendario: this._meses.map((mes) => {
        this._meses = [...this._meses, mes + 1];

        return {
          nombreMes: this.intl.format(new Date(year, mes)),
          diasMes: [...Array(new Date(year, mes + 1, 0).getDate()).keys()],
          primerDia: getDayData(new Date(year, mes, 1)),
          ultimoDia: getDayData(new Date(year, mes + 1, 0)),
        };
      }),
      currentYear: year,
    };
  }

  public mes(year: number, mes: number) {
    mes = mes - 1;
    return {
      nombreMes: this.intl.format(new Date(year, mes)),
      diasMes: [...Array(new Date(year, mes + 1, 0).getDate()).keys()],
      primerDia: getDayData(new Date(year, mes, 1)),
      ultimoDia: getDayData(new Date(year, mes + 1, 0)),
      year,
    };
  }
}
