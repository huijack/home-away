import { User2 } from 'lucide-react'
import { fetchProfileImage } from '@/utils/actions'

async function UserIcon() {
  const profileImage = await fetchProfileImage()
  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    )
  }
  return (
    <User2
      className="bg-primary rounded-full text-white"
      style={{ width: '1.5rem', height: '1.5rem' }}
    />
  )
}
export default UserIcon
