
import { getCurrentUser } from "./MockUser";
import { isModuleAllowed } from "./Permissions";
import Restricted from "../components/pages/Restricted/Restricted";
function ProtectedRoute({ module, children }) {
  const user = getCurrentUser();

  const allowed = isModuleAllowed(user.role, module);

  if (!allowed) {
   return <Restricted />;
  }

  return children;
}

export default ProtectedRoute;