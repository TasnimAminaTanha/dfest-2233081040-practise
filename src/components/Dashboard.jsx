import SummaryCard from './SummaryCard'

const SUMMARY_CARDS = [
  {
    title: 'Total Issues',
    count: 24,
    colorClass: 'card--total',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Pending',
    count: 10,
    colorClass: 'card--pending',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'In Progress',
    count: 8,
    colorClass: 'card--progress',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-.18-8.5" />
      </svg>
    ),
  },
  {
    title: 'Resolved',
    count: 6,
    colorClass: 'card--resolved',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Welcome section */}
      <div className="dashboard__welcome">
        <h2 className="dashboard__heading">Campus Issue Dashboard</h2>
        <p className="dashboard__subtitle">
          A central place to monitor and track issues reported across campus —
          from facilities and infrastructure to academic and administrative concerns.
        </p>
      </div>

      {/* Summary cards */}
      <div className="dashboard__cards">
        {SUMMARY_CARDS.map((card) => (
          <SummaryCard
            key={card.title}
            title={card.title}
            count={card.count}
            icon={card.icon}
            colorClass={card.colorClass}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
