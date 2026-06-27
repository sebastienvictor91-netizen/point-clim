export async function handler(event: any) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const data = JSON.parse(event.body || "{}");

  const prestationLabel: Record<string, string> = {
    installation: "Installation climatisation",
    remplacement: "Remplacement",
    entretien: "Entretien",
    depannage: "Dépannage",
  };

  const deptLabel: Record<string, string> = {
    "75": "Paris (75)",
    "77": "Seine-et-Marne (77)",
    "78": "Yvelines (78)",
    "91": "Essonne (91)",
    "92": "Hauts-de-Seine (92)",
    "93": "Seine-Saint-Denis (93)",
    "94": "Val-de-Marne (94)",
    "95": "Val-d'Oise (95)",
  };

  const now = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    dateStyle: "short",
    timeStyle: "short",
  });

  const phoneHref = `tel:${data.telephone || ""}`;
  const mailHref = `mailto:${data.email || ""}`;

  const html = `
  <div style="margin:0;padding:0;background:#f3f7fb;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
    <div style="max-width:720px;margin:0 auto;padding:28px 14px;">
      <div style="background:linear-gradient(135deg,#071b45,#0b63f6);border-radius:24px 24px 0 0;padding:28px;color:white;">
        <div style="font-size:30px;font-weight:900;letter-spacing:1px;">❄️ POINT CLIM</div>
        <div style="font-size:14px;opacity:.9;margin-top:6px;">Climatisation • Pompes à chaleur • Dépannage 7j/7</div>
        <div style="display:inline-block;margin-top:18px;background:#22c55e;color:white;padding:8px 14px;border-radius:999px;font-weight:800;font-size:13px;">NOUVEAU LEAD SITE WEB</div>
      </div>

      <div style="background:white;border:1px solid #e5edf6;border-top:0;border-radius:0 0 24px 24px;padding:28px;box-shadow:0 12px 35px rgba(15,23,42,.10);">
        <h1 style="margin:0 0 8px;font-size:28px;color:#08285c;">Nouvelle demande de devis</h1>
        <p style="margin:0 0 24px;color:#64748b;font-size:15px;">Une demande vient d’être envoyée depuis le formulaire du site POINT CLIM.</p>

        <div style="background:#eff6ff;border-left:5px solid #0b63f6;padding:16px 18px;border-radius:14px;margin-bottom:22px;">
          <div style="font-size:13px;color:#2563eb;font-weight:800;text-transform:uppercase;">Priorité</div>
          <div style="font-size:18px;font-weight:900;margin-top:4px;">À rappeler rapidement</div>
        </div>

        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;color:#64748b;width:38%;">Client</td>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-weight:800;">${data.nom || "Non renseigné"}</td>
          </tr>
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;color:#64748b;">Téléphone</td>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-weight:800;">
              <a href="${phoneHref}" style="color:#0b63f6;text-decoration:none;">${data.telephone || "Non renseigné"}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;color:#64748b;">E-mail</td>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-weight:800;">
              <a href="${mailHref}" style="color:#0b63f6;text-decoration:none;">${data.email || "Non renseigné"}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;color:#64748b;">Prestation</td>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-weight:800;">${prestationLabel[data.prestation] || data.prestation || "Non renseigné"}</td>
          </tr>
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;color:#64748b;">Département</td>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-weight:800;">${deptLabel[data.departement] || data.departement || "Non renseigné"}</td>
          </tr>
          <tr>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;color:#64748b;">Surface</td>
            <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-weight:800;">${data.surface || "Non renseigné"}</td>
          </tr>
        </table>

        <div style="margin-top:24px;">
          <div style="font-size:13px;color:#2563eb;font-weight:900;text-transform:uppercase;margin-bottom:8px;">Message du client</div>
          <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;padding:18px;font-size:16px;line-height:1.6;">
            ${data.message || "Aucun message précisé."}
          </div>
        </div>

        <div style="margin-top:24px;background:#f8fafc;border-radius:16px;padding:16px;color:#475569;font-size:14px;">
          <b>Reçu le :</b> ${now}<br/>
          <b>Source :</b> Formulaire site web POINT CLIM
        </div>

        <div style="margin-top:28px;text-align:center;">
          <a href="${phoneHref}" style="display:inline-block;background:#0b63f6;color:white;text-decoration:none;padding:15px 24px;border-radius:999px;font-weight:900;margin:6px;">📞 Appeler le client</a>
          <a href="${mailHref}" style="display:inline-block;background:#22c55e;color:white;text-decoration:none;padding:15px 24px;border-radius:999px;font-weight:900;margin:6px;">✉️ Répondre par e-mail</a>
        </div>

        <div style="margin-top:30px;border-top:1px solid #e5e7eb;padding-top:18px;text-align:center;color:#64748b;font-size:13px;">
          <b style="color:#08285c;">POINT CLIM</b><br/>
          Climatisation • PAC • Entretien • Dépannage 7j/7<br/>
          E-mail automatique envoyé depuis le CRM POINT CLIM.
        </div>
      </div>
    </div>
  </div>
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
      subject: `🚨 Nouveau lead POINT CLIM - ${data.nom || "Client"}`,
      html,
    }),
  });

  if (!res.ok) {
    return { statusCode: 500, body: await res.text() };
  }

  return { statusCode: 200, body: "Email envoyé" };
}
