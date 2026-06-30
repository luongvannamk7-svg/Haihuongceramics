'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, ArrowLeft } from 'lucide-react'
import { useCart, clearCart } from '@/lib/cartStore'

export default function CheckoutPage() {
  const { cart, total } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '', city: '', note: '',
    payment: 'cod',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    clearCart()
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={36} className="text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-[#2C2C2C] mb-3">Đặt Hàng Thành Công!</h1>
        <p className="text-[#6B6B6B] mb-2">Cảm ơn bạn đã đặt hàng tại Hải Hương Ceramics.</p>
        <p className="text-[#6B6B6B] mb-8">Chúng tôi sẽ liên hệ xác nhận đơn hàng trong vòng 30 phút.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-[#C4933F] text-white px-8 py-3.5 font-semibold text-sm hover:bg-[#D4A853] transition-colors">
          Về Trang Chủ
        </Link>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="text-[#6B6B6B] mb-4">Giỏ hàng của bạn đang trống</p>
        <Link href="/san-pham" className="text-[#C4933F] underline">Mua sắm ngay</Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/gio-hang" className="text-[#6B6B6B] hover:text-[#C4933F]"><ArrowLeft size={20} /></Link>
        <h1 className="text-2xl font-bold text-[#2C2C2C]">Đặt Hàng</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white border border-[#E0D8CF] rounded-sm p-6">
              <h2 className="font-bold text-[#2C2C2C] mb-5">Thông Tin Giao Hàng</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Họ và tên <span className="text-red-500">*</span></label>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Nguyễn Văn A" className="w-full border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Số điện thoại <span className="text-red-500">*</span></label>
                  <input required name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="0901.234.567" className="w-full border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="email@example.com" className="w-full border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Địa chỉ nhận hàng <span className="text-red-500">*</span></label>
                  <input required name="address" value={form.address} onChange={handleChange} placeholder="Số nhà, tên đường, phường/xã" className="w-full border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Tỉnh/Thành phố <span className="text-red-500">*</span></label>
                  <input required name="city" value={form.city} onChange={handleChange} placeholder="TP. Hồ Chí Minh" className="w-full border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Ghi chú đơn hàng</label>
                  <textarea name="note" value={form.note} onChange={handleChange} rows={3} placeholder="Yêu cầu đặc biệt, thời gian giao hàng..." className="w-full border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] resize-none" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E0D8CF] rounded-sm p-6">
              <h2 className="font-bold text-[#2C2C2C] mb-4">Phương Thức Thanh Toán</h2>
              <div className="space-y-3">
                {[
                  { value: 'cod', label: 'Thanh toán khi nhận hàng (COD)', desc: 'Trả tiền mặt khi nhận hàng' },
                  { value: 'bank', label: 'Chuyển khoản ngân hàng', desc: 'Chúng tôi sẽ gửi thông tin tài khoản qua điện thoại' },
                ].map(opt => (
                  <label key={opt.value} className={`flex items-start gap-3 p-3 border rounded-sm cursor-pointer transition-colors ${form.payment === opt.value ? 'border-[#C4933F] bg-[#C4933F]/5' : 'border-[#E0D8CF]'}`}>
                    <input type="radio" name="payment" value={opt.value} checked={form.payment === opt.value} onChange={handleChange} className="mt-1 accent-[#C4933F]" />
                    <div>
                      <p className="text-sm font-medium text-[#2C2C2C]">{opt.label}</p>
                      <p className="text-xs text-[#9B8E82]">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-white border border-[#E0D8CF] rounded-sm p-6 sticky top-28">
              <h2 className="font-bold text-[#2C2C2C] mb-4">Đơn Hàng ({cart.length})</h2>
              <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
                {cart.map(item => (
                  <div key={item._id} className="flex justify-between text-sm gap-2">
                    <span className="text-[#6B6B6B] line-clamp-2 flex-1">{item.name} ×{item.quantity}</span>
                    <span className="text-[#2C2C2C] font-medium shrink-0">{(item.price * item.quantity).toLocaleString('vi-VN')}₫</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#E0D8CF] pt-4 flex justify-between font-bold text-[#2C2C2C]">
                <span>Tổng cộng</span>
                <span className="text-[#C4933F]">{total.toLocaleString('vi-VN')}₫</span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-5 flex items-center justify-center gap-2 bg-[#C4933F] hover:bg-[#D4A853] disabled:opacity-60 text-white py-4 font-semibold text-sm transition-colors"
              >
                {loading ? 'Đang xử lý...' : 'Xác Nhận Đặt Hàng'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
