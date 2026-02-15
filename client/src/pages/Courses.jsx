import React from 'react'

const mock = [
  { id: 'C101', name: 'Mathematics I', enrolled: 120 },
  { id: 'C202', name: 'Physics II', enrolled: 95 }
]

export default function Courses(){
  return (
    <div>
      <h2>Courses</h2>
      <div className="card">
        <ul>
          {mock.map(c=> <li key={c.id}>{c.id} — {c.name} ({c.enrolled} students)</li>)}
        </ul>
      </div>
    </div>
  )
}
