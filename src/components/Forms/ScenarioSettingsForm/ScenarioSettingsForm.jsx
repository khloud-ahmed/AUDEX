import { useState } from "react";
import "./ScenarioSettingsForm.css";
import { SCENARIO_FIELDS, getInitialScenarioValues } from "../../../authorization/scenarioFormSchema";
import { validateScenarioForm } from "../../../utils/validateScenarioForm";

// Four explicit states the task asks for:
//   "idle"       -> normal editing, no errors shown yet
//   "missing"    -> submit was attempted with invalid/empty required fields
//   "submitting" -> loading, inputs disabled, button shows a spinner
//   "error"      -> simulated submission failure, values are kept intact
//   "success"    -> submission succeeded, confirmation shown
const STATUS = {
  IDLE: "idle",
  MISSING: "missing",
  SUBMITTING: "submitting",
  ERROR: "error",
  SUCCESS: "success"
};

function ScenarioSettingsForm({ onSubmit }) {
  const [values, setValues] = useState(getInitialScenarioValues());
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);
  const [simulateFailure, setSimulateFailure] = useState(false);

  function updateField(name, value) {
    const next = { ...values, [name]: value };
    setValues(next);
    
    if (status === STATUS.MISSING) {
      setErrors(validateScenarioForm(next));
    }
  }

  function toggleGrade(grade) {
    const current = values.grades || [];
    const next = current.includes(grade) ? current.filter((g) => g !== grade) : [...current, grade];
    updateField("grades", next);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const foundErrors = validateScenarioForm(values);

    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      setStatus(STATUS.MISSING);
      return;
    }

    setErrors({});
    setStatus(STATUS.SUBMITTING);

  
    await new Promise((resolve) => setTimeout(resolve, 1100));

    if (simulateFailure) {
      setStatus(STATUS.ERROR);
      return;
    }

    setStatus(STATUS.SUCCESS);
    if (onSubmit) onSubmit(values);
  }

  function handleReset() {
    setValues(getInitialScenarioValues());
    setErrors({});
    setStatus(STATUS.IDLE);
  }

  const isDisabled = status === STATUS.SUBMITTING;

  return (
    <div className="scenario-form-wrapper">
      {status === STATUS.SUCCESS ? (
        <div className="form-banner form-banner-success">
          <strong>Scenario saved successfully.</strong>
          <p>Your scenario settings were submitted. You can start a new scenario below.</p>
          <button type="button" className="btn-secondary" onClick={handleReset}>
            Start a new scenario
          </button>
        </div>
      ) : (
        <form className="scenario-form" onSubmit={handleSubmit} noValidate>
          <h2>Scenario Settings</h2>
          <p className="form-subtitle">
            Define the inputs for a new Audex Compass scenario.
          </p>

          {status === STATUS.ERROR && (
            <div className="form-banner form-banner-error">
              <strong>Couldn't save this scenario.</strong>
              <p>Something went wrong while submitting. Your inputs are still here — please try again.</p>
            </div>
          )}

          {status === STATUS.MISSING && (
            <div className="form-banner form-banner-missing">
              Please fix the highlighted field{Object.keys(errors).length > 1 ? "s" : ""} below.
            </div>
          )}

          <div className="scenario-fields-grid">
            {SCENARIO_FIELDS.map((field) => (
              <div className={`form-field ${errors[field.name] ? "has-error" : ""}`} key={field.name}>
                <label htmlFor={field.name}>
                  {field.label} {field.required && <span className="required-mark">*</span>}
                </label>

                {field.type === "text" && (
                  <input
                    id={field.name}
                    type="text"
                    value={values[field.name]}
                    placeholder={field.placeholder}
                    disabled={isDisabled}
                    onChange={(e) => updateField(field.name, e.target.value)}
                  />
                )}

                {field.type === "number" && (
                  <input
                    id={field.name}
                    type="number"
                    value={values[field.name]}
                    placeholder={field.placeholder}
                    disabled={isDisabled}
                    onChange={(e) => updateField(field.name, e.target.value)}
                  />
                )}

                {field.type === "select" && (
                  <select
                    id={field.name}
                    value={values[field.name]}
                    disabled={isDisabled}
                    onChange={(e) => updateField(field.name, e.target.value)}
                  >
                    <option value="">Select…</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                )}

                {field.type === "multiselect" && (
                  <div className="grade-chip-group">
                    {field.options.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        disabled={isDisabled}
                        className={`grade-chip ${values.grades?.includes(opt) ? "selected" : ""}`}
                        onClick={() => toggleGrade(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {errors[field.name] && <span className="field-error">{errors[field.name]}</span>}
              </div>
            ))}
          </div>

          <label className="simulate-toggle">
            <input
              type="checkbox"
              checked={simulateFailure}
              onChange={(e) => setSimulateFailure(e.target.checked)}
            />
            Simulate server error (for testing the error state)
          </label>

          <button type="submit" className="btn-primary" disabled={isDisabled}>
            {isDisabled ? <span className="spinner" /> : null}
            {isDisabled ? "Saving scenario…" : "Save scenario"}
          </button>
        </form>
      )}
    </div>
  );
}

export default ScenarioSettingsForm;
