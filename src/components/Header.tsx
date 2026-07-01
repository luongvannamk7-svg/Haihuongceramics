'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Trang Chủ', href: '/' },
  {
    label: 'Sản Phẩm',
    href: '/san-pham',
    children: [
      { label: 'Gạch Ốp Tường', href: '/san-pham?danh-muc=gach-op-tuong' },
      { label: 'Gạch Lát Nền', href: '/san-pham?danh-muc=gach-lat-nen' },
      { label: 'Thiết Bị Vệ Sinh', href: '/san-pham?danh-muc=thiet-bi-ve-sinh' },
      { label: 'Gạch Ngoại Thất', href: '/san-pham?danh-muc=gach-ngoai-that' },
    ],
  },
  { label: 'Dự Án', href: '/du-an' },
  { label: 'Blog', href: '/blog' },
  { label: 'Đại Lý', href: '/dai-ly' },
  { label: 'Liên Hệ', href: '/lien-he' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(false)

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
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-[#C4933F] flex items-center justify-center">
            <span className="text-white font-bold text-lg tracking-tight">HH</span>
          </div>
          <div>
            <div className="font-bold text-[#2C2C2C] text-lg leading-tight tracking-wide">HẢI HƯƠNG</div>
            <div className="text-[10px] text-[#9B8E82] tracking-[0.2em] uppercase">Ceramics</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-[#2C2C2C] hover:text-[#C4933F] transition-colors font-medium py-1"
                >
                  {link.label} <ChevronDown size={14} className={`transition-transform ${dropdown ? 'rotate-180' : ''}`} />
                </Link>
                {dropdown && (
                  <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-[#E0D8CF] py-2 z-50">
                    {link.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[#2C2C2C] hover:bg-[#F8F5F0] hover:text-[#C4933F] transition-colors"
                        onClick={() => setDropdown(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#2C2C2C] hover:text-[#C4933F] transition-colors font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/bao-gia"
            className="hidden md:inline-flex items-center gap-2 bg-[#C4933F] hover:bg-[#D4A853] text-white px-5 py-2.5 text-sm font-semibold transition-colors duration-200"
          >
            Yêu Cầu Báo Giá
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
        <div className="lg:hidden bg-white border-t border-[#E0D8CF] px-4 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block text-sm text-[#2C2C2C] hover:text-[#C4933F] py-2.5 border-b border-[#F0EBE3] transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 flex flex-col">
                  {link.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="text-sm text-[#6B6B6B] hover:text-[#C4933F] py-2 border-b border-[#F0EBE3] transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/bao-gia"
            className="mt-3 bg-[#C4933F] text-white text-center py-3 text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Yêu Cầu Báo Giá
          </Link>
        </div>
      )}
    </header>
  )
}
