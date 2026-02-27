import { FaFire } from 'react-icons/fa'

export default function Header() {
  return (
    <div className="border-b border-gray-200 py-8 text-center" style={{ backgroundColor: '#003366' }}>
      <h1 className="font-syne font-extrabold text-3xl text-white">
        College of Florida Professor Ratings
      </h1>
      <p className="text-gray-100 text-base max-w-lg mx-auto mt-2">
        Tap the heart to save, X to skip, ⭐ to wishlist a top pick.
      </p>
    </div>
  )
}
