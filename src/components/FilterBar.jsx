import { FaFilter, FaSortAmountDown } from 'react-icons/fa'

const selectStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #d1d5db',
  borderRadius: 8,
  padding: '6px 12px',
  color: '#1f2937',
  fontSize: 14,
  cursor: 'pointer',
  minWidth: 140,
}

export default function FilterBar({ professors, filters, onChange }) {
  // Filter departments to only Computer Science and Psychology
  const departments = ['All', 'Computer Science', 'Psychology']
  const update = (key, value) => onChange(prev => ({ ...prev, [key]: value }))

  return (
    <div className="bg-white border rounded-lg p-4 mb-6 flex flex-wrap gap-3 items-center" style={{ borderColor: '#FF9900' }}>
      {/* Department Filter - Choose between all professors or a specific department */}
      <div className="flex items-center gap-2 font-semibold text-sm" style={{ color: '#003366' }}>
        <FaFilter />
        <span>Filter by Department</span>
      </div>

      <select style={{ ...selectStyle, borderColor: '#FF9900' }} value={filters.department} onChange={e => update('department', e.target.value)}>
        <option value="All">All Departments</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Psychology">Psychology</option>
      </select>

      {/* Sort Option - Organize professors by highest rating */}
      <div className="flex items-center gap-2 font-semibold text-sm" style={{ color: '#FF9900' }}>
        <FaSortAmountDown />
        <span>Sort</span>
      </div>

      <select style={{ ...selectStyle, borderColor: '#FF9900' }} value={filters.sortBy} onChange={e => update('sortBy', e.target.value)}>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
  )
}
