export async function GET() {
  try {
    const url = `${process.env.CMF_BASE_URL}/instituciones`;

    const res = await fetch(url, {
      headers: {
        apikey: process.env.CMF_API_KEY!,
      },
    });

    const text = await res.text();

    return Response.json({
      ok: res.ok,
      status: res.status,
      url,
      response: text,
    });

  } catch (error: any) {
    return Response.json({
      ok: false,
      error: error.message,
    });
  }
}