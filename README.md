# dayjs-simple
[![CI Unit Tests](https://github.com/orison-networks/dayjs-simple/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/orison-networks/dayjs-simple/actions/workflows/unit-tests.yml)
![GitHub](https://img.shields.io/github/license/orison-networks/dayjs-simple)
![npm](https://img.shields.io/npm/v/dayjs-simple)
![GitHub top language](https://img.shields.io/github/languages/top/orison-networks/dayjs-simple)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/dayjs-simple)

A top-level wrapper around the **[dayjs](https://day.js.org/)** library used within the Orison Networks ecosystem. This library provides mutable objects that reference dayjs functions to manipulate and traverse dates. Standalone functions provide ease of use for date manipulation without having to rely on an instance of a mutable date.

## Table of Contents

- [dayjs-simple](#dayjs-simple)
  - [Table of Contents](#table-of-contents)
- [Features](#features)
- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
    - [CommonJS](#commonjs)
    - [Module](#module)
- [TypeScript](#typescript)
- [Resources](#resources)
- [License](#license)

# Features

- **Mutable** - The date object is mutable and can be used to traverse dates.
- Built on top of **[dayjs](https://day.js.org/)**, still provides all of the functionality of dayjs.
- Exclusive functions for ease of use.
- Custom methods that dayjs does not provide.
- Supports date strings when manipulating dates.
- Can be used in the browser or in node.

# Motivation

Internally, we use **[dayjs](https://day.js.org/)** for date manipulation. We soon realized that we were writing a lot of our own functions that wrapped around the dayjs library. We also had no use for timezones, so we instead decided to create a small wrapper around dayjs that provides extended functionality for date manipulation. Most functions are exposed as both standalone functions and as methods on a mutable date object. We also found mutable dates were extremely convenient for our use-case, so we decided to include them as well. 

This package is not meant to be a replacement for dayjs, but rather a wrapper around it that provides a more convenient API for our use-case. 

# Installation

```bash
npm install dayjs-simple
```

# Usage

### CommonJS

```js
const { MutableDate } = require('dayjs-simple');

const today = new MutableDate();

// or

const dayjsSimple = require('dayjs-simple');

const today = new dayjsSimple.MutableDate();
```

### Module

```js
import { MutableDate } from 'dayjs-simple';

const today = new MutableDate();

// or

import dayjsSimple from 'dayjs-simple';

const today = new dayjsSimple.MutableDate();
```

Most utility functions are provided through the `MutableDate` class. This class also provides extra methods not found within dayjs. Most of the provided methods are also available as standalone functions. These functions all return a new instance of `MutableDate` and do not mutate the original date, unless an instance of `MutableDate` is passed in.

# TypeScript

This package is written in TypeScript and includes type definitions, along with a type guard for `MutableDate`.

```js
import { isMutableDateInstance, MutableDate } from 'dayjs-simple';

const today = new MutableDate();

if (isMutableDateInstance(today)) {
    // today is a MutableDate instance
}
```

# Resources

- [dayjs](https://day.js.org/)
- [Changelog](CHANGELOG.md)

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
