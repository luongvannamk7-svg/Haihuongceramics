'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Eye } from 'lucide-react'

interface Product {
  _id: string
  name: string
  slug: { current: string }
  price: number
  unit: string
  category?: { name: string; slug: { current: string } }
  images?: Array<{ asset: { url: string } }>
  inStock: boolean
  shortDescription?: string
}

export default function ProductCard({ product }: { product: Product }) {
  const imgUrl = product.images?.[0]?.asset?.url || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'

  return (
    <Link href={`/san-pham/${product.slug.current}`} className="group block bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E0D8CF]">
      <div className="relative overflow-hidden aspect-square bg-[#F8F5F0]">
        <Image
          src={imgUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-xs font-medium bg-black/70 px-3 py-1">Hết hàng</span>
          </div>
        )}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <span className="flex items-center gap-2 bg-white text-[#2C2C2C] text-xs font-medium px-4 py-2 rounded-sm shadow-md">
            <Eye size={14} /> Xem chi tiết
          </span>
        </div>
      </div>

      <div className="p-4">
        {product.category && (
          <span className="text-[11px] text-[#C4933F] font-medium uppercase tracking-wide">{product.category.name}</span>
        )}
        <h3 className="text-sm font-semibold text-[#2C2C2C] mt-1 mb-2 line-clamp-2 leading-snug">{product.name}</h3>
        {product.shortDescription && (
          <p className="text-xs text-[#6B6B6B] mb-3 line-clamp-2 leading-relaxed">{product.shortDescription}</p>
        )}
        <div className="mt-auto pt-3 border-t border-[#F0EBE3]">
          <a
            href={`tel:0399925882`}
            className="w-full flex items-center justify-center gap-2 bg-[#C4933F] hover:bg-[#D4A853] text-white text-xs font-semibold py-2 transition-colors duration-200"
            onClick={e => e.stopPropagation()}
          >
            Liên hệ báo giá
          </a>
        </div>
      </div>
    </Link>
  )
}
