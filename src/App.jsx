import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

import Navbar from './components/Navbar'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import SwipeStack from './components/SwipeStack'
import SavedDrawer from './components/SavedDrawer'
import ReviewedList from './components/ReviewedList'
import Loader from './components/Loader'
import Footer from './components/Footer'

import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App() {
  const [professors, setProfessors] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [saved, setSaved] = useState(() => {
  const stored = localStorage.getItem('profswipe-saved')
  return stored ? JSON.parse(stored) : []
})
const [reviewed, setReviewed] = useState(() => {
  const stored = localStorage.getItem('profswipe-reviewed')
  return stored ? JSON.parse(stored) : []
})
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [reviewedOpen, setReviewedOpen] = useState(false)
  const [filters, setFilters] = useState({
    department: 'All',
    sortBy: 'rating',
  })

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/professors.json')
        const data = await res.json()
        setProfessors(data)
      } catch (err) {
        console.error('Failed to load:', err)
      } finally {
        setTimeout(() => setLoading(false), 800)
      }
    }
    load()
  }, [])

  useEffect(() => {
    let result = [...professors]
    if (filters.department !== 'All') result = result.filter(p => p.department === filters.department)
    if (filters.sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)
    setFiltered(result)
  }, [professors, filters])

  useEffect(() => {
    localStorage.setItem('profswipe-saved', JSON.stringify(saved))
  }, [saved])

  useEffect(() => {
    localStorage.setItem('profswipe-reviewed', JSON.stringify(reviewed))
  }, [reviewed])

  const handleSave = (prof) => setSaved(prev => prev.find(p => p.id === prof.id) ? prev : [...prev, prof])
  const handleUnsave = (id) => setSaved(prev => prev.filter(p => p.id !== id))
  const handleReviewed = (prof) => setReviewed(prev => prev.find(p => p.id === prof.id) ? prev : [...prev, prof])

  const { currentUser } = useAuth()

  // guests see only a subset of professors
  const visibleProfessors = currentUser ? filtered : filtered.slice(0, 3)

  return (
    <div style={{ minHeight: '100vh' }} className="flex flex-col bg-white text-gray-800">
      <Navbar
        savedCount={saved.length}
        reviewedCount={reviewed.length}
        onOpenSaved={() => setDrawerOpen(true)}
        onOpenReviewed={() => setReviewedOpen(true)}
      />
      <Header />

      <Routes>
        <Route path="/" element={(
          <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6">
            <FilterBar professors={professors} filters={filters} onChange={setFilters} />
            {!currentUser && (
              <div className="mb-4 p-3 rounded border bg-yellow-50 text-yellow-800">
                You're viewing a limited preview. <a href="/login" className="underline">Log in</a> to see all professors.
              </div>
            )}
            {loading ? <Loader /> : (
              <SwipeStack professors={visibleProfessors} onSave={handleSave} onReviewed={handleReviewed} saved={saved} />
            )}
          </main>
        )} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
      <SavedDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} saved={saved} onUnsave={handleUnsave} />
      {reviewedOpen && <ReviewedList reviewed={reviewed} onClose={() => setReviewedOpen(false)} />}
    </div>
  )
}
