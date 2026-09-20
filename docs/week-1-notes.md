# Week 1 — Role-Aware Shell

## Task

Build a React page shell that displays the active
AUDEX product/workspace/school and blocks a page
for an unauthorized role.

## Current Phase

Implementation and Testing — Complete

## Planned Technologies

- React
- Vite
- React Router
- JavaScript
- CSS
- ESLint
- Git

## Scope

The implementation is limited to:

- Application shell
- Active product
- Active workspace
- Active school
- User role
- Role-aware navigation
- Route protection
- Unauthorized state
- Testing and documentation

Full role coverage from the Audex product (CEO/Owner, HR, Procurement, etc.)
is out of scope for Week 1. The shell uses a reduced set of five roles
(FINANCE, ACADEMIC, WORKFORCE, OPERATIONS, ADMIN) that map one-to-one
to the six navigation links already implemented in the Sidebar
(Dashboard, Finance, Academic, Workforce, Operations, Settings). This
keeps the exercise traceable: every role/permission decision can be
explained against a link that actually exists in the shell, rather than
against modules that are not yet built.

## Implementation

### Application Shell

The application shell is structured into:

- Sidebar
- Header
- Page Container
- Active Context
- Application Routes

`App.jsx` is the composition root: it renders `Sidebar`, `Header` and
`PageContainer` directly. A separate `AppShell.jsx` file was initially
scaffolded but left empty and unused, so it was removed to avoid a
misleading duplicate composition point. The `AppShell/` folder is kept
only as a grouping folder for shell-related components (Header, Sidebar,
PageContainer, ActiveContext).

### Active Context

The shell displays:

- Active AUDEX product
- Active workspace
- Active school
- Current user role

The active context is displayed above the page content so that
the user can identify the current working context before
interpreting page information. This satisfies the product's own
requirement (FR-AUD-02, Active Context) that the active mode/workspace/
school must always be visible before a user interprets any metric or
performs any action.

### Role and Permissions

User information is currently provided through a mock user
(`MockUser.js`) rather than a real authentication/session layer.

The authorization rules are defined separately in `Permissions.js`,
which maps each role to the list of modules it is allowed to open.
Every other part of the app (`Sidebar`, `ProtectedRoute`, `Dashboard`)
calls a single function, `isModuleAllowed(role, module)`, rather than
duplicating role checks — this keeps permission logic in one place
(single source of truth) so a future change only needs to happen in
`Permissions.js`.

The current test user has the `Finance` role. `Permissions.js`
normalizes the role to uppercase before checking it against the
permission map, so `"Finance"`, `"FINANCE"` and `"finance"` all resolve
to the same rule set.

Permission rules implemented:

| Role | Allowed modules |
|---|---|
| ADMIN | Dashboard, Finance, Academic, Workforce, Operations, Settings |
| FINANCE | Dashboard, Finance |
| ACADEMIC | Dashboard, Academic |
| WORKFORCE | Dashboard, Workforce |
| OPERATIONS | Dashboard, Operations |

Settings is currently reachable by ADMIN only. This was a deliberate
scope decision for Week 1 rather than an oversight: since Settings has
no real content yet, it was treated as an admin-only module in the
matrix so the Restricted-page path had a concrete module to test
against (see TC-06).

### Role-Aware Navigation

The sidebar displays all available modules regardless of the current
role's permissions. Navigation visibility and authorization are
handled separately: the sidebar provides links, while `ProtectedRoute`
is responsible for enforcing access. This allows unauthorized modules
to remain visible and clickable, which makes the restricted state
directly testable instead of just hidden from view.

### Route Protection

Each protected route is associated with a module permission. `ProtectedRoute`
checks the current user's role against the requested module using the
permission rules defined in `Permissions.js`. If the user has
permission, the requested page is rendered; if not, the `Restricted`
page is rendered in place of it (the URL itself does not change, only
the rendered content).

The root path `/` is not a module in its own right — it redirects to
`/dashboard` via `<Navigate to="/dashboard" replace />`. `replace` is
used specifically so that `/` is not pushed onto the browser history
as its own entry; without it, pressing the browser Back button from
`/dashboard` would bounce straight back through `/` and immediately
redirect forward again, making Back effectively unusable on first load.

### Unauthorized State

Unauthorized users are shown a `Restricted` page instead of
the requested module. The Restricted page provides:

- Access restriction message
- Explanation of the authorization state
- Navigation back to the Dashboard

### Implemented Pages

The following application pages were implemented as part of
the Week 1 shell:

- Dashboard
- Finance
- Academic
- Workforce
- Operations
- Settings
- Restricted

The module pages currently use static/mock data because the
Week 1 scope focuses on the application shell, authorization,
routing and UI structure rather than backend integration.

### Housekeeping fixes made during review

- Fixed a case-mismatched import (`pageContainer` vs. `PageContainer`)
  in `App.jsx` that passed locally on Windows (case-insensitive
  filesystem) but failed `npm run build` on a case-sensitive
  filesystem (Linux). This was confirmed by running a production
  build before and after the fix.
- Removed an unused `<link rel="stylesheet" href="/src/styles/global.css">`
  and unused Bootstrap CSS/JS `<link>`/`<script>` tags from `index.html`
  left over from an early scaffold. No Bootstrap class or component is
  used anywhere in the codebase; all styling is done through
  per-component CSS files imported directly in their `.jsx` files.
- Fixed `<!doctype html>` (was written with a stray space,
  `<! doctype html>`, which can push a browser into quirks mode) and a
  malformed HTML comment closing tag (`-- >` instead of `-->`).
- Removed a duplicate, unused `allowed: true/false` field from the
  `modules` mock data in `MockUser.js`. It was not read anywhere —
  `Dashboard.jsx` already computes the allowed/restricted state live
  through `isModuleAllowed()`. Keeping both would have created two
  competing sources of truth for the same piece of information.

## Testing

| Test Case | Role | Action | Expected Result | Status |
|---|---|---|---|---|
| TC-01 | Finance | Open Dashboard | Dashboard is accessible | ✅ |
| TC-02 | Finance | Open Finance | Finance page is accessible | ✅ |
| TC-03 | Finance | Open Workforce | Restricted page is displayed | ✅ |
| TC-04 | Finance | Open Academic | Restricted page is displayed | ✅ |
| TC-05 | Finance | Open Operations | Restricted page is displayed | ✅ |
| TC-06 | Finance | Open Settings | Restricted page is displayed | ✅ |
| TC-07 | Finance | Open `/` (root URL, first load) | Redirects to `/dashboard`, Dashboard is displayed | ✅ |

## Test Scenario

The test user has the `Finance` role, matching the role actually set
in `MockUser.js` (this was previously out of sync during development —
the mock user was briefly set to `admin` while this table still
described `Finance`, which was corrected before finalizing this
document).

The sidebar displays all modules so that protected navigation
can be tested directly. When the Finance user selects a module that is
not included in the Finance permissions, `ProtectedRoute` blocks access
and displays the `Restricted` page. Authorized modules continue to
render normally. Opening the root URL directly redirects to `/dashboard`
without leaving an extra entry in the browser history.

## Test Results

The implemented role-aware shell successfully:

- Displays the active application context (Product, Workspace, School, Role).
- Allows the Finance role to access authorized modules (Dashboard, Finance).
- Blocks unauthorized modules (Academic, Workforce, Operations, Settings).
- Displays the Restricted page for unauthorized access.
- Keeps the application shell (Sidebar, Header, Active Context) visible
  during the restricted state.
- Redirects the root path to `/dashboard` without breaking browser
  Back/Forward navigation.
- Produces a clean production build (`npm run build`) with no unresolved
  imports.



## Evidence

- Finance can access Dashboard.
  ![Dashboard with active context and role permissions](screenshots/01-dashboard.png)

- Finance can access Finance.
  ![Finance page accessible](screenshots/02-finance-allowed.png)

- Finance cannot access Academic — Restricted page is shown instead.
  ![Restricted page for Academic](screenshots/03-restricted-academic.png)

- Finance cannot access Workforce — Restricted page is shown instead.
  ![Restricted page for Workforce](screenshots/04-restricted-workforce.png)

- Finance cannot access Operations — Restricted page is shown instead.
  ![Restricted page for Operations](screenshots/05-restricted-operations.png)

- Finance cannot access Settings — Restricted page is shown instead.
  ![Restricted page for Settings](screenshots/06-restricted-settings.png)

- Full screenshots folder: [docs/screenshots](docs/screenshots)

- Figma design reference:** [AUDEX Shell — Figma](https://www.figma.com/design/uNDJGPcC1XJGNG4udLRLuZ/AUDEX?m=auto&t=1Lm5x86I5U3ZPUUt-1)

## Notes and Assumptions

- User authentication is mocked for the Week 1 implementation
  (`MockUser.js`); there is no real login/session yet.
- Permissions are currently defined statically in `Permissions.js`,
  not fetched from a backend.
- Module data (`modules`, `overview` in `MockUser.js`) is static/mock
  data.
- Backend/API integration is outside the current Week 1 scope.
- The Sidebar and authorization logic are intentionally kept separate:
  the Sidebar only renders links, `ProtectedRoute` is the single
  enforcement point for module access.
- A reduced role set (5 roles instead of the product's full 7) was used
  deliberately to keep the exercise scoped to what the Sidebar actually
  implements — see "Scope" above.
- `AppShell.jsx` was removed after review; `App.jsx` is the actual
  shell composition root. See "Application Shell" above for the
  reasoning.
