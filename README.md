<div align="center">
<br>

<h1>media-trigger</h1>

<p><sup>MediaTrigger is designed to control the response to changes in media queries, allowing you to perform specific actions when entering or exiting a particular media state, or any change to a media state.</sup></p>

[![npm](https://img.shields.io/npm/v/media-trigger.svg?colorB=brightgreen)](https://www.npmjs.com/package/media-trigger)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/media-trigger.svg)](https://github.com/ux-ui-pro/media-trigger)
[![NPM Downloads](https://img.shields.io/npm/dm/media-trigger.svg?style=flat)](https://www.npmjs.org/package/media-trigger)

<sup>400B gzipped</sup>

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

&#10148; **Options**

|  Option  |         Type         |  Default   | Description                                                                                |
|:--------:|:--------------------:|:----------:|:-------------------------------------------------------------------------------------------|
| `media`  |       `string`       | `Required` | The media query string to be observed.                                                     |
| `entry`  | `function` \| `null` |   `null`   | Callback function invoked when the media query starts matching (`matches` becomes `true`). |
|  `exit`  | `function` \| `null` |   `null`   | Callback function invoked when the media query stops matching (`matches` becomes `false`). |
| `change` | `function` \| `null` |   `null`   | Callback function invoked on any change in the media query's matching state.               |
<br>

&#10148; **Methods**

| Method      | Description                                                                    |
|:------------|:-------------------------------------------------------------------------------|
| `init()`    | Initializes the media query listener and triggers the initial state callbacks. |
| `destroy()` | Removes the media query listener to stop observing changes.                    |
<br>

&#10148; **Example**

```javascript
// Initialize a MediaTrigger instance
const mediaTrigger = new MediaTrigger({
  media: '(max-width: 768px)',
  entry: (mq) => {
    console.log('Screen is now less than or equal to 768px wide.');
  },
  exit: (mq) => {
    console.log('Screen is now wider than 768px.');
  }
});

// Start listening to media query changes
mediaTrigger.init();

// Later, if you want to stop listening
mediaTrigger.destroy();
```
<br>

&#10148; **Browser Support**

MediaTrigger relies on the window.matchMedia API, which is supported in all modern browsers. If window.matchMedia is not available, MediaTrigger will safely do nothing.

<br>

&#10148; **License**

media-trigger is released under MIT license
