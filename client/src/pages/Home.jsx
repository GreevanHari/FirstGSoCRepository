import React from 'react'

export default function Home(){
  return (
    <div>
      <h2>Welcome to Institution Analytics</h2>
      <p>Use the sidebar to browse dashboards, students, courses and reports.</p>
      <div className="grid">
        <div className="card">Total Students<br/><strong>1,240</strong></div>
        <div className="card">Active Courses<br/><strong>86</strong></div>
        <div className="card">Avg Pass Rate<br/><strong>84%</strong></div>
      </div>
      <div style={{height:18}}/>
      <div className="card">
        <h3>Recent Activity</h3>
        <p>Activity feed and quick glance items will appear here.</p>
      </div>
    </div>
  )
}
