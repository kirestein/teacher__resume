The Netlify deploy errored, with the following guidance provided:

Diagnosis

- Relevant log lines: build failed when the Angular build budget check flagged oversized component style files: [line 73](#L73), [line 74-L78](#L74-L78). The build command then exited with an error: [line 81-L90](#L81-L90).

- Error type and cause: Angular CLI "budgets" check failing during production build. The component stylesheet files src/app/modules/components/content/content.component.sass and src/app/modules/components/aside/aside.component.sass are exceeding the configured budget, which is treated as an error and causes the build to fail. The files in the repo are:
  - https://github.com/kirestein/teacher__resume/blob/main/src/app/modules/components/content/content.component.sass
  - https://github.com/kirestein/teacher__resume/blob/main/src/app/modules/components/aside/aside.component.sass

Solution

You have two safe choices — fix the CSS size (recommended) or relax the Angular budget so the build won’t fail.

1. Recommended: reduce/relocate the large styles

- Inspect the two SASS files linked above and remove or refactor large/unused rules, large inline assets (base64 images), or duplicate rules.
- If those styles are shared across many components, move them into global styles (src/styles.scss) so they don’t count as a single component’s style payload.
- Rebuild locally to confirm ng build succeeds before pushing to Netlify:
  - npm run build
  - or ng build --configuration production

2. Quick / configuration fix: increase or disable the budget that triggers the error

- Edit angular.json in your project root. Find the build configuration for your project (project name appears to be my-resume given your publish path) under "projects" → "<your-project>" → "architect" → "build" → "configurations" → "production".
- Locate the "budgets" array and either increase the limits for the component-style budget (type: "anyComponentStyle") or remove/modify it so it only warns instead of errors.

Example: increase limits (change values to fit your needs)

```json
// angular.json (snippet)
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "2mb",
    "maximumError": "5mb"
  },
  {
    "type": "anyComponentStyle",
    "maximumWarning": "500kb",
    "maximumError": "1mb"
  }
]
```

Or make it only warn (no error):

```json
"budgets": [
  {
    "type": "anyComponentStyle",
    "maximumWarning": "500kb"
    // remove maximumError or set it very high
  }
]
```

Steps to apply the configuration fix

1. Open angular.json, update the budgets as above.
2. Commit and push the change.
3. Trigger a new Netlify build.

Notes and tips

- Prefer reducing per-component CSS size over increasing budgets to keep smaller client bundles.
- Re-run the build locally with the same Node/npm version Netlify uses if you want parity.
- If you need to adjust Node on Netlify (not required here), follow Netlify docs for changing Node versions: https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript

References to logs

- Build failed and bundle generation error: [line 73](#L73)
- Budget warnings/errors for the two SASS files: [line 74-L78](#L74-L78)
- Build command failure reported by Netlify: [line 81-L90](#L81-L90)

The relevant error logs are:

Line 0: build-image version: dffa6e46a3b73a23ca8995efed9259d5d2772478 (noble)
Line 1: buildbot version: 91fc597bd5d0118ee1f60dbaad1198626ecc887e
Line 2: Fetching cached dependencies
Line 3: Failed to fetch cache, continuing with build
Line 4: Starting to prepare the repo for build
Line 5: No cached dependencies found. Cloning fresh repo
Line 6: git clone --filter=blob:none https://github.com/kirestein/teacher__resume
Line 7: Preparing Git Reference refs/heads/main
Line 8: Starting to install dependencies
Line 9: v22.21.1 is already installed.
Line 10: Now using node v22.21.1 (npm v10.9.4)
Line 11: Enabling Node.js Corepack
Line 12: Started restoring cached build plugins
Line 13: Finished restoring cached build plugins
Line 63: > ng build
Line 64: - Building...
Line 65: [1mInitial chunk files[22m [2m | [22m[1mNames[22m [2m | [22m [1mRaw size[22m[2m | [22m[1mEstimated transfer
Line 66: [32mmain-BLVLZT7N.js[39m [2m | [22m[2mmain[22m [2m | [22m[36m208.25 kB[39m[2m | [22m [36m
Line 67: [32mchunk-4R3OUH5K.js[39m [2m | [22m[2m-[22m [2m | [22m[36m144.59 kB[39m[2m | [22m [36m
Line 68: [32mstyles-DUGO2LH5.css[39m [2m | [22m[2mstyles[22m [2m | [22m [36m75.51 kB[39m[2m | [22m [36
Line 69: [32mpolyfills-SCHOHYNV.js[39m[2m | [22m[2mpolyfills[22m [2m | [22m [36m34.52 kB[39m[2m | [22m [36m
Line 70: [1m [22m [2m | [22m[1mInitial total[22m[2m | [22m[1m462.87 kB[22m[2m | [22m [1m106.
Line 71: [1mLazy chunk files[22m [2m | [22m[1mNames[22m [2m | [22m [1mRaw size[22m[2m | [22m[1mEstimated transfer
Line 72: [32mchunk-A5AVTLZG.js[39m [2m | [22m[2mbrowser[22m [2m | [22m [36m63.57 kB[39m[2m | [22m [36m
Line 73: Application bundle generation failed. [4.481 seconds]
Line 74: [1m[33m[33m▲ [43;33m[[43;30mWARNING[43;33m][0m [1msrc/app/modules/components/content/content.component.sass exceeded max
Line 75: [33m▲ [43;33m[[43;30mWARNING[43;33m][0m [1msrc/app/modules/components/aside/aside.component.sass exceeded maximum budget.
Line 76: [39m[22m
Line 77: [1m[31m[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1msrc/app/modules/components/content/content.component.sass exceeded maxim
Line 78: [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1msrc/app/modules/components/aside/aside.component.sass exceeded maximum budget. Bu
Line 79: [39m[22m
Line 80: [91m[1m​[22m[39m
Line 81: [91m[1m"build.command" failed [22m[39m
Line 82: [91m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 83: ​
Line 84: [31m[1mError message[22m[39m
Line 85: Command failed with exit code 1: npm run build
Line 86: ​
Line 87: [31m[1mError location[22m[39m
Line 88: In Build command from Netlify app:
Line 89: npm run build
Line 90: ​
Line 91: [31m[1mResolved config[22m[39m
Line 92: build:
Line 93: command: npm run build
Line 94: commandOrigin: ui
Line 95: publish: /opt/build/repo/dist/my-resume/browser
Line 96: publishOrigin: ui
Line 97: plugins:
Line 98: - inputs: {}
Line 99: origin: ui
Line 100: package: "@netlify/angular-runtime"
Line 101: Failed during stage 'building site': Build script returned non-zero exit code: 2
Line 102: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 103: Failing build: Failed to build site
Line 104: Finished processing build request in 25.731s
