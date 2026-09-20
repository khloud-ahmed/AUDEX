import "./Settings.css";

function Settings() {
  return (
    <div className="module-page">

      <div className="module-header">
        <div>
          <h1>Settings</h1>
          <p>
            Manage platform access, system health and intelligence readiness.
          </p>
        </div>
      </div>

      <div className="settings-list">

        <div className="settings-card">
          <div className="settings-icon">
            <i className="fa-solid fa-users"></i>
          </div>

          <div className="settings-content">
            <h2>User & Access</h2>
            <p>
              Manage user roles, permissions and module access.
            </p>
          </div>

          <span className="status-badge">
            Configured
          </span>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <i className="fa-solid fa-server"></i>
          </div>

          <div className="settings-content">
            <h2>System Health</h2>
            <p>
              Monitor platform services and system availability.
            </p>
          </div>

          <span className="status-badge">
            Healthy
          </span>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <i className="fa-solid fa-database"></i>
          </div>

          <div className="settings-content">
            <h2>Knowledge Base</h2>
            <p>
              Manage indexed sources and evidence used by the platform.
            </p>
          </div>

          <span className="status-badge">
            Ready
          </span>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <i className="fa-solid fa-scale-balanced"></i>
          </div>

          <div className="settings-content">
            <h2>Regulatory Readiness</h2>
            <p>
              Review regulatory sources and compliance information.
            </p>
          </div>

          <span className="status-badge">
            Ready
          </span>
        </div>

      </div>

    </div>
  );
}

export default Settings;