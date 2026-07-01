'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        setError('Mật khẩu không đúng')
      }
    } catch {
      setError('Lỗi kết nối. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#C4933F] flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">HH</span>
          </div>
          <h1 className="text-xl font-bold text-[#2C2C2C]">Admin Panel</h1>
          <p className="text-sm text-[#6B6B6B] mt-1">Hải Hương Ceramics CMS</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-[#E0D8CF] p-8 space-y-5">
          <div>
            <label className="block text-xs font-medium text-[#2C2C2C] mb-1.5">Mật khẩu quản trị</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-[#E0D8CF] px-3 py-2.5 text-sm focus:outline-none focus:border-[#C4933F]"
              autoFocus
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C4933F] hover:bg-[#D4A853] disabled:opacity-60 text-white py-3 font-semibold text-sm transition-colors"
          >
            {loading ? 'Đang kiểm tra...' : 'Đăng Nhập'}
          </button>
        </form>
      </div>
    </div>
  )
}
