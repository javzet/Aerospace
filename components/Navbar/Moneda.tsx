import { useState } from "react";

export const Monedabtn = ({ className }) => {
  const [moneda, setMoneda] = useState(false);
  return (
    <button className={className} onClick={() => setMoneda(!moneda)}>
      {moneda ? "USD" : "MXN"}
    </button>
  );
};
