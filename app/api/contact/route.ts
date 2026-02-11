import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_FORM_RECIPIENT_EMAIL,
  CONTACT_FORM_SENDER_EMAIL,
} = process.env

const createTransporter = () => {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      'Bitte setze die SMTP-Umgebungsvariablen (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS).'
    )
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, location, message } = body

    if (!name || !email || !phone || !location) {
      return NextResponse.json(
        { message: 'Bitte fülle alle Pflichtfelder aus.' },
        { status: 400 }
      )
    }

    const transporter = createTransporter()
    const recipient = CONTACT_FORM_RECIPIENT_EMAIL || SMTP_USER
    const sender = CONTACT_FORM_SENDER_EMAIL || SMTP_USER

    await transporter.sendMail({
      from: sender,
      to: recipient,
      subject: `Neue Kontaktanfrage von ${name}`,
      replyTo: email,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Telefon:</strong> ${phone}<br/>
        <strong>Ort:</strong> ${location}<br/>
        <strong>Nachricht:</strong><br/>
        <p>${message || 'Keine Nachricht hinterlassen.'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Beim Versenden ist ein unerwarteter Fehler aufgetreten.'
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
