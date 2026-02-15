import React from 'react'
import { MoreHorizontal } from 'lucide-react'

const countries = [
    { name: 'United States', flag: '🇺🇸', value: 74, color: '#4f46e5' },
    { name: 'France', flag: '🇫🇷', value: 43, color: '#4f46e5' },
    { name: 'Japan', flag: '🇯🇵', value: 38, color: '#4f46e5' },
    { name: 'Sweden', flag: '🇸🇪', value: 24, color: '#4f46e5' },
    { name: 'Spain', flag: '🇪🇸', value: 16, color: '#4f46e5' },
]

export default function CountriesInsight() {
    return (
        <div className="card-glass countries-insight">
            <div className="card-title">
                Countries Insight
                <MoreHorizontal size={20} className="text-gray-400 cursor-pointer" />
            </div>

            <div className="countries-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '16px' }}>
                {countries.map(c => (
                    <div key={c.name} className="country-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                                <span style={{ fontSize: '20px' }}>{c.flag}</span>
                                {c.name}
                            </div>
                            <span style={{ color: '#64748b' }}>{c.value}%</span>
                        </div>
                        <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: `${c.value}%`, background: c.color, height: '100%', borderRadius: '3px' }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
