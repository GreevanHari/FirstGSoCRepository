import React from 'react'
import { MoreHorizontal } from 'lucide-react'

const vacancies = [
    { title: 'Financial Analyst', company: 'H&M', location: 'Remote', color: '#ef4444' },
    { title: 'Senior Designer', company: 'Nike', location: 'New York', color: '#f97316' },
    { title: 'Product Manager', company: 'Apple', location: 'California', color: '#000000' },
]

export default function CurrentVacancies() {
    return (
        <div className="card-glass current-vacancies">
            <div className="card-title">
                Current vacancies
                <MoreHorizontal size={20} className="text-gray-400 cursor-pointer" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {vacancies.map((v, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', background: 'white', borderRadius: '12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            background: v.color,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '700',
                            fontSize: '14px'
                        }}>
                            {v.company.substring(0, 2)}
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', color: '#1e293b' }}>{v.title}</div>
                            <div style={{ fontSize: '13px', color: '#64748b' }}>{v.company} • {v.location}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
