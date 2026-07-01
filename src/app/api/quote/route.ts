import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, company, city, categories, projectType, area, budget, message, type } = body

    // Build email subject and body based on form type
    let subject = ''
    let htmlBody = ''

    if (type === 'dealer') {
      subject = `[Đại Lý Mới] ${company} – ${city}`
      htmlBody = `
        <h2 style="color:#C4933F">Đơn Đăng Ký Đại Lý Mới</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;width:150px">Họ tên</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Công ty</td><td style="padding:8px;border:1px solid #eee">${company}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Điện thoại</td><td style="padding:8px;border:1px solid #eee">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Khu vực</td><td style="padding:8px;border:1px solid #eee">${city}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Giới thiệu</td><td style="padding:8px;border:1px solid #eee">${message || 'Không có'}</td></tr>
        </table>
      `
    } else {
      subject = `[Báo Giá] ${name} – ${projectType || 'Chưa xác định'} – ${area || '?'}m²`
      htmlBody = `
        <h2 style="color:#C4933F">Yêu Cầu Báo Giá Mới</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;width:150px">Họ tên</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Điện thoại</td><td style="padding:8px;border:1px solid #eee">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email || 'Không có'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Loại công trình</td><td style="padding:8px;border:1px solid #eee">${projectType || 'Không xác định'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Diện tích</td><td style="padding:8px;border:1px solid #eee">${area ? area + ' m²' : 'Chưa xác định'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Ngân sách</td><td style="padding:8px;border:1px solid #eee">${budget || 'Chưa xác định'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Sản phẩm</td><td style="padding:8px;border:1px solid #eee">${Array.isArray(categories) ? categories.join(', ') : 'Chưa chọn'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Ghi chú</td><td style="padding:8px;border:1px solid #eee">${message || 'Không có'}</td></tr>
        </table>
      `
    }

    // Send via nodemailer if configured
    const nodemailerAvailable = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)

    if (nodemailerAvailable) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `"Hải Hương Ceramics Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        subject,
        html: htmlBody,
        replyTo: email || undefined,
      })
    } else {
      // Log to console in dev when SMTP not configured
      console.log('[Quote/Dealer form submission]', { subject, name, phone, email })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Quote API error:', err)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
