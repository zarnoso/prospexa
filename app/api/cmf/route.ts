export async function GET() {
  try {
    const url = `${process.env.CMF_BASE_URL}/uf?apikey=${process.env.CMF_API_KEY}&formato=json`;

    const res = await fetch(url);
    const data = await res.json();

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