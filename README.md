## Find Address with Google Maps and ViaCep [![Netlify Status](https://api.netlify.com/api/v1/badges/51b73283-26e2-4b59-805e-a6bf399d6219/deploy-status)](https://app.netlify.com/sites/findaddress/deploys) ![GitHub repo size](https://img.shields.io/github/repo-size/emunhoz/get_address?style=social)

#### About this app

- At the begining I setup Prettier, ESLint and EditorConfig code patterns
- For the components I decided to use styled-components to style, because it keep the code very clean and it's very friendly
- For testing I've used `testing library` to integration tests and `cypress` to e2e
- For requests I decided to use axios cause is very simple to use

## 🚀 Quick Start

1. Clone this repo and you'll need to create a `.env` at root with `REACT_APP_GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY_HERE` variable with your Google maps api key

2. **Install all dependencies.**

   ```shell
   yarn

   ```

3. **Start the site in `develop` mode.**

   ```shell
   yarn start
   `localhost:3000`
   ```

What's included?

- [x] React
- [x] React Hooks Only
- [x] Styled components 💅💅💅
- [x] `react-hook-form` to validate forms
- [x] PWA 100% - Audits o/
- [x] Axios
- [x] Storybook with components
- [x] [Google Maps API](https://cloud.google.com/maps-platform/?hl=pt-br)
- [x] [Viacep API](https://viacep.com.br/)

## 🚨 Code standard

- [JavaScript Standard Style](https://standardjs.com/) - Javascript styleguide
- [Prettier](https://prettier.io/) - Code formatter
- [ESLint](https://eslint.org/) - Lint to quickly find problems

## 🚥 Testing

- [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity
- [Testing Library](https://testing-library.com/) - Simple and complete testing utilities that encourage good testing practices
- [Cypress](https://www.cypress.io/) - Fast, easy and reliable testing for anything that runs in a browser

#### Available commands

`npm i` or `yarn` to install all dependencies

`yarn storybook` to see all components

`yarn start` to run app at `localhost:3000`

`yarn test --coverage` to see all the tests

`yarn start` with `yarn run cypress open` at the same time to run e2e tests
