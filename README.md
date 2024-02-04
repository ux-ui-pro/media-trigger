<div align="center">
<br>

<h1>media-trigger</h1>

<p><sup>This is a simple class to execute code on entering and exiting media queries.</sup></p>

[![npm](https://img.shields.io/npm/v/media-trigger.svg?colorB=brightgreen)](https://www.npmjs.com/package/media-trigger)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/media-trigger.svg)](https://github.com/ux-ui-pro/media-trigger)
[![NPM Downloads](https://img.shields.io/npm/dm/media-trigger.svg?style=flat)](https://www.npmjs.org/package/media-trigger)

<sup>350B gzipped</sup>
<h3><a href="https://codepen.io/ux-ui/pen/gOBQjzR">Demo</a></h3>

</div>
<br>

&#10148; **Install**
```
$ yarn add media-trigger
```

<br>

&#10148; **Import**
```javascript
import MediaTrigger from 'media-trigger'
```
<br>

&#10148; **Usage**
```javascript
const createTrigger = (media, entry, exit, change) => {
  return new MediaTrigger({
    media,
    entry,
    exit,
    change,
  });
};

createTrigger(
  '(min-width: 1200px) and (any-pointer: fine)',
  () => {
    console.log('entry');
  },
  () => {
    console.log('exit');
  },
  () => {
    console.log('changed');
  },
);
```
<br>

&#10148; **License**

media-trigger is released under MIT license
