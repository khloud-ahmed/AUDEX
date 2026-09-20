import { Link } from "react-router-dom";
import "./Restricted.css";

function Restricted() {
  return (
    <div className="restricted-page">
      <div className="restricted-card">

        <div className="restricted-icon">
          <i className="fa-solid fa-lock"></i>
        </div>

        <h1>Access Restricted</h1>

        <p className="restricted-message">
          You don't have permission to access this page.
        </p>

        <p className="restricted-description">
          Your current role does not include access to this module.
          Please contact your administrator if you believe you should have access.
        </p>

        <Link to="/dashboard" className="restricted-button">
          <i className="fa-solid fa-arrow-left"></i>
          Back to Dashboard
        </Link>

      </div>
    </div>
  );
}

export default Restricted;