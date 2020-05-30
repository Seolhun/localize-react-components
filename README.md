# Localize React Components

[![Build Status](https://travis-ci.com/Seolhun/localize-components.svg?branch=master)](https://travis-ci.com/Seolhun/localize-components)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/87c0d9f96fc74d94b60c0c397a6b30c6)](https://www.codacy.com/app/shun10114/localize-components?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Seolhun/localize-components&amp;utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/2ab413e3-946a-4719-bb75-07e76851cbba)](https://codebeat.co/projects/github-com-seolhun-localize-components-master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Greenkeeper badge](https://badges.greenkeeper.io/Seolhun/localize-components.svg)](https://greenkeeper.io/)


<div style='text-align: center; margin-top: 40px'>
  <img src='./.github/logo.png' />
</div>

## Why
- I just want to build react components without third party css side-effect.
  - All components have global stylesheet affecting origin product css.

## Goal
- Localized-style
- All components be changed for Theme by React Context.
  - All core variables is controlled by context
- Processing all most colors

## Used stacks
- TypeScript
- RollupJS, Webpack 4
- React
- emotionJS
- polished
- Lerna
- Babel 7
- Docz

## Mono Repos
#### Documents
- @seolhun/localize-components-docs
- @seolhun/localize-components-examples

#### Components
- @seolhun/localize-components
- @seolhun/localize-components-atomic
- @seolhun/localize-components-icons

#### Mono Components
- @seolhun/localize-components-form
- @seolhun/localize-components-grid

#### Utils
- @seolhun/localize-components-hooks
- @seolhun/localize-components-styled-utils
- @seolhun/localize-components-event-utils

#### Types
- @seolhun/localize-components-styled-types

## How to getting started
#### Install Package


```bash
# NPM
$ npm install --save @seolhun/localize-components @seolhun/localize-components-atomic

# Yarn
$ yarn add @seolhun/localize-components @seolhun/localize-components-atomic
```

## How to use
#### import
```js
import { Alert } from '@seolhun/localize-components';
import { Button } from '@seolhun/localize-components-atomic';
```

## Examples
### PROD
- Docs : [localize-components-docs.surge.sh](http://localize-components-docs.surge.sh/#/)
- Examples : [localize-components-examples.surge.sh](http://localize-components-examples.surge.sh/#/)

### DEV
- Docs : [dev.localize-components-docs.surge.sh](http://dev.localize-components-docs.surge.sh/#/)
- Examples : [dev.localize-components-examples.surge.sh](http://dev.localize-components-examples.surge.sh/#/)
