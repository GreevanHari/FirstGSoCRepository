import React from 'react'
import { TrendingUp, TrendingDown, Users, UserPlus, UserMinus, Briefcase } from 'lucide-react'

// Map of icon names to lucide components
const iconMap = {
    users: Users,
    'user-plus': UserPlus,
    'user-minus': UserMinus,
    briefcase: Briefcase
}

export default function StatsCard({ title, value, trend, trendLabel, icon, type }) {
    const Icon = iconMap[icon] || Users
    const isPositive = trend > 0

    return (
        <div className={`card-glass stat-card-${type}`}>
            <div className="card-title">
                {title}
                <Icon size={20} className="text-gray-400" />
            </div>
            <div className="metric-value">{value}</div>
            <div className="metric-trend">
                <span className={isPositive ? 'trend-up' : 'trend-down'}>
                    {isPositive ? '+' : ''}{trend}%
                </span>
                <span style={{ color: '#94a3b8' }}>{trendLabel}</span>
            </div>
        </div>
    )
}
