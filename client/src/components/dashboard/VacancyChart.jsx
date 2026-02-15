import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20,
                font: {
                    family: "'DM Sans', sans-serif",
                    size: 12
                }
            }
        },
        tooltip: {
            backgroundColor: '#1e293b',
            padding: 12,
            bodyFont: {
                family: "'DM Sans', sans-serif"
            },
            titleFont: {
                family: "'DM Sans', sans-serif"
            }
        }
    },
    scales: {
        y: {
            border: { dash: [4, 4] },
            grid: {
                color: '#f1f5f9',
                tickBorderDash: [4, 4]
            },
            ticks: {
                padding: 20,
                color: '#94a3b8',
                font: {
                    family: "'DM Sans', sans-serif"
                }
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                padding: 20,
                color: '#94a3b8',
                font: {
                    family: "'DM Sans', sans-serif"
                }
            }
        }
    },
    interaction: {
        mode: 'index',
        intersect: false,
    },
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

const data = {
    labels,
    datasets: [
        {
            label: 'vacancies',
            data: [35, 20, 30, 15, 25, 38, 45, 40, 50, 48],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 6
        },
        {
            label: 'candidates',
            data: [15, 10, 25, 22, 23, 27, 26, 28, 29, 21],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.05)',
            tension: 0.4,
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 6
        },
    ],
};

export default function VacancyChart() {
    return (
        <div className="card-glass vacancy-trends">
            <div className="card-title">
                Vacancy Trends
            </div>
            <div style={{ height: '300px' }}>
                <Line options={options} data={data} />
            </div>
        </div>
    )
}
