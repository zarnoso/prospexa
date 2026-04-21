export async function GET() {
  try {
    const res = await fetch(
      `${process.env.CMF_BASE_URL}/instituciones`,
      {
        headers: {
          apikey: process.env.CMF_API_KEY!,
        },
      }
    );

    const data = await res.json();

    return Response.json({
      ok: true,
      total: data?.length || 0,
      data,
    });
  } catch (error) {
    return Response.json({
      ok: false,
      error: "Error conectando con CMF",
    });
  }
}