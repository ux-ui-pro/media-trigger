<div align="center">
<br>

<h1>media-trigger</h1>

<p><sup>MediaTrigger is designed to control the response to changes in media queries, allowing you to perform specific actions when entering or exiting a particular media state, or any change to a media state.</sup></p>

[![npm](https://img.shields.io/npm/v/media-trigger.svg?colorB=brightgreen)](https://www.npmjs.com/package/media-trigger)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/media-trigger.svg)](https://github.com/ux-ui-pro/media-trigger)
[![NPM Downloads](https://img.shields.io/npm/dm/media-trigger.svg?style=flat)](https://www.npmjs.org/package/media-trigger)

<sup>350B gzipped</sup>

<a href="https://codepen.io/ux-ui/pen/gOBQjzR">Demo</a>

</div>
<br>

&#10148; **Install**
```console
$ yarn add media-trigger
```

<br>

&#10148; **Import**
```javascript
import MediaTrigger from 'media-trigger';
```
<br>

&#10148; **Usage**
```javascript
const mediaTrigger = new MediaTrigger({
  media: '(min-width: 992px)',
  entry: (mq) => {
    console.log('Entered media query:', mq.media);
  },
  exit: (mq) => {
    console.log('Exited media query:', mq.media);
  },
  change: (mq) => {
    console.log('Media query change:', mq.media, 'matches:', mq.matches);
  }
});

mediaTrigger.init();
```
<br>

&#10148; **License**

media-trigger is released under MIT license
