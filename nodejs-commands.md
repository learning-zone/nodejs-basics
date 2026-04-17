## NodeJS Commands

> **Notes:**
> - `npm install --save` (`-S`) and `npm install --save-dev` (`-D`) flags are the default behaviour since **npm v5** — the flags are still valid but optional.
> - Prefer **`npx <package>`** over global (`-g`) installs for one-off CLI tools to always use the latest version.
> - Use the **`node:` protocol prefix** for built-in module imports in modern Node.js: `import { readFile } from 'node:fs/promises'`.

|Sl.No.| Commands                                    | Description                   |
|------|---------------------------------------------|-------------------------------|
| 01. |`npm install node@22`                         | Install Node.js v22 (current LTS as of 2026). Use [nvm](https://github.com/nvm-sh/nvm) / [fnm](https://github.com/Schniz/fnm) for version management on your machine. |
| 02. |`npm init`                                    | Creates package.json interactively |
| 03. |`npm init -y`                                 | Creates package.json with defaults (skip prompts) |
| 04. |`npm install`                                 | Install all dependencies listed in package.json into node_modules |
| 05. |`npm ci`                                      | Clean install from package-lock.json (faster, deterministic – use in CI/CD pipelines) |
| 06. |`npm install -g live-server`                  | Install live-server globally |
| 07. |`npm install -g grunt-cli`                    | Install Grunt CLI globally |
| 08. |`live-server`                                 | Start a local dev HTTP server with live reload |
| 09. |`npm install express`                         | Install express into local project (--save is default since npm v5) |
| 10. |`npm install cors`                            | Cross Origin Resource Sharing – allows API access from other domains |
| 11. |`npm install express-session`                 | Install express-session |
| 12. |`npm install mongoose`                        | Install Mongoose (MongoDB ODM) |
| 13. |`npm install ws`                              | Install WebSocket library |
| 14. |`npm install socket.io`                       | WebSocket abstraction with fallbacks |
| 15. |`npm install underscore`                      | Utility library (consider lodash or native ES2024 alternatives) |
| 16. |`npm uninstall underscore`                    | Remove a package |
| 17. |`npm install --save-dev mocha`                | JavaScript unit-testing framework |
| 18. |`npx mocha`                                   | Run Mocha tests via npx (no global install needed) |
| 19. |`npm install --save-dev nock`                 | HTTP server mocking for tests |
| 20. |`npm install --save-dev rewire`               | Dependency injection for tests |
| 21. |`npm install --save-dev sinon`                | Mocks, stubs and spies for tests |
| 22. |`npm install --save-dev supertest`            | HTTP assertion library for integration tests |
| 23. |`npm install --save-dev cheerio`              | Server-side jQuery-like HTML parsing |
| 24. |`npm install --save-dev c8`                   | Native V8 code-coverage tool (**replaces the deprecated `istanbul`/`nyc`**) |
| 25. |`npx c8 mocha`                                | Run Mocha with V8 coverage report |
| 26. |`npm install --save-dev eslint`               | JavaScript/TypeScript linter (**replaces the legacy `jshint`**) |
| 27. |`npx eslint --init`                           | Interactive ESLint configuration wizard |
| 28. |`npm install -g typescript`                   | Install TypeScript compiler globally |
| 29. |`npm install -g webpack-cli`                  | Install Webpack CLI globally |
| 30. |`npx webpack`                                 | Run Webpack via npx |
| 31. |`npm install -g sass`                         | Install Dart Sass (the **current implementation** – Ruby Sass is end-of-life) |
| 32. |`sass --watch src/styles:dist/css`            | Watch and compile Sass to CSS |
| 33. |`sass --style=compressed input.scss output.css` | Compile and minify a Sass file |
| 34. |`gulp develop`                                | Start dev server (Gulp task) |
| 35. |`gulp build`                                  | Clean and minify into a single file |
| 36. |`gulp watch`                                  | Watch for file changes |
| 37. |`gulp test:tdd`                               | Run unit tests in TDD mode |
| 38. |`npm start`                                   | Run the `start` script defined in package.json |
| 39. |`node app.js`                                 | Run app.js on Node.js |
| 40. |`node --watch app.js`                         | Run app.js and auto-restart on file changes (**built-in since Node.js 18**, replaces nodemon for basic use) |
| 41. |`node --inspect app.js`                       | Start Node.js with Chrome DevTools debugger enabled |
| 42. |`node --inspect-brk app.js`                   | Start with debugger and break on first line |
| 43. |`node -v`                                     | Print Node.js version |
| 44. |`npm -v`                                      | Print npm version |
| 45. |`tsc -v`                                      | Print TypeScript compiler version |
| 46. |`git version`                                 | Print Git version |
| 47. |`webpack -v`                                  | Print Webpack version |
| 48. |`npm -l`                                      | Display full npm usage info |
| 49. |`npm config list`                             | List npm configuration |
| 50. |`npm config rm proxy`                         | Remove proxy setting |
| 51. |`npm config rm https-proxy`                   | Remove HTTPS proxy setting |
| 52. |`npm cache clean --force`                     | Clear the npm cache (**`--force` required since npm v5**) |
| 53. |`npm audit`                                   | Scan installed packages for known security vulnerabilities |
| 54. |`npm audit fix`                               | Automatically fix vulnerabilities where possible |
| 55. |`npm outdated`                                | List packages that have newer versions available |
| 56. |`npm update`                                  | Update all packages to their latest compatible versions |
| 57. |`npm run <script>`                            | Run a script defined in the `scripts` field of package.json |
| 58. |`npm pack`                                    | Create a tarball of the package (useful before publishing) |
| 59. |`npm publish`                                 | Publish the package to the npm registry |
| 60. |`npm link`                                    | Create a symlink in the global folder |
| 61. |`npm link <package>`                          | Link-install a package from another local directory |
| 62. |`npx <package>`                               | Execute a package binary without installing it globally |
| 63. |`corepack enable`                             | Enable Corepack (built-in Node.js 16.9+ tool that manages Yarn and pnpm versions) |
| 64. |`ng add @angular/material`                    | Add Angular Material to an Angular project |
| 65. |`npm install rxjs`                            | Reactive Extensions Library for JavaScript (current: v7.x) |
| 66. |`npm install jsonwebtoken`                    | JSON Web Token implementation |
| 67. |`npm install dotenv`                          | Load environment variables from a `.env` file |
| 68. |`npm install helmet`                          | Secure Express apps by setting various HTTP headers |
| 69. |`npm install --save-dev jest`                 | JavaScript testing framework with built-in coverage |
| 70. |`npx jest --coverage`                         | Run Jest tests with coverage report |
| 71. |`npm install --save-dev @types/node`          | TypeScript type definitions for Node.js |
| 72. |`npm install grunt-contrib-watch --save-dev`  | Grunt plugin to watch files for changes |
