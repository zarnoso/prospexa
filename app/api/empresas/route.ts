export async function GET() {
  return Response.json({
    ok: true,
    data: [
      {
        rut: "76086428",
        nombre: "EMPRESA DEMO SPA",
        giro: "Servicios de tecnología",
        region: "Metropolitana",
      },
      {
        rut: "96987654",
        nombre: "COMERCIAL XYZ LTDA",
        giro: "Retail",
        region: "Valparaíso",
      },
    ],
  });
}