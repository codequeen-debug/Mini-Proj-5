import { PiStudent } from 'react-icons/pi'
import { FaHeart, FaCheckCircle } from 'react-icons/fa'

export default function Navbar({ savedCount, reviewedCount, onOpenSaved, onOpenReviewed }) {
  return (
    <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 50 }}
      className="flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <PiStudent style={{ color: '#003366', fontSize: 28 }} />
        <span className="font-syne font-extrabold text-xl" style={{ color: '#003366' }}>
          College of Florida
        </span>
      </div>

      <p className="hidden md:block italic text-gray-600 text-sm">
        Find your perfect professor match
      </p>

      <div className="flex items-center gap-3">
        <button onClick={onOpenReviewed}
          className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100 text-gray-700 text-sm">
          <FaCheckCircle className="text-green-500" />
          Reviewed
          {reviewedCount > 0 && (
            <span className="bg-green-500 text-white rounded-full px-2 text-xs font-bold">
              {reviewedCount}
            </span>
          )}
        </button>

        <button onClick={onOpenSaved}
          className="flex items-center gap-2 px-4 py-2 text-white rounded hover:opacity-90 text-sm font-semibold" style={{ backgroundColor: '#003366' }}>
          <FaHeart />
          Wishlist
          {savedCount > 0 && (
            <span className="bg-pink-500 text-white rounded-full px-2 text-xs font-bold">
              {savedCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}
