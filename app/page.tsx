"use client";

import { useState } from "react";

export default function Home() {
  const [empresas, setEmpresas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const buscar = async () => {
    setLoading(true);
    const res = await fetch("/api/empresas");
    const data = await res.json();
    setEmpresas(data.data);
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HEADER estilo mapadata */}
      <div style={{
        background: "#0f172a",
        color: "white",
        padding: "20px"
      }}>
        <h1 style={{ margin: 0 }}>Prospexa</h1>
        <p style={{ margin: 0, opacity: 0.7 }}>
          Inteligencia comercial B2B
        </p>
      </div>

      {/* CONTENIDO */}
      <div style={{ padding: 20 }}>

        <h2>Buscar empresas</h2>

        <button
          onClick={buscar}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer"
          }}
        >
          {loading ? "Buscando..." : "Buscar empresas"}
        </button>

        {/* RESULTADOS */}
        <div style={{ marginTop: 20 }}>
          {empresas.map((e, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #e5e7eb",
                padding: 15,
                borderRadius: 10,
                marginBottom: 15,
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
              }}
            >
              <h3 style={{ margin: 0 }}>{e.nombre}</h3>

              <p style={{ margin: "5px 0" }}>
                <strong>RUT:</strong> {e.rut}
              </p>

              <p style={{ margin: "5px 0" }}>
                <strong>Giro:</strong> {e.giro}
              </p>

              <p style={{ margin: "5px 0" }}>
                <strong>Región:</strong> {e.region}
              </p>

              <button
                style={{
                  marginTop: 10,
                  padding: "6px 12px",
                  background: "#10b981",
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer"
                }}
              >
                Ver contactos
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}