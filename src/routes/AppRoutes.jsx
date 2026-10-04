import { Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import Finance from "../components/pages/Finance/Finance";
import Academic from "../components/pages/Academic/Academic";
import Workforce from "../components/pages/Workforce/Workforce";
import Operations from "../components/pages/Operations/Operations";
import Settings from "../components/pages/Settings/Settings";

import ProtectedRoute from "../authorization/ProtectedRoute";
import { MODULES } from "../authorization/Permissions";
import ScenarioSettingsForm from "../components/Forms/ScenarioSettingsForm/ScenarioSettingsForm";
function AppRoutes() {
  return (
       <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute module={MODULES.DASHBOARD}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/finance"
        element={
          <ProtectedRoute module={MODULES.FINANCE}>
            <Finance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/academic"
        element={
          <ProtectedRoute module={MODULES.ACADEMIC}>
            <Academic />
          </ProtectedRoute>
        }
      />

      <Route
        path="/workforce"
        element={
          <ProtectedRoute module={MODULES.WORKFORCE}>
            <Workforce />
          </ProtectedRoute>
        }
      />

      <Route
        path="/operations"
        element={
          <ProtectedRoute module={MODULES.OPERATIONS}>
            <Operations />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute module={MODULES.SETTINGS}>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
  path="/scenario-settings"
  element={
    <ProtectedRoute module={MODULES.SETTINGS}>
      <ScenarioSettingsForm />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}
export default AppRoutes;