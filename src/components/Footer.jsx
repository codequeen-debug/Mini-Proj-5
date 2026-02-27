import { PiStudent } from 'react-icons/pi'
import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-center mt-8">
      <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
        <PiStudent style={{ color: '#003366' }} />
        <span className="font-syne font-bold" style={{ color: '#003366' }}>College of Florida</span>
        <span>—</span>
        <span>Made for students everywhere</span>
      </div>
    </footer>
  )
}
