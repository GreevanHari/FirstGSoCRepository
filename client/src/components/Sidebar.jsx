import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutGrid, Users, BookOpen, FileText, Settings, LogOut, Hexagon } from 'lucide-react'

const links = [
  { to: '/', icon: Hexagon, label: 'Home' }, // Using Home as a placeholder for the logo/brand link if needed, or just top item
  { to: '/dashboard', icon: LayoutGrid, label: 'Dashboard' },
  { to: '/students', icon: Users, label: 'Students' },
  { to: '/courses', icon: BookOpen, label: 'Courses' },
  { to: '/reports', icon: FileText, label: 'Reports' },
  { to: '/settings', icon: Settings, label: 'Settings' }
]

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <Hexagon size={24} fill="white" />
      </div>

      {links.slice(1).map(l => ( // Skip the first one as it was just a placeholder in my thought process, or adjust
        <NavLink
          key={l.to}
          to={l.to}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          title={l.label}
        >
          <l.icon size={24} />
        </NavLink>
      ))}

      <div className="sidebar-footer">
        <div className="nav-item">
          <LogOut size={24} />
        </div>
      </div>
    </nav>
  )
}
