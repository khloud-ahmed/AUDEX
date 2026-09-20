import { getCurrentUser } from "../../../authorization/MockUser";
import "./Header.css";

function Header() {
  const user = getCurrentUser();

  return (
    <header className="header">
      <div>
        <h2>AUDEX</h2>
        <p>School Intelligence Platform</p>
      </div>

      <div className="user-info">
        <span>{user.initials}</span>

        <div>
          <strong>{user.name}</strong>
          <small>{user.role}</small>
        </div>
      </div>
    </header>
  );
}

export default Header;