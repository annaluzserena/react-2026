import { useState } from "react";

function ContadorLimitado() {
  const [contar, setContar] = useState(0);

  return (
    <div className="contador-limitado">
      <span
        className={`contador-limitado_contador${contar < 5 ? " bajo" : contar >= 5 && contar <= 8 ? " medio" : " alto"}`}
      >
        Contador: {contar}
      </span>
      <button disabled={contar === 0} onClick={() => setContar(contar - 1)}>
        -
      </button>
      <button disabled={contar === 10} onClick={() => setContar(contar + 1)}>
        +
      </button>
    </div>
  );
}

export default ContadorLimitado;
