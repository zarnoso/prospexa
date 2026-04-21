"use client";

import { useState } from "react";

export default function Home() {
  const [rut, setRut] = useState("");
  const [result, setResult] = useState<any>(null);

  const buscar = async () => {
    const url = `https://zeus.sii.cl/cvc/stc/stc.html?RUT=${rut}`;

    const res = await fetch(url);
    const html = await res.text();

    setResult(html.substring(0, 500));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Buscar empresa SII</h1>

      <input
        value={rut}
        onChange={(e) => setRut(e.target.value)}
        placeholder="RUT sin puntos"
      />

      <button onClick={buscar}>Buscar</button>

      <pre>{result}</pre>
    </div>
  );
}