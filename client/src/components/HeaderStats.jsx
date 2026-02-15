import React from 'react'
import StudentChart from './StudentChart'

export default function HeaderStats(){
  const labels = ['Mon','Tue','Wed','Thu','Fri']
  const data = [5,9,7,6,10]

  return (
    <header className="header-stats card">
      <div className="hs-left">
        <div className="hs-brand">BizLink</div>
        <div className="hs-search"><input placeholder="Search customer..."/></div>
      </div>
      <div className="hs-main">
        <div className="hs-chart card small">
          <h4>New customers</h4>
          <StudentChart labels={labels} data={data} label="New" />
        </div>
        <div className="hs-gauge card small">
          <h4>68%</h4>
          <p>Successful deals</p>
        </div>
        <div className="hs-metrics">
          <div className="metric">
            <div className="big">53</div>
            <div className="muted">Tasks in progress</div>
          </div>
          <div className="metric">
            <div className="big">$15,890</div>
            <div className="muted">Prepayments from customers</div>
          </div>
        </div>
      </div>
      <div className="hs-actions">
        <button className="btn">Add customer</button>
      </div>
    </header>
  )
}
