export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const rut = searchParams.get("rut");

    if (!rut) {
      return Response.json({ ok: false, error: "Falta RUT" });
    }

    const url = `https://zeus.sii.cl/cvc/stc/stc.html?RUT=${rut}`;
    const res = await fetch(url);
    const html = await res.text();

    // 🧠 PARSEO BÁSICO (primer nivel)
    const nombreMatch = html.match(/Razón Social:<\/td><td[^>]*>(.*?)<\/td>/i);
    const estadoMatch = html.match(/Estado:<\/td><td[^>]*>(.*?)<\/td>/i);
    const actividadMatch = html.match(/Actividad Económica:<\/td><td[^>]*>(.*?)<\/td>/i);

    const data = {
      rut,
      nombre: nombreMatch ? nombreMatch[1].trim() : null,
      estado: estadoMatch ? estadoMatch[1].trim() : null,
      actividad: actividadMatch ? actividadMatch[1].trim() : null,
    };

    return Response.json({
      ok: true,
      data,
    });

  } catch (error: any) {
    return Response.json({
      ok: false,
      error: error.message,
    });
  }
}