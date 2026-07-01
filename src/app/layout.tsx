import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

const beVietnam = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700'],
  subsets: ['vietnamese', 'latin'],
  variable: '--font-be-vietnam',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hải Hương Ceramics - Gạch Ốp Lát & Thiết Bị Vệ Sinh Cao Cấp',
  description: 'Chuyên cung cấp gạch ốp lát cao cấp và thiết bị vệ sinh nhập khẩu. Hơn 15 năm kinh nghiệm phục vụ các công trình dân dụng và thương mại toàn quốc.',
  keywords: 'gạch ốp lát, thiết bị vệ sinh, gạch nhập khẩu, Hải Hương Ceramics',
  openGraph: {
    title: 'Hải Hương Ceramics',
    description: 'Gạch ốp lát & thiết bị vệ sinh cao cấp',
    type: 'website',
    locale: 'vi_VN',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="min-h-screen flex flex-col bg-[#F8F5F0]">
        <Header />
        <div className="pt-[88px] flex-1">
          {children}
        </div>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
