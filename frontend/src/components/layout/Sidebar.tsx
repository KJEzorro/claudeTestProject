import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: '대시보드', icon: '📊' },
  { to: '/sales', label: '매출 관리', icon: '💰' },
  { to: '/inventory', label: '재고 관리', icon: '📦' },
  { to: '/expenses', label: '지출 관리', icon: '💸' },
  { to: '/customers', label: '고객 관리', icon: '👥' },
  { to: '/reports', label: '보고서', icon: '📋' },
]

export default function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-gray-700">
        SmallBiz Manager
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <span>{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
