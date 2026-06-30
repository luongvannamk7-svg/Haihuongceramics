'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ShoppingCart, Menu, X, Search, Phone } from 'lucide-react'
import { useCart } from '@/lib/cartStore'

const navLinks = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Sản Phẩm', href: '/san-pham' },
  { label: 'Gạch Ốp Tường', href: '/san-pham?danh-muc=gach-op-tuong' },
  { label: 'Gạch Lát Nền', href: '/san-pham?danh-muc=gach-lat-nen' },
  { label: 'Thiết Bị Vệ Sinh', href: '/san-pham?danh-muc=thiet-bi-ve-sinh' },
  { label: 'Liên Hệ', href: '/lien-he' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count } = useCart()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#2C2C2C] text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <span>Showroom: 123 Đường Lê Lợi, Quận 1, TP.HCM</span>
        <div className="flex items-center gap-4">
          <a href="tel:0901234567" className="flex items-center gap-1 hover:text-[#C4933F] transition-colors">
            <Phone size={12} /> 0901.234.567
          </a>
          <span>|</span>
          <span>T2–T7: 8:00 – 17:30</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#C4933F] rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-lg">HH</span>
          </div>
          <div>
            <div className="font-bold text-[#2C2C2C] text-lg leading-tight tracking-wide">HẢI HƯƠNG</div>
            <div className="text-[10px] text-[#9B8E82] tracking-[0.2em] uppercase">Ceramics</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#2C2C2C] hover:text-[#C4933F] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/san-pham"
            className="hidden md:flex items-center gap-1.5 text-sm text-[#6B6B6B] hover:text-[#C4933F] transition-colors"
            aria-label="Tìm kiếm"
          >
            <Search size={18} />
          </Link>

          <Link
            href="/gio-hang"
            className="relative flex items-center gap-1.5 text-sm text-[#2C2C2C] hover:text-[#C4933F] transition-colors"
            aria-label="Giỏ hàng"
          >
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C4933F] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>

          <button
            className="lg:hidden p-1 text-[#2C2C2C]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#E0D8CF] px-4 py-4 flex flex-col gap-3">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#2C2C2C] hover:text-[#C4933F] py-2 border-b border-[#E8E0D5] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
