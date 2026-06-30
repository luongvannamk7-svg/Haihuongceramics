'use client'
import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Phone, ChevronRight, Check, Package, Ruler } from 'lucide-react'
import { addToCart } from '@/lib/cartStore'
import { mockProducts } from '@/lib/mockData'
import ProductCard from '@/components/ProductCard'

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = mockProducts.find(p => p.slug.current === slug)
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

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

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        image: images[0],
        slug: product.slug.current,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

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
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-2 leading-snug">{product.name}</h1>
          {'sku' in product && <p className="text-xs text-[#9B8E82] mb-4">Mã SP: {(product as any).sku}</p>}

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold text-[#C4933F]">{product.price.toLocaleString('vi-VN')}₫</span>
            <span className="text-sm text-[#9B8E82]">/{product.unit}</span>
          </div>

          {product.shortDescription && (
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6 border-l-2 border-[#C4933F] pl-4">{product.shortDescription}</p>
          )}

          <div className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full mb-6 ${product.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
            {product.inStock ? <><Check size={12} /> Còn hàng</> : 'Hết hàng'}
          </div>

          {product.inStock && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-[#2C2C2C] w-20">Số lượng</label>
                <div className="flex items-center border border-[#E0D8CF] rounded-sm">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center text-[#6B6B6B] hover:text-[#2C2C2C] text-lg">−</button>
                  <span className="w-12 text-center text-sm font-medium">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="w-10 h-10 flex items-center justify-center text-[#6B6B6B] hover:text-[#2C2C2C] text-lg">+</button>
                </div>
                <span className="text-xs text-[#9B8E82]">{product.unit}</span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 font-semibold text-sm transition-all duration-200 ${
                    added
                      ? 'bg-green-600 text-white'
                      : 'bg-[#2C2C2C] hover:bg-[#C4933F] text-white'
                  }`}
                >
                  {added ? <><Check size={16} /> Đã thêm!</> : <><ShoppingCart size={16} /> Thêm vào giỏ</>}
                </button>
                <a
                  href="tel:0901234567"
                  className="flex items-center gap-2 border border-[#C4933F] text-[#C4933F] hover:bg-[#C4933F] hover:text-white px-5 py-3.5 font-semibold text-sm transition-colors"
                >
                  <Phone size={16} /> Gọi tư vấn
                </a>
              </div>
            </div>
          )}

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
