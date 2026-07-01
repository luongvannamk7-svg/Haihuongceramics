'use client'
import { useState } from 'react'
import { Check, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

const productCategories = [
  'Gạch Ốp Tường',
  'Gạch Lát Nền',
  'Gạch Ngoại Thất',
  'Thiết Bị Vệ Sinh',
  'Vòi Sen & Phụ Kiện',
  'Trọn Bộ Phòng Tắm',
]

export default function QuotePage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    area: '',
    categories: [] as string[],
    budget: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleCategory = (cat: string) => {
    setForm(f => ({
      ...f,
      categories: f.categories.includes(cat)
        ? f.categories.filter(c => c !== cat)
        : [...f.categories, cat],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'quote' }),
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-[#F8F5F0] min-h-screen">
      {/* Header */}
      <div className="bg-[#2C2C2C] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-3">Miễn Phí</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Yêu Cầu Báo Giá</h1>
          <p className="text-gray-300 text-sm max-w-lg mx-auto">
            Điền thông tin công trình, chúng tôi sẽ gửi báo giá chi tiết trong vòng 2 giờ làm việc.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 grid lg:grid-cols-3 gap-10">
        {/* Left: contact info */}
        <div className="space-y-6 lg:order-2">
          <div className="bg-white border border-[#E0D8CF] p-6">
            <h3 className="font-bold text-[#2C2C2C] mb-4 text-sm">Liên Hệ Trực Tiếp</h3>
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Hotline tư vấn', value: '0901.234.567', href: 'tel:0901234567' },
                { icon: Mail, label: 'Email', value: 'baogial@haihuongceramics.vn', href: 'mailto:baogial@haihuongceramics.vn' },
                { icon: Clock, label: 'Giờ làm việc', value: 'T2–T7: 8:00 – 17:30', href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-3">
                  <div className="w-8 h-8 bg-[#C4933F]/10 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-[#C4933F]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#9B8E82] font-medium">{label}</p>
                    {href ? (
                      <a href={href} className="text-xs text-[#2C2C2C] hover:text-[#C4933F] transition-colors font-medium">{value}</a>
                    ) : (
                      <p className="text-xs text-[#2C2C2C] font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#C4933F] p-6 text-white">
            <h3 className="font-bold mb-3 text-sm">Cam Kết Của Chúng Tôi</h3>
            <ul className="space-y-2 text-xs text-white/90">
              {[
                'Báo giá chi tiết trong 2 giờ',
                'Tư vấn miễn phí tại showroom',
                'So sánh vật liệu trực tiếp',
                'Hỗ trợ đo đạc công trình',
                'Bảo hành sản phẩm 12 tháng',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={13} className="shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-2 lg:order-1">
          {sent ? (
            <div className="bg-white border border-[#E0D8CF] p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Check size={36} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#2C2C2C] mb-3">Gửi Thành Công!</h2>
              <p className="text-[#6B6B6B] mb-6 text-sm max-w-sm mx-auto">
                Chúng tôi đã nhận được yêu cầu của bạn. Chuyên viên tư vấn sẽ liên hệ trong vòng 2 giờ làm việc.
              </p>
              <a
                href="/san-pham"
                className="inline-flex items-center gap-2 bg-[#C4933F] text-white px-6 py-3 text-sm font-semibold hover:bg-[#D4A853] transition-colors"
              >
                Khám Phá Thêm Sản Phẩm <ArrowRight size={15} />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-[#E0D8CF] p-8 space-y-6">
              <h2 className="font-bold text-[#2C2C2C] text-lg">Thông Tin Yêu Cầu</h2>

              {/* Contact info */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Họ và tên <span className="text-red-500">*</span></label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Nguyễn Văn A" className="w-full border border-[#E0D8CF] px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Số điện thoại <span className="text-red-500">*</span></label>
                  <input required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="0901.234.567" className="w-full border border-[#E0D8CF] px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Email</label>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="email@example.com" className="w-full border border-[#E0D8CF] px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Loại công trình</label>
                  <select value={form.projectType} onChange={e => setForm(f => ({ ...f, projectType: e.target.value }))} className="w-full border border-[#E0D8CF] px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] bg-white">
                    <option value="">Chọn loại công trình</option>
                    {['Biệt thự / Nhà ở', 'Căn hộ chung cư', 'Khách sạn / Resort', 'Văn phòng / Thương mại', 'Nhà hàng / F&B', 'Khác'].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Product categories */}
              <div>
                <label className="block text-xs font-medium text-[#2C2C2C] mb-2.5">Sản phẩm cần báo giá <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {productCategories.map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={`text-xs py-2.5 px-3 border text-left transition-colors ${
                        form.categories.includes(cat)
                          ? 'bg-[#C4933F] text-white border-[#C4933F]'
                          : 'bg-white text-[#6B6B6B] border-[#E0D8CF] hover:border-[#C4933F]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Diện tích cần thi công (m²)</label>
                  <input type="number" min="0" value={form.area} onChange={e => setForm(f => ({ ...f, area: e.target.value }))} placeholder="Ví dụ: 150" className="w-full border border-[#E0D8CF] px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Ngân sách dự kiến</label>
                  <select value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} className="w-full border border-[#E0D8CF] px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] bg-white">
                    <option value="">Chọn ngân sách</option>
                    {['Dưới 50 triệu', '50 – 100 triệu', '100 – 300 triệu', '300 – 500 triệu', 'Trên 500 triệu'].map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Ghi chú thêm</label>
                <textarea rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Mô tả thêm về yêu cầu thiết kế, phong cách mong muốn, hoặc câu hỏi cụ thể..." className="w-full border border-[#E0D8CF] px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] resize-none" />
              </div>

              <button
                type="submit"
                disabled={loading || form.categories.length === 0}
                className="w-full bg-[#C4933F] hover:bg-[#D4A853] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                {loading ? 'Đang gửi...' : (<>Gửi Yêu Cầu Báo Giá <ArrowRight size={16} /></>)}
              </button>
              <p className="text-center text-[11px] text-[#9B8E82]">* Vui lòng chọn ít nhất một danh mục sản phẩm</p>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
