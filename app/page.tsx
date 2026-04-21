"use client";

import { useState } from "react";

export default function Home() {
  const [empresas, setEmpresas] = useState<any[]>([]);
  const [contactos, setContactos] = useState<any[]>([]);
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState<string | null>(null);

  const buscar = async () => {
    const res = await fetch("/api/empresas");
    const data = await res.json();
    setEmpresas(data.data);
  };

  const verContactos = async (rut: string) => {
    const res = await fetch(`/api/contactos?rut=${rut}`);
    const data = await res.json();

    setEmpresaSeleccionada(rut);
    setContactos(data.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Prospexa</h1>

      <button onClick={buscar}>Buscar empresas</button>

      <div style={{ marginTop: 20 }}>
        {empresas.map((e, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
            <h3>{e.nombre}</h3>
            <p>RUT: {e.rut}</p>

            <button onClick={() => verContactos(e.rut)}>
              Ver contactos
            </button>

            {empresaSeleccionada === e.rut && (
              <div style={{ marginTop: 10 }}>
                <h4>Contactos:</h4>

                {contactos.map((c, i) => (
                  <div key={i}>
                    {c.nombre} {c.apellido} — {c.cargo}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}