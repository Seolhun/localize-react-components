# Localize React Components

[![CircleCI](https://circleci.com/gh/Seolhun/localize-components/tree/master.svg?style=svg)](https://circleci.com/gh/Seolhun/localize-components/tree/master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/87c0d9f96fc74d94b60c0c397a6b30c6)](https://www.codacy.com/app/shun10114/localize-components?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Seolhun/localize-components&amp;utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/2ab413e3-946a-4719-bb75-07e76851cbba)](https://codebeat.co/projects/github-com-seolhun-localize-components-master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Greenkeeper badge](https://badges.greenkeeper.io/Seolhun/localize-components.svg)](https://greenkeeper.io/)

- Author : [HunSeol](https://github.com/Seolhun/)

## Why
- I just want to build react components without third party css side-effect.
  - All components have global stylesheet affecting origin product css.

## Goal
- localized-style
- All components are standalone without dipendencies.
- All components be changed for Theme by React Context.

## Used stacks
- TypeScript
- React
- RollupJS <- Webpack 4
- Lerna
- Babel 7
- emotionJS
- polished
- Docz

## Mono Repos
#### Documents
- @seolhun/localize-components-docs
- @seolhun/localize-components-examples

#### Components
- @seolhun/localize-components
- @seolhun/localize-components-atomic

#### Mono Components
- @seolhun/localize-components-button
- @seolhun/localize-components-form
- @seolhun/localize-components-modal
- @seolhun/localize-components-sidebar

#### Utils
- @seolhun/localize-components-hooks
- @seolhun/localize-components-styled-utils
- @seolhun/localize-components-utils-event

#### Types
- @seolhun/localize-components-styled-types
- @seolhun/localize-components-types


## How to getting started
#### Install Package
```bash
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
