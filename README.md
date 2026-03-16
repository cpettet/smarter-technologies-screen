# Smarter Technologies Screen

This is a repo is hosting a sort function for Smarter Technologies' robotic automation factory, serving as a tech screen.

## sort function

The function sorts a package based on dimensions (in cm) and mass (in kg) to the following:

- STANDARD: neither bulky nor heavy
- SPECIAL: bulky or heavy
- REJECTED: bulky and heavy

## project structure

All source code is in the `src/` directory, written in TypeScript. Tests are denoted by `*.test.ts`. For maintainability. Logic is encapsulated in helpers for maintainability and testability.

## testing

Tests use [vitest](https://vitest.dev/). Test cases are written for the two helpers and the
main `sort` function.

To test, please run the following:

```sh
nvm use # ensure the correct node environment is used (22.21)
npm i # install dependencies
npm run test # run the test suite
```
