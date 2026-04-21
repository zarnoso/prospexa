export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const rut = searchParams.get("rut");

  // mock por ahora (luego metemos CMF real)
  return Response.json({
    ok: true,
    data: [
      {
        nombre: "Juan Pérez",
        cargo: "Gerente General",
        empresaRut: rut,
      },
      {
        nombre: "María González",
        cargo: "Directora Comercial",
        empresaRut: rut,
      },
    ],
  });
}