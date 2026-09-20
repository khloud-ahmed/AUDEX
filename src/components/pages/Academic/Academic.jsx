import "./Academic.css";

function Academic() {
  return (
    <div className="module-page">

      <div className="module-header">
        <div>
          <h1>Academic</h1>
          <p>
            Academic performance, attendance and student intelligence.
          </p>
        </div>
      </div>

      <div className="module-cards">

        <div className="info-card">
          <span>Total Students</span>
          <strong>1,248</strong>
        </div>

        <div className="info-card">
          <span>Average Attendance</span>
          <strong>94%</strong>
        </div>

        <div className="info-card">
          <span>Academic Performance</span>
          <strong>87%</strong>
        </div>

        <div className="info-card">
          <span>Students At Risk</span>
          <strong className="risk-text">12</strong>
        </div>

      </div>

      <div className="module-section">

        <h2>Academic Intelligence</h2>

        <p>
          Monitor student performance, attendance, academic risks
          and intervention indicators to support school decisions.
        </p>

      </div>

    </div>
  );
}

export default Academic;