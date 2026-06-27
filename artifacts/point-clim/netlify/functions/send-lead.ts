export async function handler(event: any) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const data = JSON.parse(event.body || "{}");

  const html = `
    <h2>Nouveau devis POINT CLIM</h2>
    <p><b>Nom :</b> ${data.nom}</p>
    <p><b>Téléphone :</b> ${data.telephone}</p>
    <p><b>Email :</b> ${data.email}</p>
    <p><b>Prestation :</b> ${data.prestation}</p>
    <p><b>Département :</b> ${data.departement}</p>
    <p><b>Surface :</b> ${data.surface}</p>
    <p><b>Message :</b> ${data.message || "Non précisé"}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "POINT CLIM <onboarding@resend.dev>",
      to: process.env.LEAD_EMAIL_TO,
      subject: "Nouveau devis POINT CLIM",
      html,
    }),
  });

  if (!res.ok) {
    return { statusCode: 500, body: await res.text() };
  }

  return { statusCode: 200, body: "Email envoyé" };
}
