"use client";

import { useState } from "react";

export default function Home() {
  const [rut, setRut] = useState("");
  const [result, setResult] = useState("");

  const buscar = async () => {
    try {
      const url = `https://zeus.sii.cl/cvc/stc/stc.html?RUT=${rut}`;

      const res = await fetch(url);
      const html = await res.text();

      setResult(html.substring(0, 500));
    } catch (error) {
      setResult("Error al hacer fetch");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Buscar empresa SII</h1>

      <input
        value={rut}
        onChange={(e) => setRut(e.target.value)}
        placeholder="RUT sin puntos"
        style={{ border: "1px solid black", padding: 5 }}
      />

      <button
        onClick={buscar}
        style={{
          marginLeft: 10,
          padding: "5px 10px",
          background: "black",
          color: "white",
          cursor: "pointer",
        }}
      >
        Buscar
      </button>

      <pre style={{ marginTop: 20 }}>{result}</pre>
    </div>
  );
}