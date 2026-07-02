import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Truck, Shield, HeadphonesIcon } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { mockProducts, mockCategories } from '@/lib/mockData'

const featuredProducts = mockProducts.filter(p => p.isFeatured)

const benefits = [
  { icon: Award, title: 'Hàng Chính Hãng', desc: '100% sản phẩm có nguồn gốc rõ ràng, kiểm định chất lượng' },
  { icon: Truck, title: 'Giao Hàng Toàn Quốc', desc: 'Vận chuyển nhanh, đóng gói cẩn thận cho mọi công trình' },
  { icon: Shield, title: 'Bảo Hành 12 Tháng', desc: 'Cam kết bảo hành chính sách đổi trả minh bạch' },
  { icon: HeadphonesIcon, title: 'Hỗ Trợ 24/7', desc: 'Đội ngũ tư vấn chuyên nghiệp luôn sẵn sàng hỗ trợ' },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85"
            alt="Không gian nội thất gạch Hải Hương Ceramics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          <div className="max-w-xl">
            <p className="text-[#C4933F] text-sm font-medium uppercase tracking-[0.3em] mb-4">Hải Hương Ceramics</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Vẻ Đẹp<br />
              <span className="text-[#C4933F]">Trường Tồn</span><br />
              Trong Từng Viên Gạch
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
              Bộ sưu tập gạch ốp lát cao cấp và thiết bị vệ sinh nhập khẩu, mang đến không gian sống đẳng cấp cho mọi công trình.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 bg-[#C4933F] hover:bg-[#D4A853] text-white px-8 py-4 font-semibold text-sm tracking-wide transition-colors duration-200"
              >
                Khám Phá Sản Phẩm <ArrowRight size={16} />
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 border border-white/60 hover:border-white text-white hover:bg-white/10 px-8 py-4 font-semibold text-sm tracking-wide transition-all duration-200"
              >
                Tư Vấn Miễn Phí
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Cuộn xuống</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-2">Danh Mục</p>
            <h2 className="text-3xl font-bold text-[#2C2C2C]">Sản Phẩm Của Chúng Tôi</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {mockCategories.map((cat) => (
              <Link
                key={cat._id}
                href={`/san-pham?danh-muc=${cat.slug.current}`}
                className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-[#E8E0D5] flex items-end"
              >
                <Image
                  src={{
                    'gach-op-lat': '/cat-gach-op-lat.jpg',
                    'ngoi-prime': '/cat-ngoi-prime.jpg',
                    'thiet-bi-ve-sinh': '/cat-thiet-bi-ve-sinh.jpg',
                  }[cat.slug.current] ?? '/cat-gach-op-lat.jpg'}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10 p-5 w-full">
                  <h3 className="text-white font-bold text-base">{cat.name}</h3>
                  <p className="text-white/70 text-xs mt-1 flex items-center gap-1">
                    Xem thêm <ArrowRight size={12} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-2">Nổi Bật</p>
              <h2 className="text-3xl font-bold text-[#2C2C2C]">Sản Phẩm Tiêu Biểu</h2>
            </div>
            <Link href="/san-pham" className="hidden md:flex items-center gap-2 text-sm text-[#C4933F] font-medium hover:gap-3 transition-all">
              Xem tất cả <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=85"
          alt="Showroom Hải Hương Ceramics"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2C2C2C]/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-3">Tư Vấn Miễn Phí</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
            Cần Tư Vấn Chọn Vật Liệu<br />Cho Công Trình Của Bạn?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Đội ngũ chuyên gia của Hải Hương Ceramics sẵn sàng tư vấn lựa chọn sản phẩm phù hợp với ngân sách và phong cách thiết kế của bạn.
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 bg-[#C4933F] hover:bg-[#D4A853] text-white px-10 py-4 font-semibold text-sm tracking-wide transition-colors duration-200"
          >
            Liên Hệ Ngay <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 bg-[#F8F5F0] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[#C4933F]" />
                </div>
                <h3 className="font-semibold text-sm text-[#2C2C2C] mb-2">{title}</h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-2">Bộ Sưu Tập</p>
            <h2 className="text-3xl font-bold text-[#2C2C2C]">Tất Cả Sản Phẩm</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {mockProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
