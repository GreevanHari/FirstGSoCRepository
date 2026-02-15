import React from 'react'

const mock = [
  { id:1, name:'Alice Johnson', grade:'A' },
  { id:2, name:'Brian Lee', grade:'B+' },
  { id:3, name:'Carla Gomez', grade:'A-' }
]

export default function Students(){
  return (
    <div>
      <h2>Students</h2>
      <div className="card">
        <table className="table">
          <thead><tr><th>ID</th><th>Name</th><th>Grade</th></tr></thead>
          <tbody>
            {mock.map(s=> (
              <tr key={s.id}><td>{s.id}</td><td>{s.name}</td><td>{s.grade}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
