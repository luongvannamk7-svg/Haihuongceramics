'use client'
import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ChevronRight, Check, Package, Ruler, MessageCircle } from 'lucide-react'
import { mockProducts } from '@/lib/mockData'
import ProductCard from '@/components/ProductCard'

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = mockProducts.find(p => p.slug.current === slug)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#2C2C2C] mb-4">Sản phẩm không tồn tại</h1>
        <Link href="/san-pham" className="text-[#C4933F] underline">Quay lại danh sách</Link>
      </div>
    )
  }

  const images = product.images?.length
    ? product.images.map(i => i.asset.url)
    : ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80']

  const related = mockProducts.filter(p => p._id !== product._id && p.category.slug.current === product.category.slug.current).slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-[#9B8E82] mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-[#C4933F]">Trang chủ</Link>
        <ChevronRight size={14} />
        <Link href="/san-pham" className="hover:text-[#C4933F]">Sản phẩm</Link>
        <ChevronRight size={14} />
        <Link href={`/san-pham?danh-muc=${product.category.slug.current}`} className="hover:text-[#C4933F]">{product.category.name}</Link>
        <ChevronRight size={14} />
        <span className="text-[#2C2C2C] truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Images */}
        <div>
          <div className="relative aspect-square bg-white border border-[#E0D8CF] rounded-sm overflow-hidden mb-3">
            <Image
              src={images[activeImg]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-16 h-16 border-2 rounded-sm overflow-hidden transition-colors ${i === activeImg ? 'border-[#C4933F]' : 'border-[#E0D8CF]'}`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <p className="text-[#C4933F] text-xs font-medium uppercase tracking-widest mb-2">{product.category.name}</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-4 leading-snug">{product.name}</h1>

          {product.shortDescription && (
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6 border-l-2 border-[#C4933F] pl-4">{product.shortDescription}</p>
          )}

          <div className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full mb-6 ${product.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
            {product.inStock ? <><Check size={12} /> Còn hàng</> : 'Hết hàng'}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="tel:0399925882"
              className="flex-1 flex items-center justify-center gap-2 bg-[#C4933F] hover:bg-[#D4A853] text-white py-3.5 font-semibold text-sm transition-colors"
            >
              <Phone size={16} /> Gọi báo giá: 0399.925.882
            </a>
            <a
              href="https://zalo.me/0399925882"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-[#C4933F] text-[#C4933F] hover:bg-[#C4933F] hover:text-white py-3.5 font-semibold text-sm transition-colors"
            >
              <MessageCircle size={16} /> Zalo tư vấn
            </a>
          </div>

          {/* Quick specs */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { icon: Package, label: 'Đơn vị', value: product.unit },
              { icon: Ruler, label: 'Danh mục', value: product.category.name },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-[#F8F5F0] rounded-sm p-3 flex gap-3 items-start">
                <Icon size={16} className="text-[#C4933F] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#9B8E82]">{label}</p>
                  <p className="text-sm font-medium text-[#2C2C2C]">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-[#2C2C2C] mb-6">Sản Phẩm Liên Quan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(p => <ProductCard key={p._id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}
