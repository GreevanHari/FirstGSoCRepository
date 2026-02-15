import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

export default function StudentChart({ labels, data, label, type='bar' }){
  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: 'rgba(16,24,40,0.9)',
        borderColor: 'rgba(79,70,229,0.9)',
        borderWidth: 1,
        tension: 0.4,
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: false }
    }
  }

  return type === 'line' ? <Line options={options} data={chartData} /> : <Bar options={options} data={chartData} />
}
