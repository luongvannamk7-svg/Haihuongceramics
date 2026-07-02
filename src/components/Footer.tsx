import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-5">
            <Image src="/logo.jpg" alt="Hải Hương Ceramics" width={160} height={56} className="h-14 w-auto object-contain brightness-150" />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Đơn vị chuyên cung cấp giải pháp về gạch ốp lát, thiết bị phòng tắm, thiết bị điện nước tại Sơn La và Mộc Châu. Hơn 20 năm kinh nghiệm, hơn 30 đại lý, kho gạch gần 3000m² tại Mộc Châu.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/haihuongceramic" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#C4933F] rounded-sm flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Sản phẩm */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-widest text-[#C4933F] mb-5">Sản Phẩm</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              { label: 'Gạch Ốp Lát', href: '/san-pham?danh-muc=gach-op-lat' },
              { label: 'Ngói PRIME', href: '/san-pham?danh-muc=ngoi-prime' },
              { label: 'Thiết Bị Vệ Sinh Roy', href: '/san-pham?danh-muc=thiet-bi-ve-sinh' },
            ].map(item => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-[#C4933F] transition-colors">{item.label}</Link>
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
              <span>Thị trấn Mộc Châu, huyện Mộc Châu, tỉnh Sơn La</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-[#C4933F] shrink-0" />
              <a href="tel:0399925882" className="hover:text-[#C4933F] transition-colors">0399.925.882</a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-[#C4933F] shrink-0" />
              <a href="mailto:info@haihuongceramics.com" className="hover:text-[#C4933F] transition-colors">info@haihuongceramics.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
        © 2026 Công ty TNHH Hải Hương Mộc Châu. Bản quyền thuộc về công ty.
      </div>
    </footer>
  )
}
