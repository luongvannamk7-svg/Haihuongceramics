'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-2">Liên Hệ</p>
        <h1 className="text-3xl font-bold text-[#2C2C2C]">Hỗ Trợ & Tư Vấn</h1>
        <p className="text-[#6B6B6B] mt-3 max-w-xl mx-auto">Đội ngũ tư vấn của Hải Hương Ceramics sẵn sàng hỗ trợ miễn phí mọi yêu cầu về gạch ốp lát và thiết bị vệ sinh tại Sơn La – Mộc Châu</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="space-y-6">
          <div className="bg-white border border-[#E0D8CF] rounded-sm p-6">
            <h2 className="font-bold text-[#2C2C2C] mb-5">Thông Tin Liên Hệ</h2>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: 'Showroom', value: 'Thị trấn Mộc Châu, huyện Mộc Châu, tỉnh Sơn La' },
                { icon: Phone, label: 'Hotline / Zalo', value: '0399.925.882', href: 'tel:0399925882' },
                { icon: Mail, label: 'Email', value: 'info@haihuongceramics.com', href: 'mailto:info@haihuongceramics.com' },
                { icon: Clock, label: 'Giờ làm việc', value: 'Thứ 2 – Thứ 7: 8:00 – 17:30' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#C4933F]/10 rounded-sm flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#C4933F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#9B8E82] font-medium mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-[#2C2C2C] hover:text-[#C4933F] transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm text-[#2C2C2C]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-[#E8E0D5] rounded-sm h-64 flex items-center justify-center border border-[#E0D8CF]">
            <div className="text-center">
              <MapPin size={32} className="text-[#C4933F] mx-auto mb-2" />
              <p className="text-sm text-[#6B6B6B] font-medium">Thị trấn Mộc Châu, Sơn La</p>
              <p className="text-xs text-[#9B8E82] mt-1">Kho gạch & showroom gần 3000m²</p>
              <a
                href="https://maps.google.com/?q=Thị+trấn+Mộc+Châu,+Mộc+Châu,+Sơn+La"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C4933F] underline mt-2 block"
              >
                Xem trên Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border border-[#E0D8CF] rounded-sm p-6">
          <h2 className="font-bold text-[#2C2C2C] mb-5">Gửi Yêu Cầu Tư Vấn</h2>

          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={28} className="text-green-600" />
              </div>
              <h3 className="font-bold text-[#2C2C2C] mb-2">Gửi thành công!</h3>
              <p className="text-sm text-[#6B6B6B]">Chúng tôi sẽ liên hệ lại trong vòng 30 phút.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Họ và tên <span className="text-red-500">*</span></label>
                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Nguyễn Văn A" className="w-full border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Số điện thoại <span className="text-red-500">*</span></label>
                  <input required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="0901.234.567" className="w-full border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Email</label>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="email@example.com" className="w-full border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Nội dung tư vấn <span className="text-red-500">*</span></label>
                <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Mô tả yêu cầu của bạn: diện tích, phong cách, ngân sách..." className="w-full border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] resize-none" />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C4933F] hover:bg-[#D4A853] disabled:opacity-60 text-white py-3.5 font-semibold text-sm transition-colors"
              >
                {loading ? 'Đang gửi...' : 'Gửi Yêu Cầu Tư Vấn'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
