import "./Finance.css";

function Finance() {
  return (
    <div className="module-page">

      <div className="module-header">
        <div>
          <h1>Finance</h1>
          <p>
            Financial performance and decision-support insights.
          </p>
        </div>
      </div>

      <div className="module-cards">

        <div className="info-card">
          <span>Monthly Revenue</span>
          <strong>85,400 EGP</strong>
        </div>

        <div className="info-card">
          <span>Operating Costs</span>
          <strong>52,800 EGP</strong>
        </div>

        <div className="info-card">
          <span>Net Margin</span>
          <strong>38.1%</strong>
        </div>

        <div className="info-card">
          <span>Funding Status</span>
          <strong className="success-text">Stable</strong>
        </div>

      </div>

      <div className="module-section">

        <h2>Financial Overview</h2>

        <p>
          Monitor revenue, costs, margins, funding and financial
          indicators used for school decision support.
        </p>

      </div>

    </div>
  );
}

export default Finance;