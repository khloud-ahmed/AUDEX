export const MODULES = {
  DASHBOARD: "Dashboard",
  FINANCE: "Finance",
  ACADEMIC: "Academic",
  WORKFORCE: "Workforce",
  OPERATIONS: "Operations",
  SETTINGS: "Settings",
};

const ROLE_PERMISSIONS = {
  ADMIN: [
    MODULES.DASHBOARD,
    MODULES.FINANCE,
    MODULES.ACADEMIC,
    MODULES.WORKFORCE,
    MODULES.OPERATIONS,
    MODULES.SETTINGS,
  ],

  FINANCE: [
    MODULES.DASHBOARD,
    MODULES.FINANCE,
  ],

  ACADEMIC: [
    MODULES.DASHBOARD,
    MODULES.ACADEMIC,
  ],

  WORKFORCE: [
    MODULES.DASHBOARD,
    MODULES.WORKFORCE,
  ],

  OPERATIONS: [
    MODULES.DASHBOARD,
    MODULES.OPERATIONS,
  ],
};

export function isModuleAllowed(role, module) {
  const normalizedRole = role?.toUpperCase();

  return ROLE_PERMISSIONS[normalizedRole]?.includes(module) ?? false;
}