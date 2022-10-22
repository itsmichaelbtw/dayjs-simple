# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.1](https://github.com/orison-networks/dayjs-simple/compare/v1.2.0...v1.1.1) (2022-10-22)


### Fixed

* **ci:** actions workflow failing to create PR on tag push ([a18ba23](https://github.com/orison-networks/dayjs-simple/commit/a18ba23b333a43bd302f5349abe8ee8bcbdfeebd))
* **localedate:** incorrect timezone argument supplied ([77828bb](https://github.com/orison-networks/dayjs-simple/commit/77828bb30574767667522fffe856a45bdd1fe3ce))
* unit tests failing with `ms` unit comparisons ([c321e71](https://github.com/orison-networks/dayjs-simple/commit/c321e7113f765d3ad2cf54a4ba21a24afa661d7a))

## [1.1.0](https://github.com/orison-networks/dayjs-simple/compare/v1.0.0...v1.1.0) (2022-10-04)


### Features

* check whether a date input is AM or PM ([9fdb5e4](https://github.com/orison-networks/dayjs-simple/commit/9fdb5e4381f5e5f7a0077af5ddab0b970cef2c51))
* new mutable date instance allowing quick access to the locale date ([1d57792](https://github.com/orison-networks/dayjs-simple/commit/1d5779249f92e1f6b5b04e22cf6440387dd001bd))


### Bug Fixes

* incorrect typings with sub-class inheritance [#1](https://github.com/orison-networks/dayjs-simple/issues/1) ([d453649](https://github.com/orison-networks/dayjs-simple/commit/d45364905a71c5f710b754ec581b46899ea244f5))

## 1.0.0 (2022-10-02)


### Features

* decrement a date by a specified amount ([007e12d](https://github.com/orison-networks/dayjs-simple/commit/007e12ddec89b23cca97e93c3eeec3987471c59d))
* exportable utility helpers ([536731a](https://github.com/orison-networks/dayjs-simple/commit/536731aede6d30238131466dd4be4bb165945f19))
* find a parsable duration between 2 valid dates ([9fc77e7](https://github.com/orison-networks/dayjs-simple/commit/9fc77e718c951bce3feeb155b8d738d407e80c0a))
* format a date input with a given template ([b1bffa5](https://github.com/orison-networks/dayjs-simple/commit/b1bffa56ebb3b665bba488d5a15a7072fb26b898))
* increment a date by a specified amount ([da412fe](https://github.com/orison-networks/dayjs-simple/commit/da412feca3092ed749e7b0dff12da51a96e126fb))
* mutable date instance now supports additional custom methods ([57de7d6](https://github.com/orison-networks/dayjs-simple/commit/57de7d671992a7293591dfef3356663ab58738aa))
* project utils file ([979f7b5](https://github.com/orison-networks/dayjs-simple/commit/979f7b5b42113fc779d5ba22d9e9173262d24da1))
* wrapper around the dayjs lib with added methods ([cc81440](https://github.com/orison-networks/dayjs-simple/commit/cc814400ed0df758d848dbde6ba99672ffee6908))


### Bug Fixes

* function scope having incorrect access to `this` ([db96d95](https://github.com/orison-networks/dayjs-simple/commit/db96d95cb160bbaf40b0dfb4816b08bdd2e991c3))
* passing a mutable date instance failed to validate date ([a5d8bbc](https://github.com/orison-networks/dayjs-simple/commit/a5d8bbc871596207002de9f624b05975e5b4b7e2))
* return current ISO format if no format template is passed ([7c4390f](https://github.com/orison-networks/dayjs-simple/commit/7c4390fba90f8ea9bf9d1bf82969c88a628ff019))
