'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  LayoutDashboard, Package, FileText, MessageSquare,
  LogOut, Plus, Edit2, Trash2, Eye, Users, TrendingUp, ShoppingBag
} from 'lucide-react'
import { mockProducts, mockCategories } from '@/lib/mockData'

const stats = [
  { label: 'Tổng sản phẩm', value: '128', icon: Package, change: '+12 tháng này' },
  { label: 'Yêu cầu báo giá', value: '47', icon: MessageSquare, change: '+8 tuần này' },
  { label: 'Bài viết blog', value: '24', icon: FileText, change: '+3 tháng này' },
  { label: 'Đại lý đăng ký', value: '6', icon: Users, change: '+2 tháng này' },
]

type Tab = 'overview' | 'products' | 'blog' | 'quotes'

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const navItems = [
    { id: 'overview' as Tab, label: 'Tổng quan', icon: LayoutDashboard },
    { id: 'products' as Tab, label: 'Sản phẩm', icon: Package },
    { id: 'blog' as Tab, label: 'Blog', icon: FileText },
    { id: 'quotes' as Tab, label: 'Yêu cầu báo giá', icon: MessageSquare },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-60' : 'w-16'} bg-[#2C2C2C] text-white flex flex-col transition-all duration-300 shrink-0`}>
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#C4933F] flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">HH</span>
          </div>
          {sidebarOpen && <span className="font-bold text-sm">Admin Panel</span>}
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                tab === item.id ? 'bg-[#C4933F] text-white' : 'text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon size={18} className="shrink-0" />
              {sidebarOpen && item.label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/10 space-y-1">
          <Link href="/" target="_blank" className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors">
            <Eye size={18} className="shrink-0" />
            {sidebarOpen && 'Xem website'}
          </Link>
          <form action="/api/admin/logout" method="POST">
            <button type="submit" className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400 hover:text-red-400 hover:bg-white/10 rounded transition-colors">
              <LogOut size={18} className="shrink-0" />
              {sidebarOpen && 'Đăng xuất'}
            </button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-gray-800">
              <LayoutDashboard size={20} />
            </button>
            <h1 className="font-bold text-gray-800 text-lg">
              {navItems.find(n => n.id === tab)?.label}
            </h1>
          </div>
          <span className="text-sm text-gray-500">Hải Hương Ceramics CMS</span>
        </div>

        <div className="p-6">
          {/* Overview */}
          {tab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map(s => (
                  <div key={s.label} className="bg-white rounded border border-gray-200 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                      <s.icon size={16} className="text-[#C4933F]" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-1">{s.value}</p>
                    <p className="text-xs text-green-600 flex items-center gap-1"><TrendingUp size={10} /> {s.change}</p>
                  </div>
                ))}
              </div>

              {/* Quick actions */}
              <div className="bg-white rounded border border-gray-200 p-6">
                <h2 className="font-bold text-gray-800 mb-4">Thao Tác Nhanh</h2>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setTab('products')} className="flex items-center gap-2 bg-[#C4933F] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#D4A853] transition-colors rounded">
                    <Plus size={15} /> Thêm sản phẩm
                  </button>
                  <button onClick={() => setTab('blog')} className="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors rounded">
                    <Plus size={15} /> Viết bài blog
                  </button>
                  <button onClick={() => setTab('quotes')} className="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors rounded">
                    <MessageSquare size={15} /> Xem báo giá mới
                  </button>
                </div>
              </div>

              {/* Recent products */}
              <div className="bg-white rounded border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-800">Sản Phẩm Gần Đây</h2>
                  <button onClick={() => setTab('products')} className="text-xs text-[#C4933F] font-medium">Xem tất cả →</button>
                </div>
                <div className="space-y-3">
                  {mockProducts.slice(0, 5).map(p => (
                    <div key={p._id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{p.name}</p>
                        <p className="text-xs text-gray-500">{p.category.name}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-[#C4933F]">{p.price.toLocaleString('vi-VN')}₫/{p.unit}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${p.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                          {p.inStock ? 'Còn hàng' : 'Hết hàng'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products */}
          {tab === 'products' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{mockProducts.length} sản phẩm</p>
                <button className="flex items-center gap-2 bg-[#C4933F] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#D4A853] transition-colors rounded">
                  <Plus size={15} /> Thêm sản phẩm
                </button>
              </div>

              {/* Category filter */}
              <div className="flex gap-2 flex-wrap">
                {['Tất cả', ...mockCategories.map(c => c.name)].map(cat => (
                  <button key={cat} className="px-3 py-1.5 text-xs border border-gray-200 rounded hover:border-[#C4933F] hover:text-[#C4933F] transition-colors bg-white">
                    {cat}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wide">Sản phẩm</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wide hidden md:table-cell">Danh mục</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wide hidden lg:table-cell">Mã SKU</th>
                      <th className="text-right px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wide">Giá</th>
                      <th className="text-center px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wide">Trạng thái</th>
                      <th className="text-right px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wide">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {mockProducts.map(p => (
                      <tr key={p._id} className="hover:bg-gray-50">
                        <td className="px-5 py-3.5">
                          <div>
                            <p className="font-medium text-gray-800 text-sm">{p.name}</p>
                            {p.isFeatured && <span className="text-[10px] text-[#C4933F] font-medium">★ Nổi bật</span>}
                          </div>
                        </td>
                        <td className="px-5 py-3.5 hidden md:table-cell">
                          <span className="text-xs text-gray-600">{p.category.name}</span>
                        </td>
                        <td className="px-5 py-3.5 hidden lg:table-cell">
                          <span className="text-xs font-mono text-gray-500">{p._id}</span>
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <span className="text-sm font-semibold text-[#C4933F]">{p.price.toLocaleString('vi-VN')}₫</span>
                          <span className="text-xs text-gray-400">/{p.unit}</span>
                        </td>
                        <td className="px-5 py-3.5 text-center">
                          <span className={`inline-block text-[11px] px-2 py-0.5 rounded-full font-medium ${p.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                            {p.inStock ? 'Còn hàng' : 'Hết hàng'}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors" title="Chỉnh sửa">
                              <Edit2 size={14} />
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-red-600 transition-colors" title="Xóa">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Blog */}
          {tab === 'blog' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">6 bài viết</p>
                <button className="flex items-center gap-2 bg-[#C4933F] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#D4A853] transition-colors rounded">
                  <Plus size={15} /> Viết bài mới
                </button>
              </div>
              <div className="bg-white rounded border border-gray-200">
                {[
                  { title: 'Top 10 Xu Hướng Gạch Ốp Lát Hot Nhất Năm 2025', cat: 'Xu hướng', date: '15/06/2025', status: 'published' },
                  { title: 'Cách Chọn Gạch Phòng Tắm Đúng Chuẩn', cat: 'Tư vấn', date: '08/06/2025', status: 'published' },
                  { title: 'Biệt Thự Vườn: Khi Marble Trắng Carrara Tạo Nên Sự Khác Biệt', cat: 'Dự án', date: '01/06/2025', status: 'published' },
                  { title: 'Thiết Bị Vệ Sinh Thông Minh 2025', cat: 'Sản phẩm', date: '25/05/2025', status: 'draft' },
                ].map((post, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{post.title}</p>
                      <div className="flex gap-3 text-xs text-gray-400 mt-0.5">
                        <span>{post.cat}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${post.status === 'published' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                        {post.status === 'published' ? 'Đã đăng' : 'Nháp'}
                      </span>
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"><Edit2 size={14} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quotes */}
          {tab === 'quotes' && (
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-4">
                {[{ label: 'Chờ xử lý', count: 8, color: 'yellow' }, { label: 'Đang tư vấn', count: 23, color: 'blue' }, { label: 'Đã hoàn thành', count: 16, color: 'green' }].map(s => (
                  <div key={s.label} className="bg-white rounded border border-gray-200 p-4 text-center">
                    <p className="text-2xl font-bold text-gray-800">{s.count}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded border border-gray-200">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-800">Yêu Cầu Mới Nhất</h3>
                </div>
                {[
                  { name: 'Nguyễn Văn A', phone: '0901.234.567', type: 'Biệt thự', area: '350m²', status: 'new', time: '2 giờ trước' },
                  { name: 'Trần Thị B', phone: '0912.345.678', type: 'Căn hộ', area: '120m²', status: 'consulting', time: '5 giờ trước' },
                  { name: 'Lê Văn C', phone: '0923.456.789', type: 'Nhà hàng', area: '500m²', status: 'new', time: 'Hôm qua' },
                  { name: 'Phạm Thị D', phone: '0934.567.890', type: 'Căn hộ', area: '85m²', status: 'done', time: '2 ngày trước' },
                ].map((quote, i) => (
                  <div key={i} className="px-5 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{quote.name}</p>
                      <div className="flex gap-3 text-xs text-gray-400 mt-0.5">
                        <span>{quote.phone}</span>
                        <span>·</span>
                        <span>{quote.type}</span>
                        <span>·</span>
                        <span>{quote.area}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-gray-400">{quote.time}</span>
                      <span className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${
                        quote.status === 'new' ? 'bg-yellow-50 text-yellow-700' :
                        quote.status === 'consulting' ? 'bg-blue-50 text-blue-700' :
                        'bg-green-50 text-green-700'
                      }`}>
                        {quote.status === 'new' ? 'Mới' : quote.status === 'consulting' ? 'Đang tư vấn' : 'Hoàn thành'}
                      </span>
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"><ShoppingBag size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
