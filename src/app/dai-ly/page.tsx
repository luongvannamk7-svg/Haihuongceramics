'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Check, Building2, Award, TrendingUp, Users } from 'lucide-react'

const dealers = [
  {
    id: 1,
    name: 'Hải Hương Ceramics – Chi Nhánh Hà Nội',
    address: '45 Đường Hoàng Quốc Việt, Cầu Giấy, Hà Nội',
    phone: '024.3456.7890',
    email: 'hanoi@haihuongceramics.vn',
    region: 'Miền Bắc',
    isMain: true,
  },
  {
    id: 2,
    name: 'Showroom Hải Hương – TP.HCM (Trụ Sở Chính)',
    address: '123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM',
    phone: '028.9012.3456',
    email: 'hcm@haihuongceramics.vn',
    region: 'Miền Nam',
    isMain: true,
  },
  {
    id: 3,
    name: 'Đại Lý Minh Đức – Đà Nẵng',
    address: '89 Đường Nguyễn Văn Linh, Thanh Khê, Đà Nẵng',
    phone: '0236.345.6789',
    email: 'danang@haihuongceramics.vn',
    region: 'Miền Trung',
    isMain: false,
  },
  {
    id: 4,
    name: 'Đại Lý Hoàng Phát – Cần Thơ',
    address: '12 Đường 30/4, Ninh Kiều, Cần Thơ',
    phone: '0292.234.5678',
    email: 'cantho@haihuongceramics.vn',
    region: 'Miền Nam',
    isMain: false,
  },
  {
    id: 5,
    name: 'Đại Lý Bảo Khánh – Nha Trang',
    address: '67 Đường Trần Phú, Lộc Thọ, Nha Trang, Khánh Hòa',
    phone: '0258.456.7890',
    email: 'nhatrang@haihuongceramics.vn',
    region: 'Miền Trung',
    isMain: false,
  },
  {
    id: 6,
    name: 'Đại Lý Tiến Thành – Hải Phòng',
    address: '234 Đường Lạch Tray, Ngô Quyền, Hải Phòng',
    phone: '0225.678.9012',
    email: 'haiphong@haihuongceramics.vn',
    region: 'Miền Bắc',
    isMain: false,
  },
]

const regions = ['Tất cả', 'Miền Bắc', 'Miền Trung', 'Miền Nam']

const benefits = [
  { icon: Award, title: 'Chiết Khấu Độc Quyền', desc: 'Giá đại lý ưu đãi, chiết khấu lên đến 25% so với giá lẻ tùy theo sản lượng' },
  { icon: TrendingUp, title: 'Hỗ Trợ Marketing', desc: 'Cung cấp catalog, banner, tư vấn trưng bày và hỗ trợ quảng cáo khu vực' },
  { icon: Building2, title: 'Đào Tạo Chuyên Sâu', desc: 'Đào tạo kiến thức sản phẩm, kỹ năng tư vấn và kỹ thuật thi công' },
  { icon: Users, title: 'Chính Sách Bảo Hành', desc: 'Hỗ trợ đổi trả, bảo hành sản phẩm trực tiếp từ nhà máy' },
]

export default function DealerPage() {
  const [activeRegion, setActiveRegion] = useState('Tất cả')
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', city: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const filtered = activeRegion === 'Tất cả' ? dealers : dealers.filter(d => d.region === activeRegion)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'dealer' }),
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#2C2C2C] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=60" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-3">Hệ Thống Phân Phối</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mạng Lưới Đại Lý</h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            Hơn 50 đại lý ủy quyền trên toàn quốc — tìm showroom gần bạn nhất để trải nghiệm trực tiếp sản phẩm Hải Hương Ceramics.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-2">Quyền Lợi</p>
            <h2 className="text-2xl font-bold text-[#2C2C2C]">Lợi Ích Khi Trở Thành Đại Lý</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#F8F5F0] p-6 border border-[#E0D8CF]">
                <div className="w-11 h-11 bg-[#C4933F]/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#C4933F]" />
                </div>
                <h3 className="font-semibold text-[#2C2C2C] mb-2 text-sm">{title}</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer map/list */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-2">Địa Điểm</p>
            <h2 className="text-2xl font-bold text-[#2C2C2C]">Tìm Showroom Gần Bạn</h2>
          </div>

          {/* Filter */}
          <div className="flex gap-2 justify-center mb-8 flex-wrap">
            {regions.map(r => (
              <button
                key={r}
                onClick={() => setActiveRegion(r)}
                className={`px-5 py-2 text-sm font-medium transition-colors border ${
                  activeRegion === r
                    ? 'bg-[#C4933F] text-white border-[#C4933F]'
                    : 'bg-white text-[#6B6B6B] border-[#E0D8CF] hover:border-[#C4933F] hover:text-[#C4933F]'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(dealer => (
              <div key={dealer.id} className={`bg-white border p-5 ${dealer.isMain ? 'border-[#C4933F]' : 'border-[#E0D8CF]'}`}>
                {dealer.isMain && (
                  <span className="inline-block bg-[#C4933F] text-white text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 mb-3">
                    Showroom chính
                  </span>
                )}
                <h3 className="font-semibold text-[#2C2C2C] text-sm mb-3 leading-snug">{dealer.name}</h3>
                <div className="space-y-2 text-xs text-[#6B6B6B]">
                  <div className="flex gap-2">
                    <MapPin size={13} className="text-[#C4933F] shrink-0 mt-0.5" />
                    <span>{dealer.address}</span>
                  </div>
                  <div className="flex gap-2">
                    <Phone size={13} className="text-[#C4933F] shrink-0" />
                    <a href={`tel:${dealer.phone.replace(/\./g, '')}`} className="hover:text-[#C4933F] transition-colors">{dealer.phone}</a>
                  </div>
                  <div className="flex gap-2">
                    <Mail size={13} className="text-[#C4933F] shrink-0" />
                    <a href={`mailto:${dealer.email}`} className="hover:text-[#C4933F] transition-colors truncate">{dealer.email}</a>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[#F0EBE3]">
                  <span className="text-[11px] text-[#9B8E82] font-medium uppercase tracking-wide">{dealer.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-2">Hợp Tác</p>
            <h2 className="text-2xl font-bold text-[#2C2C2C]">Đăng Ký Trở Thành Đại Lý</h2>
            <p className="text-[#6B6B6B] mt-2 text-sm">Điền thông tin bên dưới, chúng tôi sẽ liên hệ tư vấn trong 24 giờ.</p>
          </div>

          {sent ? (
            <div className="text-center py-12 bg-[#F8F5F0] border border-[#E0D8CF]">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={28} className="text-green-600" />
              </div>
              <h3 className="font-bold text-[#2C2C2C] mb-2">Đăng ký thành công!</h3>
              <p className="text-sm text-[#6B6B6B]">Chúng tôi sẽ liên hệ lại trong vòng 24 giờ làm việc.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#F8F5F0] border border-[#E0D8CF] p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Họ và tên <span className="text-red-500">*</span></label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Nguyễn Văn A" className="w-full border border-[#E0D8CF] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Tên công ty / Cửa hàng <span className="text-red-500">*</span></label>
                  <input required value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="Công ty TNHH..." className="w-full border border-[#E0D8CF] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Số điện thoại <span className="text-red-500">*</span></label>
                  <input required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="0901.234.567" className="w-full border border-[#E0D8CF] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Email <span className="text-red-500">*</span></label>
                  <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="email@company.vn" className="w-full border border-[#E0D8CF] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Tỉnh / Thành phố hoạt động <span className="text-red-500">*</span></label>
                <input required value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} placeholder="TP.HCM, Hà Nội, Đà Nẵng..." className="w-full border border-[#E0D8CF] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Giới thiệu thêm về doanh nghiệp</label>
                <textarea rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Kinh nghiệm kinh doanh, diện tích showroom, địa chỉ cụ thể..." className="w-full border border-[#E0D8CF] bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] resize-none" />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C4933F] hover:bg-[#D4A853] disabled:opacity-60 text-white py-3.5 font-semibold text-sm transition-colors"
              >
                {loading ? 'Đang gửi...' : 'Gửi Đơn Đăng Ký'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
