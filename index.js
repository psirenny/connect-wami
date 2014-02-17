var path = require('path')
  , temp = require('temp');

module.exports = function () {
  return function (req, res, next) {
    if (req.get('Content-Type') !== 'audio/x-wav') {
      return next();
    }

    req.files = {
      audio: {
        name: 'audio',
        size: parseInt(req.get('Content-Length')),
        type: req.get('Content-Type')
      }
    };

    var stream = temp.createWriteStream();
    req.files.audio.path = stream.path;
    req.files.audio.name = path.basename(stream.path) + '.wav';
    req.pipe(stream);
    req.on('end', next);
  };
}