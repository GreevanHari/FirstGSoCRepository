import React from 'react'

const columns = [
  { key: 'contacted', title: 'Contacted', items: [
    { id:1, title:'ByteBridge', desc:'Corporate and personal data protection on a turnkey basis', date:'18 Apr' },
    { id:4, title:'AI Synergy', desc:'Innovative solutions based on artificial intelligence', date:'21 Mar' }
  ]},
  { key: 'negotiation', title: 'Negotiation', items: [
    { id:2, title:'SkillUp Hub', desc:'Platform for professional development of specialists', date:'09 Mar' },
    { id:5, title:'Thera Well', desc:'Platform for psychological support and consultations', date:'No due date' }
  ]},
  { key: 'offer', title: 'Offer Sent', items: [
    { id:3, title:'FitLife Nutrition', desc:'Nutritious food and nutraceuticals for individuals', date:'10 Mar' },
    { id:6, title:'Prime Estate', desc:'Agency-developer of low-rise elite and commercial real estate', date:'05 Apr' }
  ]},
  { key: 'closed', title: 'Deal Closed', items: [
    { id:7, title:'CloudSphere', desc:'Cloud services for data storage and processing', date:'24 Mar' }
  ]}
]

function Card({item}){
  return (
    <div className="kanban-card">
      <div className="card-title">{item.title}</div>
      <div className="card-desc">{item.desc}</div>
      <div className="card-meta">{item.date}</div>
    </div>
  )
}

export default function KanbanBoard(){
  return (
    <div className="kanban">
      {columns.map(col=> (
        <div className="kanban-col" key={col.key}>
          <div className="col-header">{col.title} <span className="col-count">{col.items.length}</span></div>
          <div className="col-list">
            {col.items.map(i=> <Card key={i.id} item={i} />)}
          </div>
        </div>
      ))}
    </div>
  )
}
