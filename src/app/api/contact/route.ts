import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json()

    if (!name || !phone || !message) {
      return NextResponse.json({ success: false, error: 'Thiếu thông tin bắt buộc' }, { status: 400 })
    }

    const subject = `[Tư Vấn] ${name} – ${phone}`
    const htmlBody = `
      <h2 style="color:#C4933F">Yêu Cầu Tư Vấn Mới</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;width:120px">Họ tên</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Điện thoại</td><td style="padding:8px;border:1px solid #eee">${phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email || 'Không có'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Nội dung</td><td style="padding:8px;border:1px solid #eee">${message}</td></tr>
      </table>
    `

    const nodemailerAvailable = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)

    if (nodemailerAvailable) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })
      await transporter.sendMail({
        from: `"Hải Hương Ceramics" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        subject,
        html: htmlBody,
        replyTo: email || undefined,
      })
    } else {
      console.log('[Contact form]', { name, phone, email, message })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
