import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Tin Tức | Hải Hương Ceramics',
  description: 'Kiến thức chuyên sâu về gạch ốp lát, thiết bị vệ sinh, xu hướng thiết kế nội thất và bí quyết thi công từ chuyên gia Hải Hương Ceramics.',
}

const posts = [
  {
    id: 1,
    slug: 'xu-huong-gach-op-lat-2025',
    title: 'Top 10 Xu Hướng Gạch Ốp Lát Hot Nhất Năm 2025',
    category: 'Xu hướng',
    author: 'KTS. Minh Khoa',
    date: '15/06/2025',
    readTime: '6 phút đọc',
    excerpt: 'Từ gạch vân đá tự nhiên đến gạch terrazzo retro, năm 2025 chứng kiến sự bùng nổ của nhiều phong cách gạch ốp lát độc đáo. Khám phá ngay những xu hướng sẽ thống trị thị trường nội thất.',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=85',
    featured: true,
  },
  {
    id: 2,
    slug: 'cach-chon-gach-phong-tam',
    title: 'Cách Chọn Gạch Phòng Tắm Đúng Chuẩn — Không Bao Giờ Sai',
    category: 'Tư vấn',
    author: 'Chuyên gia Hải Hương',
    date: '08/06/2025',
    readTime: '8 phút đọc',
    excerpt: 'Phòng tắm là không gian cần đặc biệt chú ý khi chọn gạch: độ chống trơn, khả năng chịu ẩm, và thẩm mỹ phải đồng thời đảm bảo. Đây là checklist đầy đủ từ chuyên gia.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=85',
    featured: false,
  },
  {
    id: 3,
    slug: 'biet-thu-marble-trang-carrara',
    title: 'Biệt Thự Vườn: Khi Marble Trắng Carrara Tạo Nên Sự Khác Biệt',
    category: 'Dự án',
    author: 'NV. Thanh Hà',
    date: '01/06/2025',
    readTime: '5 phút đọc',
    excerpt: 'Case study thực tế: Một biệt thự 800m² tại Vinhomes Grand Park đã chọn gạch marble trắng Carrara của Hải Hương Ceramics. Kết quả vượt mong đợi của chủ nhân.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85',
    featured: false,
  },
  {
    id: 4,
    slug: 'thiet-bi-ve-sinh-thong-minh-2025',
    title: 'Thiết Bị Vệ Sinh Thông Minh 2025: Đầu Tư Một Lần, Hưởng Mãi',
    category: 'Sản phẩm',
    author: 'KTS. Minh Khoa',
    date: '25/05/2025',
    readTime: '7 phút đọc',
    excerpt: 'Bồn cầu cảm ứng, vòi sen điện tử, gương thông minh — những thiết bị vệ sinh hiện đại không chỉ tiết kiệm nước mà còn nâng tầm trải nghiệm sống.',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=85',
    featured: false,
  },
  {
    id: 5,
    slug: 'cach-tinh-so-luong-gach-op-lat',
    title: 'Cách Tính Số Lượng Gạch Ốp Lát Chuẩn Nhất — Không Thừa, Không Thiếu',
    category: 'Tư vấn',
    author: 'Chuyên gia Hải Hương',
    date: '18/05/2025',
    readTime: '4 phút đọc',
    excerpt: 'Công thức tính số lượng gạch chính xác theo diện tích phòng, kể cả phần dự phòng cắt góc và rủi ro vỡ. Tiết kiệm chi phí ngay từ bước lên kế hoạch.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=85',
    featured: false,
  },
  {
    id: 6,
    slug: 'phong-cach-japanese-wabi-sabi',
    title: 'Phong Cách Japanese Wabi-Sabi Và Những Loại Gạch Phù Hợp',
    category: 'Xu hướng',
    author: 'NV. Thanh Hà',
    date: '10/05/2025',
    readTime: '6 phút đọc',
    excerpt: 'Wabi-sabi — triết học về vẻ đẹp không hoàn hảo của Nhật Bản — đang lan tỏa vào thiết kế nội thất Việt Nam. Khám phá cách ứng dụng với gạch ốp lát.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=85',
    featured: false,
  },
]

const categories = ['Tất cả', 'Xu hướng', 'Tư vấn', 'Dự án', 'Sản phẩm']
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
            Xu hướng vật liệu, bí quyết thi công, và nguồn cảm hứng thiết kế từ đội ngũ chuyên gia của chúng tôi.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm font-medium transition-colors border ${
                cat === 'Tất cả'
                  ? 'bg-[#C4933F] text-white border-[#C4933F]'
                  : 'bg-white text-[#6B6B6B] border-[#E0D8CF] hover:border-[#C4933F] hover:text-[#C4933F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

        {/* Load more */}
        <div className="text-center mt-10">
          <button className="border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white px-8 py-3 text-sm font-semibold transition-colors">
            Xem Thêm Bài Viết
          </button>
        </div>
      </div>
    </main>
  )
}
