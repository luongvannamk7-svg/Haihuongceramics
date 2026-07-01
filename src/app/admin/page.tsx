import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import AdminDashboard from './AdminDashboard'

export default async function AdminPage() {
  const cookieStore = await cookies()
  const adminToken = cookieStore.get('admin_token')

  if (!adminToken || adminToken.value !== process.env.ADMIN_SECRET) {
    redirect('/admin/login')
  }

  return <AdminDashboard />
}
