# Nodejs Testing And Github Action

## Description

A repository for the workshop organized by [tech-dojo](http://www.tech-dojo.org/#!/) on how to add test code and integrate CI/CD for a Node app using Jest and GitHub actions.

## Heroku

https://workshop-testing-001.herokuapp.com/

NB: The heroku link might not work for you because i am using heroku free tier which only give 5 free dynos.

## Installation

First clone this repository.

```bash
git clone https://github.com/mirsahib/Nodejs-Testing-And-Github-Action.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```bash
npm install
```

After successfull installation run

```bash
npm start
```

To test the api

```bash
npm test
```

To run server in development mode (nodemon)

```bash
npm run development
```

## Code content

- Api code is in `app.js` file
- Test code is in `_test_/app.test.js` file
- Model schema is in `article.model.js` file
- Github Action build is in `.github/workflows/node_ci.yml` file

## Workshop Information : http://www.tech-dojo.org/#!/events/5fed680b58177c00043778ef
