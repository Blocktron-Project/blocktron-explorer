<img src="https://github.com/Blocktron-Project/blocktron-explorer/blob/master/logo-explorer.png" alt="logo">

# blocktron-explorer
[![blocktron-lib](https://img.shields.io/badge/blocktron--lib%20version-0.0.1-green.svg?style=flat-square)](https://img.shields.io/badge/blocktron--lib%20version-0.0.1-green.svg) [![GitHub license](https://img.shields.io/github/license/Blocktron-Project/blocktron-explorer.svg?style=flat-square)](https://github.com/Blocktron-Project/blocktron-explorer/blob/master/LICENSE) [![Build Status](https://travis-ci.org/Blocktron-Project/blocktron-explorer.svg?branch=master&style=flat-square)](https://travis-ci.org/Blocktron-Project/blocktron-explorer) [![CircleCI](https://circleci.com/gh/Blocktron-Project/blocktron-explorer.svg?style=svg)](https://circleci.com/gh/Blocktron-Project/blocktron-explorer) [![CodeFactor](https://www.codefactor.io/repository/github/blocktron-project/blocktron-explorer/badge)](https://www.codefactor.io/repository/github/blocktron-project/blocktron-explorer) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b210ca35107840748fff33e332628e44)](https://www.codacy.com/project/sandeepv68/blocktron-explorer/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Blocktron-Project/blocktron-explorer&amp;utm_campaign=Badge_Grade_Dashboard) [![GitHub issues](https://img.shields.io/github/issues/Blocktron-Project/blocktron-explorer.svg?style=flat-square)](https://github.com/Blocktron-Project/blocktron-explorer/issues) [![GitHub forks](https://img.shields.io/github/forks/Blocktron-Project/blocktron-explorer.svg?style=flat-square)](https://github.com/Blocktron-Project/blocktron-explorer/network) [![GitHub stars](https://img.shields.io/github/stars/Blocktron-Project/blocktron-explorer.svg?style=flat-square)](https://github.com/Blocktron-Project/blocktron-explorer/stargazers)  [![Twitter](https://img.shields.io/twitter/url/https/github.com/Blocktron-Project/blocktron-explorer.svg?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FBlocktron-Project%2Fblocktron-explorer)

**Blocktron Explorer** is a web-ui for exploring the blocktron blockchain. A single instance of blocktron-explorer can be used to interact and explore all of the **blocktron-node**s in the entire distributed blocktron blockchain system. Blocktron Explorer is a single page web application built using **ReactJS**.

## Table of Contents
<!--ts-->
* [About]()
* [Getting Started]()
* [Installation]()
* [Changelog]()
* [Usage]()
* [Tests]()
* [Continuous Integration]()
* [Contributing]()
* [Versioning]()
* [Authors]()
* [License]()
* [Acknowledgements]()
<!--te-->

## About
## Getting Started
## Installation
## Changelog
## Usage
## Tests
This project follows a **Test Driven Development (TDD)**. Unit tests are written using Jest, an opensource testing and code coverage framework from facebook opensource. Test spec files can be found inside the test folder. Tests can be run by the command:
```sh
npm run test
```

>**Note:** This includes code/test coverage report also.

## Continuous Integration
Continuous Integration services monitor repositories for changes, then automatically run unit tests on your behalf, typically in a containerized environment. To test this setup works in a continuous integration environment, an integration was done with [Travis CI](https://travis-ci.org/) & [CircleCI](https://circleci.com/). According to the [Travis Node.js Documentation](http://docs.travis-ci.com/user/languages/javascript-with-nodejs/), Travis automatically runs npm install and npm test. The only additional thing I had to add to the Travis configuration was to run npm run build before running the tests. The working Travis config looks like this:

```yml
language: node_js

node_js:
  - stable

install:
  - npm install

script:
  - npm run build
  - npm test
```

CircleCI is similar to Travis-CI, but is more extensible and has much more control over the build process. The CircleCI config looks like this:

```yml
# Javascript Node CircleCI 2.0 configuration file
# Check https://circleci.com/docs/2.0/language-javascript/ for more details
#
version: 2
jobs:
  build:
    docker:
      # specify the version you desire here
      - image: circleci/node:7.10
      # Specify service dependencies here if necessary
      # CircleCI maintains a library of pre-built images
      # documented at https://circleci.com/docs/2.0/circleci-images/
      # - image: circleci/mongo:3.4.4
    working_directory: ~/repo
    steps:
      - checkout
      # Download and cache dependencies
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          # fallback to using the latest cache if no exact match is found
          - v1-dependencies-
      - run: yarn install
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
      # run tests!
      - run: npm run build
      - run: npm test
```

## Contributing
Please read [CONTRIBUTING.md](https://github.com/Blocktron-Project/blocktron-explorer/blob/master/CONTRIBUTING.md) for details on contributing to the project and [CODE_OF_CONDUCT.md](https://github.com/Blocktron-Project/blocktron-explorer/blob/master/CONTRIBUTING.md) for the process for submitting pull requests to us.

## Versioning
We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags](https://github.com/Blocktron-Project/blocktron-explorer/tags) on this repository.

## Authors
* [Sandeep Vattapparambil](https://github.com/SandeepVattapparambil) - Founder, Lead Developer & Maintainer

See also the list of [contributors](https://github.com/Blocktron-Project/blocktron-explorer/blob/master/AUTHORS.md) who participates in this project.

## License
The MIT License

Copyright (c) 2018- Sandeep Vattapparambil, http://www.sandeepv.in

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgements
Made with ❤️ by Sandeep Vattapparambil.