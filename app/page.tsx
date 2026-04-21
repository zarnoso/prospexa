export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const rut = searchParams.get("rut");

    if (!rut) {
      return Response.json({
        ok: false,
        error: "Falta el parámetro rut",
      });
    }

    // 🔹 MOCK DATA (luego aquí conectamos CMF real)
    const contactos = [
      {
        nombre: "Juan",
        apellido: "Pérez",
        cargo: "Gerente General",
        empresaRut: rut,
      },
      {
        nombre: "María",
        apellido: "González",
        cargo: "Directora Comercial",
        empresaRut: rut,
      },
    ];

    return Response.json({
      ok: true,
      total: contactos.length,
      data: contactos,
    });

  } catch (error: any) {
    return Response.json({
      ok: false,
      error: error.message,
    });
  }
}