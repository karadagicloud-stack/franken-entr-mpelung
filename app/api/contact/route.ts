import { NextResponse } from 'next/server'

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

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || '1e27a9aa-b77c-46e5-8bf1-1e80e1e89674'

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Neue Kontaktanfrage von ${name}`,
        from_name: 'Franken-Entrümpelung Website',
        name,
        email,
        phone,
        location,
        message: message || 'Keine Nachricht hinterlassen.',
      }),
    })

    const data = await response.json()

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Fehler beim Versenden')
    }

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
