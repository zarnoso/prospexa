export async function GET(req: Request) {
  try {
    // 🔍 Obtener parámetros de la URL
    const { searchParams } = new URL(req.url);
    const rut = searchParams.get("rut");

    // ❌ Validación básica
    if (!rut) {
      return Response.json({
        ok: false,
        error: "Falta el parámetro rut",
      });
    }

    // 🧪 Datos mock (simulación de base de datos / CMF)
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

    // ✅ Respuesta exitosa
    return Response.json({
      ok: true,
      total: contactos.length,
      data: contactos,
    });

  } catch (error: any) {
    // 🚨 Manejo de error
    return Response.json({
      ok: false,
      error: error.message || "Error interno",
    });
  }
}