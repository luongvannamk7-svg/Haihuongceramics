import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dự Án Tiêu Biểu | Hải Hương Ceramics',
  description: 'Những công trình nội thất sang trọng đã sử dụng vật liệu Hải Hương Ceramics. Gạch ốp lát và thiết bị vệ sinh cao cấp cho mọi công trình.',
}

const projects = [
  {
    id: 1,
    title: 'Biệt Thự Park Riverside – TP.HCM',
    category: 'Biệt thự cao cấp',
    location: 'Quận 9, TP.HCM',
    area: '850 m²',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85',
    products: ['Gạch Marble Trắng Carrara', 'Gạch Gỗ Teak Vàng', 'Bồn Cầu Thông Minh'],
    desc: 'Không gian nội thất sang trọng với gạch marble trắng Carrara kết hợp thiết bị vệ sinh cao cấp, tạo nên phong cách sống đẳng cấp.',
  },
  {
    id: 2,
    title: 'Khách Sạn 5 Sao Aria – Đà Nẵng',
    category: 'Khách sạn & Resort',
    location: 'Ngũ Hành Sơn, Đà Nẵng',
    area: '4.200 m²',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85',
    products: ['Gạch Terrazzo Xám Xanh', 'Gạch Ốp Tường Xám Nhạt', 'Vòi Sen Cây Inox 304'],
    desc: 'Toàn bộ khu vực phòng tắm, hành lang và khu vực hồ bơi được lát gạch Hải Hương Ceramics, đạt tiêu chuẩn khách sạn quốc tế.',
  },
  {
    id: 3,
    title: 'Căn Hộ The Origami – Vinhomes',
    category: 'Căn hộ cao cấp',
    location: 'Quận 9, TP.HCM',
    area: '120 m²',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=85',
    products: ['Gạch Marble Trắng Carrara', 'Lavabo Âm Bàn Oval'],
    desc: 'Thiết kế minimalist với gạch marble trắng thuần khiết, lavabo âm bàn và phụ kiện vệ sinh đồng bộ tạo cảm giác spa tại gia.',
  },
  {
    id: 4,
    title: 'Villa Sun Garden – Phú Quốc',
    category: 'Villa nghỉ dưỡng',
    location: 'Phú Quốc, Kiên Giang',
    area: '1.100 m²',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85',
    products: ['Gạch Ngoại Thất Chống Trơn', 'Gạch Gỗ Teak Vàng'],
    desc: 'Sân vườn, hồ bơi và khu vực ngoại thất được lát gạch chống trơn R11, an toàn và thẩm mỹ trong môi trường ẩm ướt ven biển.',
  },
  {
    id: 5,
    title: 'Showroom Ô Tô BMW – Hà Nội',
    category: 'Công trình thương mại',
    location: 'Nam Từ Liêm, Hà Nội',
    area: '2.800 m²',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85',
    products: ['Gạch Marble Trắng Carrara', 'Gạch Terrazzo Xám Xanh'],
    desc: 'Sàn showroom với gạch marble khổ lớn 120x120, tạo nền phông sang trọng làm nổi bật các dòng xe cao cấp.',
  },
  {
    id: 6,
    title: 'Nhà Hàng The Warehouse – TP.HCM',
    category: 'Nhà hàng & F&B',
    location: 'Quận 1, TP.HCM',
    area: '650 m²',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=85',
    products: ['Gạch Ốp Tường Xám Nhạt', 'Gạch Lát Nền Terrazzo'],
    desc: 'Phong cách industrial chic với gạch ốp tường xám nhạt kết hợp sàn terrazzo, tạo không gian ẩm thực độc đáo và hiện đại.',
  },
]

const stats = [
  { value: '500+', label: 'Công trình hoàn thành' },
  { value: '15+', label: 'Năm kinh nghiệm' },
  { value: '50+', label: 'Tỉnh thành phủ sóng' },
  { value: '98%', label: 'Khách hàng hài lòng' },
]

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#2C2C2C] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=60" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Dự Án Tiêu Biểu</h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base">
            Những công trình chúng tôi tự hào được đồng hành — từ biệt thự cao cấp đến khách sạn 5 sao và không gian thương mại đẳng cấp.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#C4933F] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-2">Công Trình</p>
            <h2 className="text-3xl font-bold text-[#2C2C2C]">Tất Cả Dự Án</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <article key={project.id} className="bg-white border border-[#E0D8CF] overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#C4933F] text-white text-[11px] font-medium px-3 py-1 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-[#2C2C2C] text-base leading-snug">{project.title}</h3>
                    <span className="text-xs text-[#9B8E82] shrink-0 mt-0.5">{project.year}</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#9B8E82] mb-3">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                    <span className="flex items-center gap-1"><Building2 size={12} /> {project.area}</span>
                  </div>

                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{project.desc}</p>

                  <div className="border-t border-[#F0EBE3] pt-4">
                    <p className="text-[11px] text-[#9B8E82] uppercase tracking-wide mb-2">Sản phẩm sử dụng</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.products.map(p => (
                        <span key={p} className="bg-[#F8F5F0] text-[#6B6B6B] text-[11px] px-2 py-1 border border-[#E0D8CF]">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-3">Cộng Tác</p>
          <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4">Bạn Đang Có Dự Án Cần Tư Vấn?</h2>
          <p className="text-[#6B6B6B] mb-8 max-w-xl mx-auto">
            Đội ngũ kỹ thuật và thiết kế của Hải Hương Ceramics sẵn sàng đồng hành từ khâu lựa chọn vật liệu đến hoàn thiện công trình.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/bao-gia"
              className="inline-flex items-center gap-2 bg-[#C4933F] hover:bg-[#D4A853] text-white px-8 py-4 font-semibold text-sm transition-colors"
            >
              Yêu Cầu Báo Giá <ArrowRight size={16} />
            </Link>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white px-8 py-4 font-semibold text-sm transition-colors"
            >
              Liên Hệ Ngay
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
