'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/lib/cartStore'

export default function CartPage() {
  const { cart, total, removeFromCart, updateQuantity } = useCart()

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-20 h-20 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag size={32} className="text-[#9B8E82]" />
        </div>
        <h1 className="text-2xl font-bold text-[#2C2C2C] mb-3">Giỏ hàng trống</h1>
        <p className="text-[#6B6B6B] mb-8">Bạn chưa thêm sản phẩm nào vào giỏ hàng</p>
        <Link href="/san-pham" className="inline-flex items-center gap-2 bg-[#C4933F] text-white px-8 py-3.5 font-semibold text-sm hover:bg-[#D4A853] transition-colors">
          Tiếp tục mua sắm <ArrowRight size={16} />
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C2C2C] mb-8">Giỏ Hàng ({cart.length} sản phẩm)</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item._id} className="bg-white border border-[#E0D8CF] rounded-sm p-4 flex gap-4">
              <div className="relative w-20 h-20 bg-[#F8F5F0] rounded-sm overflow-hidden shrink-0">
                {item.image && (
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/san-pham/${item.slug}`} className="text-sm font-semibold text-[#2C2C2C] hover:text-[#C4933F] line-clamp-2">{item.name}</Link>
                <p className="text-[#C4933F] font-bold text-sm mt-1">{item.price.toLocaleString('vi-VN')}₫/{item.unit}</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-[#E0D8CF] rounded-sm">
                    <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center text-[#6B6B6B] text-sm">−</button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center text-[#6B6B6B] text-sm">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item._id)} className="text-[#9B8E82] hover:text-red-500 transition-colors ml-auto">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-[#2C2C2C]">{(item.price * item.quantity).toLocaleString('vi-VN')}₫</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-[#E0D8CF] rounded-sm p-6 sticky top-28">
            <h2 className="font-bold text-[#2C2C2C] mb-5">Tóm Tắt Đơn Hàng</h2>
            <div className="space-y-3 text-sm mb-5">
              <div className="flex justify-between text-[#6B6B6B]">
                <span>Tạm tính</span>
                <span>{total.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="flex justify-between text-[#6B6B6B]">
                <span>Phí vận chuyển</span>
                <span className="text-green-600">Miễn phí</span>
              </div>
              <div className="border-t border-[#E0D8CF] pt-3 flex justify-between font-bold text-[#2C2C2C] text-base">
                <span>Tổng cộng</span>
                <span className="text-[#C4933F]">{total.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>
            <Link
              href="/dat-hang"
              className="w-full flex items-center justify-center gap-2 bg-[#C4933F] hover:bg-[#D4A853] text-white py-4 font-semibold text-sm transition-colors"
            >
              Đặt Hàng Ngay <ArrowRight size={16} />
            </Link>
            <Link href="/san-pham" className="block text-center text-sm text-[#6B6B6B] hover:text-[#C4933F] mt-4 transition-colors">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
