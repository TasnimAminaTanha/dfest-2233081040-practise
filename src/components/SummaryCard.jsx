function SummaryCard({ title, count, icon, colorClass }) {
  return (
    <div className={`summary-card ${colorClass}`}>
      <div className="summary-card__icon" aria-hidden="true">
        {icon}
      </div>
      <div className="summary-card__body">
        <span className="summary-card__count">{count}</span>
        <span className="summary-card__title">{title}</span>
      </div>
    </div>
  )
}

export default SummaryCard
