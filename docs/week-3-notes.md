# Week 3 — Forms and Validation (Scenario Settings Form)

## Task

Build one Audex scenario/settings form with validation and explicit
missing-data, loading, error and success states.

## Scope

All 9 fields from FR-AUD-06 (School/Scenario Setup) are included: site,
buildings, open area, grades, fees, capital, horizon, staffing/resources,
preferred scenario. This is **one form only** — it does not submit to a
real backend yet (see "Simulated submission" below), and it does not
implement the rest of Audex Compass (scenario comparison, forecasting,
etc.), which is out of scope for this task.

## Implementation

### Schema-driven fields (`data/scenarioFormSchema.js`)

All 9 fields are defined once as data — name, label, type, and
validation rules (`required`, `min`, `max`, `minLength`, `options`) —
rather than as 9 separate hand-written `<input>` elements with
duplicated logic. The form and the validator both read this same
array, so adding or changing a field means editing one object in one
place. This follows the same single-source-of-truth pattern used for
`Permissions.js` in Week 1 and the status constants in Week 2.

### Validation (`utils/validateScenarioForm.js`)

One function, `validateScenarioForm(values)`, walks `SCENARIO_FIELDS`
and returns an object keyed by field name → error message. An empty
object means the form is valid. Centralizing this means the same rules
apply whether validation runs on submit or live while typing — there's
only one place the rules are written.

### The four required states

| State | When | What the user sees |
|---|---|---|
| **Missing-data** | Submit attempted with invalid/empty required fields | Each invalid field shows its own error message directly underneath it (not just one generic banner), plus a small summary banner |
| **Loading** | Valid submit in progress | Submit button shows a spinner and disables itself; all fields disable so nothing changes mid-submit |
| **Error** | Simulated submission failure | A red banner explains the failure; all entered values are preserved — nothing is cleared, so the user doesn't have to retype anything |
| **Success** | Submission succeeded | A green confirmation replaces the form, with a "Start a new scenario" action to reset |

### Simulated submission

There is no real backend for this task yet, so submission is simulated
with a `setTimeout` delay. To make the **error** state actually
reachable and testable (not just theoretical), a small "Simulate
server error" checkbox is included near the submit button, clearly
separated visually (dashed border) and labeled as a testing aid. It is
not a scenario field — it does not appear in `SCENARIO_FIELDS` and
plays no role in validation.

### Live error clearing

Once a submit attempt has shown errors, further edits re-validate
immediately so a corrected field's error disappears without requiring
another submit click. Before the first submit attempt, no errors are
shown at all — the form doesn't scold the user before they've done
anything.

## Testing

Manual validation test set (no test framework is in the project's
dependencies yet, so this is evidence-based testing, same approach as
Week 1 and Week 2):

| Test | Input | Expected result | Status |
|---|---|---|---|
| TC-01 | Submit the form completely empty | All 9 fields show a "required" error; state = missing-data | ✅ |
| TC-02 | Fill every field validly, submit | Loading spinner ~1.1s, then success banner | ✅ |
| TC-03 | Site = `"A"` (1 character) | Error: "Site / Location must be at least 2 characters" | ✅ |
| TC-04 | Buildings = `0` | Error: "Buildings must be at least 1" | ✅ |
| TC-05 | Horizon = `25` | Error: "Horizon (years) must be at most 20" | ✅ |
| TC-06 | No grade chip selected | Error: "Grades is required" | ✅ |
| TC-07 | Fix one invalid field after a failed submit, without re-submitting | That field's error clears immediately | ✅ |
| TC-08 | Fill form validly, check "Simulate server error", submit | Loading, then red error banner; all values still present in the fields | ✅ |

## Evidence

- Empty-form submission showing all 9 field-level errors. *(screenshot)*
- Loading state mid-submit (disabled, spinner). *(screenshot)*
- Simulated error state with values retained. *(screenshot)*
- Success state after a valid submission. *(screenshot)*

> Add the actual screenshot files here before submission.

## Notes and Assumptions

- Field values are plain strings/numbers from controlled inputs; no
  external form library (e.g. Formik, React Hook Form) was used, to
  keep the validation logic visible and simple for this exercise.
- The "Simulate server error" checkbox is a temporary testing aid, not
  a real field, and is documented here so it isn't mistaken for scope
  creep or a stray UI element later.
- Integration into the existing Audex shell (route + sidebar link) is
  described in `docs/week-3-integration.md`.
