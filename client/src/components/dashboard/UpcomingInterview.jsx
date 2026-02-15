import React from 'react'
import { MoreHorizontal, Calendar, Clock, Building } from 'lucide-react'

export default function UpcomingInterview() {
    return (
        <div className="card-glass upcoming-interview">
            <div className="card-title">
                Upcoming interview
                <MoreHorizontal size={20} className="text-gray-400 cursor-pointer" />
            </div>

            <div className="interview-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div className="candidate-avatar">
                        <img
                            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
                            alt="Candidate"
                            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                    </div>
                    <div>
                        <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>Jordan Maccan</div>
                        <div style={{ fontSize: '14px', color: '#64748b' }}>Front-End Developer</div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    <div>
                        <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '4px' }}>Time</div>
                        <div style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            11:30 AM - 12:45 AM
                        </div>
                    </div>

                    <div>
                        <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '4px' }}>Company</div>
                        <div style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            PayPal
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                    <button style={{
                        padding: '10px 20px',
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0',
                        background: 'white',
                        color: '#1e293b',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}>
                        View details
                    </button>
                    <button style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: '#22c55e',
                        border: 'none',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}>
                        <Calendar size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}
