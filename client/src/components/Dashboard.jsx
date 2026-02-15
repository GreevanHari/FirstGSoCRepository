import React from 'react'
import StatsCard from './dashboard/StatsCard'
import UpcomingInterview from './dashboard/UpcomingInterview'
import VacancyChart from './dashboard/VacancyChart'
import CountriesInsight from './dashboard/CountriesInsight'
import EmployeesTable from './dashboard/EmployeesTable'
import CurrentVacancies from './dashboard/CurrentVacancies'

export default function Dashboard() {
  return (
    <div className="dashboard-content">
      {/* Stats Row */}
      <StatsCard title="Total employees" value="418" trend={7} trendLabel="last month" icon="users" type={1} />
      <StatsCard title="New employees" value="21" trend={7} trendLabel="last month" icon="user-plus" type={2} />
      <StatsCard title="Resigned employees" value="14" trend={4} trendLabel="last month" icon="user-minus" type={3} />
      <StatsCard title="Job applicants" value="261" trend={12} trendLabel="last month" icon="briefcase" type={4} />

      {/* Middle Row */}
      <UpcomingInterview />
      <CountriesInsight />

      {/* Trends Row */}
      <VacancyChart />

      {/* Bottom Row */}
      <EmployeesTable />
      <CurrentVacancies />
    </div>
  )
}
