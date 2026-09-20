import { getCurrentUser } from "../../../authorization/MockUser";
import "./ActiveContext.css";

function ActiveContext() {
  const user = getCurrentUser();

  return (
    <div className="active-context">
      <div>
        <span>Product</span>
        <strong>{user.product}</strong>
      </div>

      <div>
        <span>Workspace</span>
        <strong>{user.workspace}</strong>
      </div>

      <div>
        <span>School</span>
        <strong>{user.school}</strong>
      </div>

      <div>
        <span>Role</span>
        <strong>{user.role}</strong>
      </div>
    </div>
  );
}

export default ActiveContext;