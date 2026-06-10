import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { navn, bedrift, kontakt, type_arrangement } = await req.json()

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'LØA Nettside <noreply@linjeforeningenloa.no>',
      to: ['post@linjeforeningenloa.no'],
      subject: `Ny forespørsel fra ${bedrift}`,
      html: `
        <h2>Ny samarbeidsforespørsel</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;font-weight:bold;color:#555">Kontaktperson</td><td style="padding:8px">${navn}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Bedrift</td><td style="padding:8px">${bedrift}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555">Kontakt</td><td style="padding:8px">${kontakt}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Type arrangement</td><td style="padding:8px">${type_arrangement}</td></tr>
        </table>
      `,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
