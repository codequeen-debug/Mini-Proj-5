import { useState, useEffect } from 'react'
import { FaTimes, FaStar, FaHeart } from 'react-icons/fa'
import ProfCard from './ProfCard'

export default function SwipeStack({ professors, onSave, onReviewed, saved, isGuest, onFullAccess }) {
  const [index, setIndex] = useState(0)
  const [animClass, setAnimClass] = useState('')

  const current = professors[index]

  useEffect(() => {
    if (isGuest && index >= 3) {
      onFullAccess()
    }
  }, [index, isGuest, onFullAccess])

  const animate = (cls, callback) => {
    setAnimClass(cls)
    setTimeout(() => { setAnimClass(''); callback() }, 400)
  }

  const handleNext = (callback) => {
    if (!current) return
    setIndex(i => i + 1)
    if (callback) callback()
  }

  const handleSkip = () => animate('fly-left', () => { onReviewed(current); handleNext() })
  const handleSave = () => animate('fly-right', () => { onSave(current); onReviewed(current); handleNext() })
  const handleTopPick = () => animate('fly-up', () => { onSave(current); onReviewed(current); handleNext() })

  // Guest over limit — useEffect above will call onFullAccess, render nothing in the meantime
  if (isGuest && index >= 3) return null

  // No professors found
  if (!current) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div style={{ fontSize: 64 }}>🔍</div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff' }}>No professors found</h2>
        <p style={{ color: '#4b5563' }}>Try adjusting your filters.</p>
      </div>
    )
  }

  // Non-guests: all professors viewed
  if (!isGuest && index >= professors.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div style={{ fontSize: 64 }}>🎓</div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff' }}>You've seen them all!</h2>
        <p style={{ color: '#4b5563' }}>You went through all {professors.length} professors.</p>
        <button onClick={() => setIndex(0)}
          style={{ marginTop: 8, backgroundColor: '#003366', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontWeight: 600, cursor: 'pointer', fontSize: 15 }}>
          Start Over
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Progress bar */}
      <div style={{ width: '100%', maxWidth: 360 }}>
        <div className="flex justify-between mb-1" style={{ fontSize: 12, color: '#4b5563' }}>
          <span>{index + 1} of {isGuest ? 3 : professors.length}</span>
          <span>{Math.round((index / (isGuest ? 3 : professors.length)) * 100)}% done</span>
        </div>
        <div style={{ backgroundColor: '#e5e7eb', borderRadius: 999, height: 6 }}>
          <div style={{ width: `${(index / (isGuest ? 3 : professors.length)) * 100}%`, backgroundColor: '#003366', height: 6, borderRadius: 999, transition: 'width 0.3s ease' }} />
        </div>
      </div>

      {/* Card stack */}
      <div style={{ position: 'relative', width: 360, height: 520 }}>
        {index + 1 < professors.length && (
          <div style={{ position: 'absolute', inset: 0, backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 24, transform: 'scale(0.95) translateY(12px)', zIndex: 0 }} />
        )}
        <div className={animClass} style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <ProfCard prof={current} isSaved={!!saved.find(p => p.id === current.id)} />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-6 items-center">
        {[
          { fn: handleSkip, label: <FaTimes />, bg: 'transparent', border: '2px solid #666', color: '#666', title: 'Skip' },
          { fn: handleTopPick, label: <FaStar />, bg: '#FFD700', border: 'none', color: '#333', title: 'Top Pick' },
          { fn: handleSave, label: <FaHeart />, bg: '#FF6B6B', border: 'none', color: '#fff', title: 'Save' },
        ].map((b, i) => (
          <button key={i} onClick={b.fn} title={b.title}
            style={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: b.bg, border: b.border, color: b.color, fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {b.label}
          </button>
        ))}
      </div>

      <p style={{ fontSize: 12, color: '#4b5563', marginTop: -8 }}>Skip &nbsp;·&nbsp; Top Pick &nbsp;·&nbsp; Save</p>
    </div>
  )
}