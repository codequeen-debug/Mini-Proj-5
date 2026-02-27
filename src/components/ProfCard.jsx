import { FaStar } from 'react-icons/fa'

function Bar({ value, max = 5, color }) {
  return (
    <div style={{ flex: 1, backgroundColor: '#e5e7eb', borderRadius: 999, height: 6 }}>
      <div className="rating-bar" style={{ width: `${(value / max) * 100}%`, backgroundColor: color, height: 6, borderRadius: 999 }} />
    </div>
  )
}

export default function ProfCard({ prof, isSaved }) {
  const ratingColor = prof.rating >= 4.5 ? '#10b981' : prof.rating >= 3.5 ? '#6366f1' : prof.rating >= 2.5 ? '#fbbd23' : '#f87272'

  return (
    <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 24, width: '100%', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
      {/* Image */}
      <div style={{ position: 'relative' }}>
        <img src={prof.avatar} alt={prof.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #ffffff, transparent)' }} />
        {isSaved && (
          <span style={{ position: 'absolute', top: 12, right: 12, backgroundColor: '#FF6B6B', color: '#fff', borderRadius: 999, padding: '3px 10px', fontSize: 12, fontWeight: 600 }}>
            ❤️ Saved
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: '#1f2937', margin: 0 }}>{prof.name}</h2>
          <p style={{ color: '#666', fontWeight: 500, fontSize: 14, margin: '4px 0' }}>{prof.subject}</p>
          <p style={{ color: '#999', fontSize: 12, margin: 0 }}>{prof.department}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 'auto' }}>
          <FaStar style={{ color: '#FFD700', fontSize: 16 }} />
          <Bar value={prof.rating} color={ratingColor} />
          <span style={{ fontSize: 14, fontWeight: 700, color: '#1f2937', minWidth: 35, textAlign: 'right' }}>{prof.rating}</span>
        </div>
      </div>
    </div>
  )
}
