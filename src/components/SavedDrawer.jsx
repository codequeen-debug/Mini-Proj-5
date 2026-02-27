import { FaDownload, FaTimes, FaTrash } from 'react-icons/fa'

function downloadCSV(saved) {
  const headers = 'Name,Department,Subject,Level,Year,Rating,Difficulty,Would Take Again %\n'
  const rows = saved.map(p => `"${p.name}","${p.department}","${p.subject}","${p.level}",${p.year},${p.rating},${p.difficulty},${p.wouldTakeAgain}`).join('\n')
  const blob = new Blob([headers + rows], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = 'profswipe-wishlist.csv'; a.click()
  URL.revokeObjectURL(url)
}

function downloadJSON(saved) {
  const blob = new Blob([JSON.stringify(saved, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = 'profswipe-wishlist.json'; a.click()
  URL.revokeObjectURL(url)
}

export default function SavedDrawer({ isOpen, onClose, saved, onUnsave }) {
  if (!isOpen) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', justifyContent: 'flex-end' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: '#00000060', backdropFilter: 'blur(4px)' }} />
      <div style={{ position: 'relative', backgroundColor: '#ffffff', width: '100%', maxWidth: 380, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '-8px 0 40px rgba(0,0,0,0.1)', borderLeft: '1px solid #e5e7eb' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottom: '1px solid #e5e7eb' }}>
          <div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', margin: 0 }}>❤️ Wishlist</h2>
            <p style={{ color: '#4b5563', fontSize: 13, margin: 0 }}>{saved.length} professors saved</p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#4b5563', cursor: 'pointer', fontSize: 18 }}>
            <FaTimes />
          </button>
        </div>

        {/* List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {saved.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: 60 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>💔</div>
              <p style={{ color: '#4b5563' }}>Your wishlist is empty.</p>
              <p style={{ color: '#4b5563', fontSize: 13 }}>Swipe right to save professors!</p>
            </div>
          ) : saved.map(prof => (
            <div key={prof.id} style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: '#f3f4f6', borderRadius: 12, padding: 12 }}>
              <img src={prof.avatar} alt={prof.name} style={{ width: 48, height: 48, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, fontSize: 14, color: '#fff', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{prof.name}</p>
                <p style={{ color: '#570df8', fontSize: 12, margin: '2px 0 0' }}>{prof.subject}</p>
                <span style={{ backgroundColor: '#570df820', color: '#570df8', borderRadius: 999, padding: '1px 8px', fontSize: 11 }}>⭐ {prof.rating}</span>
              </div>
              <button onClick={() => onUnsave(prof.id)}
                style={{ background: 'none', border: 'none', color: '#f87272', cursor: 'pointer', fontSize: 14, padding: 4 }}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        {/* Download */}
        {saved.length > 0 && (
          <div style={{ padding: 16, borderTop: '1px solid #2a323c', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ color: '#4b5563', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, margin: '0 0 4px' }}>Download Wishlist</p>
            <button onClick={() => downloadCSV(saved)}
              style={{ backgroundColor: '#570df8', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <FaDownload /> Download as CSV
            </button>
            <button onClick={() => downloadJSON(saved)}
              style={{ backgroundColor: 'transparent', color: '#570df8', border: '1px solid #570df8', borderRadius: 8, padding: '10px', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <FaDownload /> Download as JSON
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
