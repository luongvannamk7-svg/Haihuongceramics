import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Tin Tức | Hải Hương Ceramics',
  description: 'Kiến thức chuyên sâu về gạch ốp lát, thiết bị vệ sinh, ngói lợp và bí quyết thi công từ chuyên gia Hải Hương Ceramics Mộc Châu.',
}

const posts = [
  {
    id: 1,
    slug: 'gach-op-lat-60x60-homestay-moc-chau',
    title: 'Gạch Ốp Lát 60x60 — Lựa Chọn Hoàn Hảo Cho Homestay Tại Mộc Châu',
    category: 'Tư vấn',
    author: 'Chuyên gia Hải Hương',
    date: '20/06/2026',
    readTime: '7 phút đọc',
    excerpt: 'Khí hậu Mộc Châu ẩm, sương mù nhiều — gạch 60x60 với ít mạch vữa và bề mặt lớn là giải pháp tối ưu cho homestay. Khám phá các dòng PRIME, HM, TTC đang được ưa chuộng nhất tại đây.',
    image: '/products/gach/60x60/PRIME-09203.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'bon-cau-thong-minh-roy-thai-lan',
    title: 'Bồn Cầu Thông Minh ROY Thái Lan — Nâng Tầm Phòng Vệ Sinh Hiện Đại',
    category: 'Sản phẩm',
    author: 'Chuyên gia Hải Hương',
    date: '25/06/2026',
    readTime: '6 phút đọc',
    excerpt: 'Bồn cầu ROY từ Thái Lan với công nghệ xả kép tiết kiệm nước, lớp phủ nano chống bám cặn và thiết kế tối giản hiện đại — đang được ưa chuộng tại các công trình cao cấp Sơn La.',
    image: '/products/tbvs/roy/bon-cau/z7987388499972_b97c61a56a2e06b1db78b8a9a1a3e3de.jpg',
    featured: false,
  },
  {
    id: 3,
    slug: 'ngoi-prime-cong-trinh-nghi-duong',
    title: 'Ngói Lợp PRIME — Ưu Điểm Vượt Trội Cho Công Trình Nghỉ Dưỡng',
    category: 'Sản phẩm',
    author: 'Chuyên gia Hải Hương',
    date: '01/07/2026',
    readTime: '8 phút đọc',
    excerpt: 'Tuổi thọ 50-70 năm, chịu khí hậu vùng cao, cách nhiệt tốt và thẩm mỹ cao — ngói PRIME (Hera, Planio, WAVE XP) là lựa chọn hàng đầu cho resort và biệt thự nghỉ dưỡng tại Mộc Châu.',
    image: '/products/ngoi/WAVE-XP-401.png',
    featured: false,
  },
]

const featuredPost = posts.find(p => p.featured)!
const regularPosts = posts.filter(p => !p.featured)

export default function BlogPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#F8F5F0] py-16 border-b border-[#E0D8CF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#C4933F] text-xs font-medium uppercase tracking-[0.3em] mb-2">Kiến Thức & Cảm Hứng</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-3">Blog Hải Hương Ceramics</h1>
          <p className="text-[#6B6B6B] max-w-lg mx-auto">
            Kiến thức chuyên sâu về vật liệu xây dựng, bí quyết thi công và xu hướng thiết kế từ đội ngũ chuyên gia tại Mộc Châu.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        {/* Featured post */}
        <div className="mb-12">
          <Link href={`/blog/${featuredPost.slug}`} className="group grid md:grid-cols-2 gap-0 bg-white border border-[#E0D8CF] overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <span className="absolute top-4 left-4 bg-[#C4933F] text-white text-[11px] font-medium px-3 py-1 uppercase tracking-wide">
                Nổi bật
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-[#C4933F] text-xs font-medium uppercase tracking-wide mb-3">
                <Tag size={12} /> {featuredPost.category}
              </span>
              <h2 className="text-2xl font-bold text-[#2C2C2C] mb-3 leading-snug group-hover:text-[#C4933F] transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-[#9B8E82] mb-6">
                <span className="flex items-center gap-1"><User size={12} /> {featuredPost.author}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {featuredPost.readTime}</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4933F] group-hover:gap-3 transition-all">
                Đọc tiếp <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        </div>

        {/* Regular posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {regularPosts.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-[#E0D8CF] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center gap-1 text-[#C4933F] text-[11px] font-medium uppercase tracking-wide mb-2">
                  <Tag size={10} /> {post.category}
                </span>
                <h3 className="font-bold text-[#2C2C2C] text-sm mb-2 leading-snug line-clamp-2 group-hover:text-[#C4933F] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-[11px] text-[#9B8E82] border-t border-[#F0EBE3] pt-3 mt-auto">
                  <span className="flex items-center gap-1"><User size={11} /> {post.author}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
