var util = require('util'),
    Stream = require('stream'),
    PassThrough = Stream.PassThrough,
    Duplex = Stream.Duplex;

util.inherits(Gateway, Duplex);

function Gateway(options) {
  if ( !(this instanceof Gateway) ) {
    return new Gateway(options);
  }

  Duplex.call(this, { objectMode: true });

  var self = this;

  this.input = new PassThrough();
  this.output = new PassThrough({ objectMode: true });

  this.output.on('readable', function () {
    var d = self.output.read();
    self.push( d );
  });

}

Gateway.prototype._write = function( chunk, encoding, callback ) {
  this.input.write(chunk);
  callback();
};

Gateway.prototype._read = function( size ) {
};

module.exports = Gateway;
