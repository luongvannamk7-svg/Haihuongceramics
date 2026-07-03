import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, User, Tag, Phone, MessageCircle } from 'lucide-react'

const posts: Record<string, {
  title: string
  category: string
  author: string
  date: string
  readTime: string
  heroImage: string
  heroAlt: string
  content: React.ReactNode
}> = {
  'gach-op-lat-60x60-homestay-moc-chau': {
    title: 'Gạch Ốp Lát 60x60 — Lựa Chọn Hoàn Hảo Cho Homestay Tại Mộc Châu',
    category: 'Tư vấn',
    author: 'Chuyên gia Hải Hương',
    date: '20/06/2026',
    readTime: '7 phút đọc',
    heroImage: '/products/gach/60x60/PRIME-09203.jpg',
    heroAlt: 'Gạch ốp lát 60x60 PRIME cho homestay Mộc Châu',
    content: null,
  },
  'bon-cau-thong-minh-roy-thai-lan': {
    title: 'Bồn Cầu Thông Minh ROY Thái Lan — Nâng Tầm Phòng Vệ Sinh Hiện Đại',
    category: 'Sản phẩm',
    author: 'Chuyên gia Hải Hương',
    date: '25/06/2026',
    readTime: '6 phút đọc',
    heroImage: '/products/tbvs/roy/bon-cau/z7987388499972_b5bcc31b1d8db5ea7c90a6c33f198708.jpg',
    heroAlt: 'Bồn cầu thông minh ROY Thái Lan',
    content: null,
  },
  'ngoi-prime-cong-trinh-nghi-duong': {
    title: 'Ngói Lợp PRIME — Ưu Điểm Vượt Trội Cho Công Trình Nghỉ Dưỡng',
    category: 'Sản phẩm',
    author: 'Chuyên gia Hải Hương',
    date: '01/07/2026',
    readTime: '8 phút đọc',
    heroImage: '/products/ngoi/WAVE-XP-401.png',
    heroAlt: 'Ngói lợp PRIME WAVE XP cho công trình nghỉ dưỡng',
    content: null,
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Không tìm thấy bài viết' }
  return {
    title: `${post.title} | Blog Hải Hương Ceramics`,
    description: post.title,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <main className="bg-white">
      {/* Hero */}
      <div className="relative w-full aspect-[16/7] bg-[#2C2C2C] overflow-hidden">
        <Image src={post.heroImage} alt={post.heroAlt} fill className="object-cover opacity-80" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1 text-[#C4933F] text-xs font-medium uppercase tracking-widest mb-3">
            <Tag size={11} /> {post.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-xs text-white/70 mt-3">
            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#C4933F] hover:gap-3 transition-all mb-8">
          <ArrowLeft size={14} /> Quay lại Blog
        </Link>

        <article className="prose prose-sm sm:prose max-w-none text-[#2C2C2C]">
          {slug === 'gach-op-lat-60x60-homestay-moc-chau' && <BlogGach60x60 />}
          {slug === 'bon-cau-thong-minh-roy-thai-lan' && <BlogRoyToilet />}
          {slug === 'ngoi-prime-cong-trinh-nghi-duong' && <BlogNgoiPrime />}
        </article>

        {/* CTA */}
        <div className="mt-12 p-6 bg-[#F8F5F0] border border-[#E0D8CF]">
          <p className="text-[#C4933F] text-xs font-medium uppercase tracking-widest mb-1">Tư Vấn Miễn Phí</p>
          <h3 className="text-lg font-bold text-[#2C2C2C] mb-3">Cần tư vấn thêm về sản phẩm?</h3>
          <p className="text-sm text-[#6B6B6B] mb-4">Đội ngũ chuyên gia của Hải Hương Ceramics tại Mộc Châu sẵn sàng hỗ trợ bạn chọn lựa sản phẩm phù hợp nhất.</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:0399925882" className="inline-flex items-center gap-2 bg-[#C4933F] hover:bg-[#D4A853] text-white px-5 py-2.5 text-sm font-semibold transition-colors">
              <Phone size={15} /> Gọi 0399.925.882
            </a>
            <a href="https://zalo.me/0399925882" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#C4933F] text-[#C4933F] hover:bg-[#C4933F] hover:text-white px-5 py-2.5 text-sm font-semibold transition-colors">
              <MessageCircle size={15} /> Zalo tư vấn
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

function BlogGach60x60() {
  return (
    <div className="space-y-6 text-[#2C2C2C] leading-relaxed">
      <p className="text-lg font-medium text-[#444]">
        Mộc Châu đang trở thành điểm du lịch hot nhất vùng Tây Bắc, kéo theo làn sóng xây dựng homestay bùng nổ. Một trong những quyết định quan trọng nhất khi thiết kế homestay chính là chọn vật liệu ốp lát — và gạch 60x60 đang là lựa chọn hàng đầu của các chủ đầu tư tại đây.
      </p>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Tại Sao Gạch 60x60 Phù Hợp Với Homestay Mộc Châu?</h2>
      <p>Khí hậu Mộc Châu ẩm, nhiều sương mù, biên độ nhiệt ngày đêm cao. Đây là yếu tố khắc nghiệt với vật liệu xây dựng. Gạch ceramic và porcelain cỡ 60x60 có ưu thế rõ rệt:</p>
      <ul className="list-disc pl-5 space-y-2 text-[#444]">
        <li><strong>Ít mạch vữa hơn</strong> — viên gạch lớn, số mạch vữa ít hơn gạch nhỏ, hạn chế thẩm thấu và nấm mốc trong điều kiện ẩm cao.</li>
        <li><strong>Thị giác rộng rãi</strong> — phòng nhỏ trở nên thoáng đãng hơn, rất phù hợp cho phòng ngủ và phòng khách homestay.</li>
        <li><strong>Dễ vệ sinh</strong> — bề mặt lớn, phẳng, chủ homestay tiết kiệm thời gian dọn dẹp.</li>
        <li><strong>Đa dạng phong cách</strong> — từ vân đá marble sang trọng đến tone mộc mạc earth tone phù hợp với không khí núi rừng Mộc Châu.</li>
      </ul>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Các Dòng Gạch 60x60 Nổi Bật Tại Hải Hương Ceramics</h2>

      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        <div className="border border-[#E0D8CF] p-4 bg-[#FAFAF8]">
          <div className="relative aspect-square mb-3 overflow-hidden">
            <Image src="/products/gach/60x60/PRIME-09203.jpg" alt="Gạch PRIME 09203" fill className="object-cover" />
          </div>
          <h4 className="font-bold text-sm text-[#2C2C2C] mb-1">Gạch PRIME 09203</h4>
          <p className="text-xs text-[#6B6B6B]">Vân đá tự nhiên tinh tế, tone kem trắng nhẹ nhàng. Phù hợp phòng ngủ và phòng khách phong cách resort.</p>
          <Link href="/san-pham/gach-prime-09203-60x60" className="inline-block mt-2 text-[#C4933F] text-xs font-medium hover:underline">Xem sản phẩm →</Link>
        </div>
        <div className="border border-[#E0D8CF] p-4 bg-[#FAFAF8]">
          <div className="relative aspect-square mb-3 overflow-hidden">
            <Image src="/products/gach/60x60/HM-06354.jpg" alt="Gạch HM 06354" fill className="object-cover" />
          </div>
          <h4 className="font-bold text-sm text-[#2C2C2C] mb-1">Gạch HM 06354</h4>
          <p className="text-xs text-[#6B6B6B]">Vân gỗ mộc mạc, tone nâu ấm. Tạo cảm giác gần gũi thiên nhiên, rất hợp với phong cách cabin Tây Bắc.</p>
          <Link href="/san-pham/gach-hm-06354-60x60" className="inline-block mt-2 text-[#C4933F] text-xs font-medium hover:underline">Xem sản phẩm →</Link>
        </div>
        <div className="border border-[#E0D8CF] p-4 bg-[#FAFAF8]">
          <div className="relative aspect-square mb-3 overflow-hidden">
            <Image src="/products/gach/60x60/TTC-39006.jpg" alt="Gạch TTC 39006" fill className="object-cover" />
          </div>
          <h4 className="font-bold text-sm text-[#2C2C2C] mb-1">Gạch TTC 39006</h4>
          <p className="text-xs text-[#6B6B6B]">Tone xám trung tính hiện đại, dễ phối nội thất. Lý tưởng cho sảnh đón và hành lang.</p>
          <Link href="/san-pham/gach-ttc-39006-60x60" className="inline-block mt-2 text-[#C4933F] text-xs font-medium hover:underline">Xem sản phẩm →</Link>
        </div>
        <div className="border border-[#E0D8CF] p-4 bg-[#FAFAF8]">
          <div className="relative aspect-square mb-3 overflow-hidden">
            <Image src="/products/gach/60x60/PRIME-39001.jpg" alt="Gạch PRIME 39001" fill className="object-cover" />
          </div>
          <h4 className="font-bold text-sm text-[#2C2C2C] mb-1">Gạch PRIME 39001</h4>
          <p className="text-xs text-[#6B6B6B]">Vân đá marble trắng sang trọng, bề mặt bóng mờ chống chói. Phù hợp phòng tắm và phòng khách cao cấp.</p>
          <Link href="/san-pham/gach-39301-60x60" className="inline-block mt-2 text-[#C4933F] text-xs font-medium hover:underline">Xem sản phẩm →</Link>
        </div>
      </div>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Lời Khuyên Từ Chuyên Gia</h2>
      <p>Với homestay tại vùng cao như Mộc Châu, chúng tôi khuyến nghị:</p>
      <ul className="list-disc pl-5 space-y-2 text-[#444]">
        <li><strong>Phòng ngủ & phòng khách:</strong> Chọn gạch vân đá marble hoặc vân gỗ tone ấm, bề mặt bóng nhẹ để giữ ấm cảm giác thị giác.</li>
        <li><strong>Sân thượng & hành lang ngoài trời:</strong> Ưu tiên gạch có hệ số chống trơn R10-R11, bề mặt mờ chống thấm.</li>
        <li><strong>Phòng tắm:</strong> Gạch 60x60 dùng trên sàn kết hợp gạch 30x60 ốp tường tạo sự đồng nhất.</li>
        <li><strong>Đặt dư 5-10%:</strong> Luôn đặt thêm để dự phòng cắt góc và thay thế khi cần.</li>
      </ul>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Hải Hương Ceramics — Đơn Vị Cung Cấp Uy Tín Tại Mộc Châu</h2>
      <p>
        Với hơn 20 năm kinh nghiệm và kho hàng gần 3.000m² tại thị trấn Mộc Châu, Hải Hương Ceramics có thể đáp ứng nhu cầu vật liệu cho mọi quy mô homestay — từ căn 3-4 phòng đến resort nhiều tòa. Chúng tôi có sẵn hàng, giao nhanh trong ngày nội tỉnh Sơn La.
      </p>
      <p>
        Liên hệ ngay hotline <strong>0399.925.882</strong> để được tư vấn miễn phí về thiết kế và chọn gạch phù hợp cho dự án của bạn.
      </p>
    </div>
  )
}

function BlogRoyToilet() {
  return (
    <div className="space-y-6 text-[#2C2C2C] leading-relaxed">
      <p className="text-lg font-medium text-[#444]">
        Trong thời đại mà trải nghiệm phòng tắm ngày càng được đề cao, bồn cầu thông minh không còn là xa xỉ phẩm — mà là khoản đầu tư thiết thực nâng cao chất lượng sống. Thương hiệu ROY từ Thái Lan đang là lựa chọn được tin dùng nhất tại các công trình cao cấp khu vực Sơn La.
      </p>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">ROY — Thương Hiệu Thiết Bị Vệ Sinh Hàng Đầu Thái Lan</h2>
      <p>
        ROY là thương hiệu thiết bị vệ sinh cao cấp được sản xuất tại Thái Lan theo tiêu chuẩn quốc tế, có mặt tại Việt Nam từ nhiều năm nay. Sản phẩm ROY được tin tưởng bởi các kiến trúc sư và chủ đầu tư nhờ:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-[#444]">
        <li><strong>Chất lượng sứ cao cấp</strong> — độ bền cao, bề mặt bóng mịn, ít bám cặn.</li>
        <li><strong>Công nghệ xả nước tiên tiến</strong> — tiết kiệm nước tối đa 4-6 lít/lần xả.</li>
        <li><strong>Thiết kế tối giản hiện đại</strong> — phù hợp mọi phong cách từ Scandinavian đến Tropical.</li>
        <li><strong>Bảo hành dài hạn</strong> — ROY cam kết bảo hành 3-5 năm cho toàn bộ sản phẩm.</li>
      </ul>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Dòng Bồn Cầu ROY Tại Hải Hương Ceramics</h2>
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        <div className="border border-[#E0D8CF] p-4 bg-[#FAFAF8]">
          <div className="relative aspect-[4/3] mb-3 overflow-hidden">
            <Image src="/products/tbvs/roy/bon-cau/z7987388499972_b5bcc31b1d8db5ea7c90a6c33f198708.jpg" alt="Bồn cầu ROY 1 khối" fill className="object-cover" />
          </div>
          <h4 className="font-bold text-sm text-[#2C2C2C] mb-1">ROY Bồn Cầu 1 Khối</h4>
          <p className="text-xs text-[#6B6B6B]">Thiết kế liền khối thanh lịch, dễ vệ sinh, phù hợp phòng tắm nhỏ gọn.</p>
          <Link href="/san-pham/bon-cau-roy-1" className="inline-block mt-2 text-[#C4933F] text-xs font-medium hover:underline">Xem sản phẩm →</Link>
        </div>
        <div className="border border-[#E0D8CF] p-4 bg-[#FAFAF8]">
          <div className="relative aspect-[4/3] mb-3 overflow-hidden">
            <Image src="/products/tbvs/roy/bon-cau/z7987388513502_7edf86691180cbb12f64f7a9036a758f.jpg" alt="Bồn cầu ROY 2 khối" fill className="object-cover" />
          </div>
          <h4 className="font-bold text-sm text-[#2C2C2C] mb-1">ROY Bồn Cầu 2 Khối</h4>
          <p className="text-xs text-[#6B6B6B]">Kiểu dáng truyền thống, két nước rời, dễ sửa chữa và thay thế phụ kiện.</p>
          <Link href="/san-pham/bon-cau-roy-2" className="inline-block mt-2 text-[#C4933F] text-xs font-medium hover:underline">Xem sản phẩm →</Link>
        </div>
      </div>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Tính Năng Thông Minh Nổi Bật</h2>
      <div className="grid sm:grid-cols-3 gap-4 not-prose">
        {[
          { title: 'Xả Kép Thông Minh', desc: 'Chọn mức xả 3L hoặc 6L tùy nhu cầu, tiết kiệm nước đáng kể.' },
          { title: 'Bề Mặt Nano', desc: 'Lớp phủ nano chống bám cặn, vi khuẩn, giữ sạch lâu dài.' },
          { title: 'Gioăng Chống Mùi', desc: 'Hệ thống chống mùi hiệu quả, duy trì không khí phòng tắm trong lành.' },
        ].map(f => (
          <div key={f.title} className="bg-[#F8F5F0] border border-[#E0D8CF] p-4">
            <h4 className="font-bold text-sm text-[#C4933F] mb-2">{f.title}</h4>
            <p className="text-xs text-[#6B6B6B]">{f.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Bộ Thiết Bị Vệ Sinh ROY Đồng Bộ</h2>
      <p>Hải Hương Ceramics cung cấp trọn bộ thiết bị vệ sinh ROY để đảm bảo tính đồng bộ về màu sắc và phong cách:</p>
      <ul className="list-disc pl-5 space-y-2 text-[#444]">
        <li><strong>Bồn cầu ROY</strong> — 5 model đa dạng (1 khối, 2 khối, treo tường).</li>
        <li><strong>Lavabo ROY</strong> — lavabo âm bàn, lavabo đặt bàn, lavabo treo tường với nhiều kích thước.</li>
        <li><strong>Sen cây & sen vòi ROY</strong> — hệ thống sen tắm hiện đại, điều chỉnh nhiệt độ dễ dàng.</li>
        <li><strong>Vòi chậu ROY</strong> — vòi chậu rửa mặt đồng bộ tone trắng bạc.</li>
      </ul>
      <p>
        Mua trọn bộ tại Hải Hương Ceramics để được báo giá ưu đãi và tư vấn lắp đặt miễn phí.
      </p>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Tại Sao Chọn Hải Hương Ceramics?</h2>
      <p>
        Là đại lý phân phối chính thức thiết bị vệ sinh ROY tại Sơn La, Hải Hương Ceramics cam kết: hàng chính hãng, bảo hành đầy đủ, giao hàng tận nơi trong tỉnh. Showroom trưng bày đầy đủ sản phẩm tại thị trấn Mộc Châu — khách hàng có thể trải nghiệm trực tiếp trước khi quyết định.
      </p>
    </div>
  )
}

function BlogNgoiPrime() {
  return (
    <div className="space-y-6 text-[#2C2C2C] leading-relaxed">
      <p className="text-lg font-medium text-[#444]">
        Khi xây dựng công trình nghỉ dưỡng tại vùng cao như Mộc Châu — nơi có mưa nhiều, gió mạnh, sương mù dày đặc — việc chọn đúng vật liệu lợp mái là yếu tố sống còn. Ngói lợp PRIME từ lâu đã được các nhà thầu và chủ đầu tư tin dùng nhờ chất lượng vượt trội và tính thẩm mỹ cao.
      </p>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">PRIME — Thương Hiệu Ngói Hàng Đầu Việt Nam</h2>
      <p>
        Tập đoàn PRIME là đơn vị sản xuất gạch và ngói lớn nhất Việt Nam với hơn 25 nhà máy, công suất hàng tỷ viên/năm. Ngói PRIME được sản xuất bằng công nghệ tiên tiến từ châu Âu, đạt chuẩn TCVN và ISO, phù hợp mọi khí hậu — kể cả vùng cao khắc nghiệt như Sơn La.
      </p>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">3 Dòng Ngói PRIME Tại Hải Hương Ceramics</h2>

      <div className="grid sm:grid-cols-3 gap-4 not-prose">
        <div className="border border-[#E0D8CF] p-4 bg-[#FAFAF8]">
          <div className="relative aspect-square mb-3 overflow-hidden">
            <Image src="/products/ngoi/Hera-08.06.101-Do-1.jpg" alt="Ngói Hera PRIME" fill className="object-cover" />
          </div>
          <h4 className="font-bold text-sm text-[#2C2C2C] mb-1">Ngói Hera</h4>
          <p className="text-xs text-[#6B6B6B]">Dáng vảy cá truyền thống, màu đỏ gạch đặc trưng. Tạo cảm giác ấm áp, mộc mạc cho biệt thự nghỉ dưỡng.</p>
          <Link href="/san-pham/ngoi-hera-do-08-06-101" className="inline-block mt-2 text-[#C4933F] text-xs font-medium hover:underline">Xem sản phẩm →</Link>
        </div>
        <div className="border border-[#E0D8CF] p-4 bg-[#FAFAF8]">
          <div className="relative aspect-square mb-3 overflow-hidden">
            <Image src="/products/ngoi/Planio-ghi-den-1.jpg" alt="Ngói Planio PRIME" fill className="object-cover" />
          </div>
          <h4 className="font-bold text-sm text-[#2C2C2C] mb-1">Ngói Planio</h4>
          <p className="text-xs text-[#6B6B6B]">Tone xám đen hiện đại, profile phẳng tối giản. Phù hợp công trình kiến trúc đương đại, resort cao cấp.</p>
          <Link href="/san-pham/ngoi-planio-ghi-den" className="inline-block mt-2 text-[#C4933F] text-xs font-medium hover:underline">Xem sản phẩm →</Link>
        </div>
        <div className="border border-[#E0D8CF] p-4 bg-[#FAFAF8]">
          <div className="relative aspect-square mb-3 overflow-hidden">
            <Image src="/products/ngoi/WAVE-XP-401.png" alt="Ngói WAVE XP PRIME" fill className="object-cover" />
          </div>
          <h4 className="font-bold text-sm text-[#2C2C2C] mb-1">Ngói WAVE XP</h4>
          <p className="text-xs text-[#6B6B6B]">Sóng lớn, chồng phủ ưu việt, chống mưa đạt chuẩn. Nhiều màu đa dạng — đỏ, nâu, ghi xanh, đen.</p>
          <Link href="/san-pham/ngoi-wave-xp-401" className="inline-block mt-2 text-[#C4933F] text-xs font-medium hover:underline">Xem sản phẩm →</Link>
        </div>
      </div>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Ưu Điểm Khi Dùng Ngói PRIME Cho Công Trình Nghỉ Dưỡng</h2>

      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {[
          {
            title: '1. Chịu Được Khí Hậu Khắc Nghiệt',
            desc: 'Ngói PRIME được nung ở nhiệt độ cao (>1200°C), có độ hút nước thấp (<6%), chịu đựng mưa axit, sương muối và biên độ nhiệt lớn — lý tưởng cho vùng núi cao.'
          },
          {
            title: '2. Cách Nhiệt, Cách Âm Tốt',
            desc: 'Cấu trúc sứ đặc chắc giúp điều tiết nhiệt độ tự nhiên — mát hơn vào mùa hè, ấm hơn vào mùa đông. Phù hợp với mục tiêu "sống xanh" của các resort sinh thái.'
          },
          {
            title: '3. Tuổi Thọ Cao, Bảo Trì Thấp',
            desc: 'Ngói PRIME có tuổi thọ 50-70 năm, không cần sơn, không bị han gỉ, không phai màu. Chủ đầu tư chỉ cần lắp một lần, hưởng lâu dài.'
          },
          {
            title: '4. Thẩm Mỹ Cao, Tăng Giá Trị Bất Động Sản',
            desc: 'Mái ngói tạo điểm nhấn kiến trúc đẹp, giúp homestay/resort nổi bật trong ảnh chụp, thu hút khách đặt phòng hơn so với mái tôn thông thường.'
          },
          {
            title: '5. Thân Thiện Với Môi Trường',
            desc: 'Ngói sản xuất từ đất sét tự nhiên, không phát sinh chất thải độc hại, hoàn toàn có thể tái chế — phù hợp xu hướng xây dựng bền vững.'
          },
          {
            title: '6. Đa Dạng Màu Sắc & Kiểu Dáng',
            desc: 'Hải Hương Ceramics có sẵn đa dạng dòng ngói PRIME (Hera, Planio, WAVE XP) với nhiều màu sắc, kiến trúc sư dễ dàng chọn đúng phong cách.'
          },
        ].map(item => (
          <div key={item.title} className="bg-[#F8F5F0] border border-[#E0D8CF] p-4">
            <h4 className="font-semibold text-sm text-[#2C2C2C] mb-2">{item.title}</h4>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Lưu Ý Khi Thi Công Ngói PRIME</h2>
      <ul className="list-disc pl-5 space-y-2 text-[#444]">
        <li><strong>Độ dốc mái tối thiểu 22°</strong> — đảm bảo thoát nước tốt, tránh đọng nước và rêu mốc.</li>
        <li><strong>Khoảng cách rui mè chuẩn</strong> — theo catalogue của từng dòng ngói để đảm bảo lợp đúng số viên, không hở mối.</li>
        <li><strong>Ngói cạnh phải đặt hàng riêng</strong> — Hải Hương Ceramics có đủ phụ kiện đầu hồi, nóc giặt và nóc đầu.</li>
        <li><strong>Đặt dư 5%</strong> — dự phòng vỡ khi vận chuyển và cắt góc tại mái.</li>
      </ul>

      <h2 className="text-xl font-bold text-[#2C2C2C] mt-8">Đặt Hàng Ngói PRIME Tại Mộc Châu</h2>
      <p>
        Hải Hương Ceramics là đại lý phân phối ngói PRIME tại Sơn La với kho hàng tại chỗ. Chúng tôi có thể cung ứng số lượng lớn cho các dự án nghỉ dưỡng, giao hàng tận công trình trong toàn tỉnh Sơn La.
      </p>
      <p>
        Gọi ngay <strong>0399.925.882</strong> để nhận báo giá và tư vấn chọn dòng ngói phù hợp với công trình của bạn.
      </p>
    </div>
  )
}
