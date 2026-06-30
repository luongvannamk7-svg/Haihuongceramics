import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-[#C4933F] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">HH</span>
            </div>
            <div>
              <div className="font-bold text-white text-lg leading-tight">HẢI HƯƠNG</div>
              <div className="text-[10px] text-[#9B8E82] tracking-[0.2em] uppercase">Ceramics</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Chuyên cung cấp gạch ốp lát cao cấp và thiết bị vệ sinh nhập khẩu. Hơn 15 năm kinh nghiệm phục vụ các công trình dân dụng và thương mại toàn quốc.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#C4933F] rounded-sm flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#C4933F] rounded-sm flex items-center justify-center transition-colors" aria-label="Youtube">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Sản phẩm */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-widest text-[#C4933F] mb-5">Sản Phẩm</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {['Gạch Ốp Tường', 'Gạch Lát Nền', 'Gạch Ngoại Thất', 'Thiết Bị Vệ Sinh', 'Vòi Sen & Phụ Kiện'].map(item => (
              <li key={item}>
                <Link href="/san-pham" className="hover:text-[#C4933F] transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Chính sách */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-widest text-[#C4933F] mb-5">Chính Sách</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              { label: 'Chính sách vận chuyển', href: '#' },
              { label: 'Chính sách đổi trả', href: '#' },
              { label: 'Chính sách bảo hành', href: '#' },
              { label: 'Hướng dẫn đặt hàng', href: '#' },
              { label: 'Câu hỏi thường gặp', href: '#' },
            ].map(item => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-[#C4933F] transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-widest text-[#C4933F] mb-5">Liên Hệ</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin size={16} className="text-[#C4933F] shrink-0 mt-0.5" />
              <span>123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-[#C4933F] shrink-0" />
              <a href="tel:0901234567" className="hover:text-[#C4933F] transition-colors">0901.234.567</a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-[#C4933F] shrink-0" />
              <a href="mailto:info@haihuongceramics.vn" className="hover:text-[#C4933F] transition-colors">info@haihuongceramics.vn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
        © 2025 Hải Hương Ceramics. Bản quyền thuộc về công ty.
      </div>
    </footer>
  )
}
