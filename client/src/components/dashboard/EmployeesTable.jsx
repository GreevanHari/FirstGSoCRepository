import React from 'react'

const employees = [
    { name: 'John Doe', role: 'Designer', type: 'Full Time', status: 'Active' },
    { name: 'Jane Smith', role: 'Developer', type: 'Part Time', status: 'On Leave' },
    { name: 'Bob Johnson', role: 'Manager', type: 'Full Time', status: 'Active' },
    { name: 'Alice Brown', role: 'HR', type: 'Contract', status: 'Active' },
]

export default function EmployeesTable() {
    return (
        <div className="card-glass employees-list">
            <div className="card-title">
                Employees
                <button style={{
                    background: 'none',
                    border: 'none',
                    color: '#4f46e5',
                    cursor: 'pointer',
                    fontWeight: '500'
                }}>View all</button>
            </div>

            <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ textAlign: 'left', color: '#64748b' }}>
                        <th style={{ padding: '12px', fontWeight: '500' }}>Name</th>
                        <th style={{ padding: '12px', fontWeight: '500' }}>Role</th>
                        <th style={{ padding: '12px', fontWeight: '500' }}>Type</th>
                        <th style={{ padding: '12px', fontWeight: '500' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((e, i) => (
                        <tr key={i} style={{ borderTop: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '12px', color: '#1e293b', fontWeight: '500' }}>{e.name}</td>
                            <td style={{ padding: '12px', color: '#64748b' }}>{e.role}</td>
                            <td style={{ padding: '12px', color: '#64748b' }}>{e.type}</td>
                            <td style={{ padding: '12px' }}>
                                <span style={{
                                    background: e.status === 'Active' ? '#dcfce7' : '#fff7ed',
                                    color: e.status === 'Active' ? '#166534' : '#9a3412',
                                    padding: '4px 8px',
                                    borderRadius: '100px',
                                    fontSize: '12px',
                                    fontWeight: '500'
                                }}>
                                    {e.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
