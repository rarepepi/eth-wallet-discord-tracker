<p align="center">
  <img src="https://i.imgur.com/bmery0O.jpg" width="200" alt="Logo" />
</p>

  <p align="center">A server application that invokes a Discord webhook whenever a new transaction is recorded on a particular wallet address. This is built with <a href="http://nestjs.com" target="_blank">NestJS</a> </p>

## Description

[Nest](https://github.com/nestjs/nest)

## Installation

- First you must create a .env file in order to use the Etherscan and Discord APIs. You can find an example in _examples/example.env_ just rename the file to _.env_ and fill in the blanks.

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## License

This project is [MIT licensed](LICENSE).
