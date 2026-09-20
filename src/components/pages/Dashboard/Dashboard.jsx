import {getCurrentUser , modules ,  overview,} from "../../../authorization/MockUser";
import { isModuleAllowed} from "../../../authorization/Permissions";
import "./Dashboard.css";
function Dashboard() {
  const user =getCurrentUser();
  return (
  <>
      <div className="WelcomeCard p-4 mb-3">
 <span className="badge-soft badge-soft-blue">
 Role: {user.role} · Workspace: {user.workspace}
 </span>
<h1>Welcome back, {user.name}!</h1>
<p>
  AUDEX School Intelligence — Role-Aware Application Shell.
  Your session is active with {user.role} permissions.
</p>
      </div>
      <div className="overview-grid">
  {overview.map((item) => (
    <div className="overview-card" key={item.title}>
      <h3>{item.title}</h3>

      <strong>{item.value}</strong>

      <p>{item.description}</p>
    </div>
  ))}
</div>
   <div className="permissions-card">
  <h2>Role Permissions</h2>

  <p>
    Navigation access granted according to current user credentials.
  </p>

  <div className="modules-grid">
    {modules.map((module) => {
  const allowed = isModuleAllowed(user.role, module.name);

  return (
    <div
      className={`module-card ${
        allowed ? "allowed" : "restricted"
      }`}
      key={module.name}
    >
      <div className="module-header">
        <i className={module.icon}></i>

        <span>
          {allowed ? "✓ ALLOWED" : "🔒 RESTRICTED"}
        </span>
      </div>

      <h3>{module.name}</h3>

      <p>{module.description}</p>
    </div>
  );
})}
  </div>
</div>

      
  </>
  );
}   
export default Dashboard;