'use client'
import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { mockProducts, mockCategories } from '@/lib/mockData'

const sortOptions = [
  { value: 'default', label: 'Mặc định' },
  { value: 'price-asc', label: 'Giá tăng dần' },
  { value: 'price-desc', label: 'Giá giảm dần' },
  { value: 'name-asc', label: 'Tên A–Z' },
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('')
  const [sort, setSort] = useState('default')
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('danh-muc')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  const filtered = useMemo(() => {
    let items = [...mockProducts]
    if (activeCategory) items = items.filter(p => p.category.slug.current === activeCategory)
    if (search) items = items.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    if (sort === 'price-asc') items.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') items.sort((a, b) => b.price - a.price)
    if (sort === 'name-asc') items.sort((a, b) => a.name.localeCompare(b.name, 'vi'))
    return items
  }, [search, activeCategory, sort])

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar filter (desktop) */}
      <aside className="hidden lg:block w-56 shrink-0">
        <div className="bg-white border border-[#E0D8CF] p-5 rounded-sm sticky top-28">
          <h3 className="font-semibold text-sm uppercase tracking-widest text-[#2C2C2C] mb-4">Danh Mục</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveCategory('')}
                className={`text-sm w-full text-left py-1.5 px-2 rounded-sm transition-colors ${activeCategory === '' ? 'bg-[#C4933F] text-white font-medium' : 'text-[#6B6B6B] hover:text-[#C4933F]'}`}
              >
                Tất cả sản phẩm
              </button>
            </li>
            {mockCategories.map(cat => (
              <li key={cat._id}>
                <button
                  onClick={() => setActiveCategory(cat.slug.current)}
                  className={`text-sm w-full text-left py-1.5 px-2 rounded-sm transition-colors ${activeCategory === cat.slug.current ? 'bg-[#C4933F] text-white font-medium' : 'text-[#6B6B6B] hover:text-[#C4933F]'}`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9B8E82]" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-[#E0D8CF] rounded-sm text-sm focus:outline-none focus:border-[#C4933F] bg-white"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9B8E82]">
                <X size={14} />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F] bg-white text-[#2C2C2C]"
            >
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="lg:hidden flex items-center gap-2 border border-[#E0D8CF] rounded-sm px-3 py-2.5 text-sm bg-white"
            >
              <SlidersHorizontal size={16} /> Lọc
            </button>
          </div>
        </div>

        {/* Mobile filter */}
        {showFilter && (
          <div className="lg:hidden bg-white border border-[#E0D8CF] rounded-sm p-4 mb-4 flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveCategory(''); setShowFilter(false) }}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${activeCategory === '' ? 'bg-[#C4933F] text-white border-[#C4933F]' : 'border-[#E0D8CF] text-[#6B6B6B]'}`}
            >
              Tất cả
            </button>
            {mockCategories.map(cat => (
              <button
                key={cat._id}
                onClick={() => { setActiveCategory(cat.slug.current); setShowFilter(false) }}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${activeCategory === cat.slug.current ? 'bg-[#C4933F] text-white border-[#C4933F]' : 'border-[#E0D8CF] text-[#6B6B6B]'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#6B6B6B]">Tìm thấy <strong className="text-[#2C2C2C]">{filtered.length}</strong> sản phẩm</p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
            {filtered.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-sm border border-[#E0D8CF]">
            <p className="text-[#9B8E82] text-lg mb-2">Không tìm thấy sản phẩm</p>
            <button onClick={() => { setSearch(''); setActiveCategory('') }} className="text-sm text-[#C4933F] underline">Xóa bộ lọc</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-[#9B8E82] mb-6">
        <a href="/" className="hover:text-[#C4933F]">Trang chủ</a>
        <span className="mx-2">/</span>
        <span className="text-[#2C2C2C]">Sản phẩm</span>
      </nav>
      <Suspense fallback={<div className="text-center py-20 text-[#9B8E82]">Đang tải...</div>}>
        <ProductsContent />
      </Suspense>
    </div>
  )
}
