import React from 'react'
import StudentChart from '../components/StudentChart'

export default function Reports(){
  const labels = ['Jan','Feb','Mar','Apr','May','Jun']
  const data = [100,110,130,125,140,150]
  return (
    <div>
      <h2>Reports</h2>
      <div className="card">
        <h3>Monthly Enrollment</h3>
        <StudentChart labels={labels} data={data} label="Enrollment" />
      </div>
    </div>
  )
}
