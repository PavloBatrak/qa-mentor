# QA Mentor Task – Playwright Tests


## Description

This project contains automated UI tests using [Playwright](https://playwright.dev/) for the Conduit application:  
https://conduit.mate.academy

It is a solution for the **QA Automation mentor test task**, which involves testing key features of the app:
- User login
- Article creation


## Features Covered

-  Login with valid credentials (via UI or saved auth state)
-  Article creation via `/editor` page
-  Verification of article rendering
-  Page Object Model structure (POM)
-  Fully configured `playwright.config.js`
-  Tests run using `auth.json` (no login required at runtime)


## Project Structure
```
    qa-mentor/
    ├── tests/
    │   ├── login.spec.js
    │   └── article.spec.js
    ├── pages/
    │   ├── LoginPage.js
    │   └── EditorPage.js
    ├── utils/
    │   └── testData.js
    ├── playwright.config.js
    ├── package.json
    ├── auth.json
    ├── README.md
    └── .gitignore
```


## How to Run

1. Install dependencies:
   ```bash
   npm install
2. Run tests in headed mode:
   ```bash
    npx playwright test --headed

3. Run test UI debugger:
   ```bash
    npx playwright test --debug
4. Open HTML report:
   ```bash
    npx playwright show-report


## Known Limitation – Article Publishing
When a new article is created using Playwright automation (a -> b -> c),
a) the app confirms submission,
b) redirects to a page with the expected content and tags,
c) but the article does not appear in the Global Feed or under "Popular Tags".

This appears to be a limitation of the demo backend at https://conduit.mate.academy — likely sandboxed or mocked.

Test article.spec.js includes a check that proves this limitation:
1. It verifies that the article's tag is present on the article page.
2. Then navigates home and confirms the tag is NOT listed in "Popular Tags".
    - As a result, tests validate frontend behavior, form interaction, and rendering — not backend persistence.


## Negative Tests (Optional)

Included negative tests:
- Invalid login credentials
- Article creation with missing required fields

These tests help verify frontend validation and UI behavior on user error.


## Notes
- Uses saved session (auth.json) for stability — no login required in every test.
- All code follows Page Object Model structure for maintainability.
- Test data is externalized in testData.js.


## Author
Pavlo Batrak
GitHub: PavloBatrak/qa-mentor