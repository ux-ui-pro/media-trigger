<div align="center">
<br>

<h1>media-trigger</h1>

<p><sup>This is a simple function to run code on entry and exit from media queries</sup></p>

[![npm](https://img.shields.io/npm/v/media-trigger.svg?colorB=brightgreen)](https://www.npmjs.com/package/media-trigger)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/media-trigger.svg)](https://github.com/ux-ui-pro/media-trigger)
[![NPM Downloads](https://img.shields.io/npm/dm/media-trigger.svg?style=flat)](https://www.npmjs.org/package/media-trigger)

</div>
<br>

### Installation
```javascript
$ yarn add media-trigger
```
<sup>or</sup>
```javascript
$ npm i media-trigger
```
<br>

### Import
```javascript
import { mediaTrigger } from 'media-trigger'
```
<br>

### Usage
```HTML
mediaTrigger({
    media: 'only screen and (max-width: 1199.98px), (any-pointer: coarse)',
    entry: () => {
        console.log('entry')
    },
    exit: () => {
        console.log('exit')
    },
    change: () => {
        console.log('change')
    }
})
```
<br>

### License
media-trigger is released under MIT license
