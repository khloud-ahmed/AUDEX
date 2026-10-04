export const SCENARIO_FIELDS = [
  { name: "site", label: "Site / Location", type: "text", required: true, minLength: 2, placeholder: "e.g. New Cairo, Plot 14" },
  { name: "buildings", label: "Buildings", type: "number", required: true, min: 1, placeholder: "Number of buildings" },
  { name: "openArea", label: "Open Area (sqm)", type: "number", required: true, min: 1, placeholder: "e.g. 4500" },
  {
    name: "grades",
    label: "Grades",
    type: "multiselect",
    required: true,
    options: ["KG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  },
  { name: "fees", label: "Annual Fees (EGP)", type: "number", required: true, min: 1, placeholder: "Per student, per year" },
  { name: "capital", label: "Capital (EGP)", type: "number", required: true, min: 1, placeholder: "Available investment capital" },
  { name: "horizon", label: "Horizon (years)", type: "number", required: true, min: 1, max: 20, placeholder: "Planning horizon" },
  { name: "staffing", label: "Staffing / Resources", type: "number", required: true, min: 1, placeholder: "Planned staff count" },
  {
    name: "preferredScenario",
    label: "Preferred Scenario",
    type: "select",
    required: true,
    options: ["Conservative", "Base", "Aggressive"]
  }
];

export function getInitialScenarioValues() {
  const values = {};
  SCENARIO_FIELDS.forEach((field) => {
    values[field.name] = field.type === "multiselect" ? [] : "";
  });
  return values;
}
