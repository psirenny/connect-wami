connect-wami
============

[Connect](http://www.senchalabs.org/connect/) middleware for [WAMI Recorder](https://gist.github.com/alotaiba/1730160).

A recording object containing the **path**, **name**, **size** and **type** of the recording are stored in request.files.audio.

Usage
-----

Simply drop wami-connect into your app like so:

```javascript
var expressApp = require('express')()
  , wami = require('connect-wami');
  
expressApp.use(wami());

expressApp.post('/recording', function (req, res) {
  var rec = req.files.audio;
  console.log(rec.path); // "/path/to/audio/file"
});
```
