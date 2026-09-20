const currentUser = {
  name: "Khloud Ahmed",
  role: "admin",
  workspace: "Alexandria School",
  product: "AUDEX",
  school: "AUDEX International School",
  initials: "KA",
};

const modules = [
  {
    name: "Dashboard",
    description: "School overview and insights",
    icon: "fa-solid fa-display",
   
  },
  {
    name: "Finance",
    description: "Financial data and reports",
    icon: "fa-solid fa-hand-holding-dollar",

  },
  {
    name: "Academic",
    description: "Academic performance and records",
    icon: "fa-solid fa-graduation-cap",
  
  },
  {
    name: "Workforce",
    description: "Staff and workforce management",
    icon: "fa-solid fa-users",
   
  },
  {
    name: "Operations",
    description: "School operations and resources",
    icon: "fa-solid fa-house",
   
  },
];

const overview = [
  {
    title: "Students",
    value: "1,248",
    description: "Total enrolled students",
  },
  {
    title: "Revenue",
    value: "85,400 EGP",
    description: "Current month revenue",
  },
  {
    title: "Attendance",
    value: "94%",
    description: "Average attendance",
  },
  {
    title: "Teachers",
    value: "86",
    description: "Active teaching staff",
  },
];

export function getCurrentUser() {
  return currentUser;
}

export { modules, overview };