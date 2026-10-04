import audexLogo from "../../../assets/AUDEX Logo.png";
import { NavLink } from "react-router-dom";
import { MODULES } from "../../../authorization/Permissions";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Sidebar.css";

const NAV_ITEMS = [
  {
    module: MODULES.DASHBOARD,
    label: "Dashboard",
    path: "/dashboard",
    icon: "fa-solid fa-display",
  },
  {
    module: MODULES.FINANCE,
    label: "Finance",
    path: "/finance",
    icon: "fa-solid fa-hand-holding-dollar",
  },
  {
    module: MODULES.ACADEMIC,
    label: "Academic",
    path: "/academic",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    module: MODULES.WORKFORCE,
    label: "Workforce",
    path: "/workforce",
    icon: "fa-solid fa-users",
  },
  {
    module: MODULES.OPERATIONS,
    label: "Operations",
    path: "/operations",
    icon: "fa-solid fa-house",
  },
  {
    module: MODULES.SETTINGS,
    label: "Settings",
    path: "/settings",
    icon: "fa-solid fa-gear",
  },
];

function Sidebar() {
  return (
    <aside>
      <div className="logo">
        <img src={audexLogo} alt="AUDEX Logo" />
        <p>PLATFORM NAVIGATION</p>
        <br />
      </div>

      <nav>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.module}
            to={item.path}
            className="nav-link"
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </NavLink>
          
        ))}
        <NavLink to="/scenario-settings" className="nav-link">
  <i className="fa-solid fa-sliders"></i>
  <span>Scenario Settings</span>
</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;