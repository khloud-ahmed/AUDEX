import "./Operations.css";

function Operations() {
  return (
    <div className="module-page">

      <div className="module-header">
        <div>
          <h1>Operations</h1>
          <p>
            Operational performance, transport and resource insights.
          </p>
        </div>
      </div>

      <div className="module-cards">

        <div className="info-card">
          <span>Fleet Availability</span>
          <strong>91%</strong>
        </div>

        <div className="info-card">
          <span>Active Routes</span>
          <strong>24</strong>
        </div>

        <div className="info-card">
          <span>Maintenance Due</span>
          <strong className="warning-text">6</strong>
        </div>

        <div className="info-card">
          <span>Safety Issues</span>
          <strong className="risk-text">3</strong>
        </div>

      </div>

      <div className="module-section">

        <h2>Operations Intelligence</h2>

        <p>
          Monitor transport availability, fleet activity, maintenance,
          safety indicators and operational resources to support school decisions.
        </p>

      </div>

    </div>
  );
}

export default Operations;