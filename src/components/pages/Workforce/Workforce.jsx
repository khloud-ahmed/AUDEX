import "./Workforce.css";

function Workforce() {
  return (
    <div className="module-page">

      <div className="module-header">
        <div>
          <h1>Workforce</h1>
          <p>
            Workforce capacity, attendance and staffing insights.
          </p>
        </div>
      </div>

      <div className="module-cards">

        <div className="info-card">
          <span>Active Staff</span>
          <strong>86</strong>
        </div>

        <div className="info-card">
          <span>Staff Attendance</span>
          <strong>96%</strong>
        </div>

        <div className="info-card">
          <span>Coverage Rate</span>
          <strong>92%</strong>
        </div>

        <div className="info-card">
          <span>Training Needs</span>
          <strong className="warning-text">14</strong>
        </div>

      </div>

      <div className="module-section">

        <h2>Workforce Intelligence</h2>

        <p>
          Monitor staffing levels, attendance, workforce coverage,
          workload indicators and training needs to support operational decisions.
        </p>

      </div>

    </div>
  );
}

export default Workforce;