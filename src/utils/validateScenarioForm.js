import { SCENARIO_FIELDS } from "../authorization/scenarioFormSchema";
export function validateScenarioForm(values) {
  const errors = {};

  SCENARIO_FIELDS.forEach((field) => {
    const value = values[field.name];
    const isEmpty =
      value === undefined ||
      value === null ||
      value === "" ||
      (Array.isArray(value) && value.length === 0);

    if (field.required && isEmpty) {
      errors[field.name] = `${field.label} is required`;
      return; 
    }

    if (isEmpty) return; 

    if (field.type === "text" && field.minLength && value.length < field.minLength) {
      errors[field.name] = `${field.label} must be at least ${field.minLength} characters`;
    }

    if (field.type === "number") {
      const num = Number(value);
      if (Number.isNaN(num)) {
        errors[field.name] = `${field.label} must be a number`;
      } else if (field.min !== undefined && num < field.min) {
        errors[field.name] = `${field.label} must be at least ${field.min}`;
      } else if (field.max !== undefined && num > field.max) {
        errors[field.name] = `${field.label} must be at most ${field.max}`;
      }
    }
  });

  return errors;
}
