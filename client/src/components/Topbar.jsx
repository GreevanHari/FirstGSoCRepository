import React, { useState } from 'react'
import { Bell, Mail } from 'lucide-react'

const navItems = ['Schedule', 'Analytics', 'Candidates', 'KPI', 'Leads']

export default function Topbar() {
  const [activeTab, setActiveTab] = useState('Analytics')

  return (
    <header className="topbar">
      <div className="greeting">
        <h1>Good morning, Maria</h1>
        <p>long time no see</p>
      </div>

      <nav className="top-nav">
        {navItems.map(item => (
          <div
            key={item}
            className={`top-nav-item ${activeTab === item ? 'active' : ''}`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </div>
        ))}
      </nav>

      <div className="top-actions">
        <div className="action-btn">
          <Bell size={20} />
        </div>
        <div className="action-btn">
          <Mail size={20} />
        </div>
        <div className="user-profile">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80" alt="Profile" />
        </div>
      </div>
    </header>
  )
}
