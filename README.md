<div align="center">
<br>

<h1>media-trigger</h1>

<p><sup>This is a simple function to run code on entry and exit from media queries</sup></p>

[![npm](https://img.shields.io/npm/v/media-trigger.svg?colorB=brightgreen)](https://www.npmjs.com/package/media-trigger)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/media-trigger.svg)](https://github.com/ux-ui-pro/media-trigger)
[![NPM Downloads](https://img.shields.io/npm/dm/media-trigger.svg?style=flat)](https://www.npmjs.org/package/media-trigger)

<sup><a href="https://bundlephobia.com/package/media-trigger">350B gzipped</a></sup>
<h3><a href="https://codepen.io/ux-ui/pen/gOBQjzR">Demo</a></h3>

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
import MediaTrigger from 'media-trigger'
```
<br>

### Usage
```HTML
new MediaTrigger({
    media: '(min-width: 992px) and (any-pointer: fine)',
    entry: () => {
        console.log('Media query entered')
    },
    exit: () => {
        console.log('Media query exited')
    },
    change: () => {
        console.log('Media query changed')
    }
})
```
<br>

### License
media-trigger is released under MIT license
