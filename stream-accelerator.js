'use strict';

const stream = require('stream');

const defaultSize = 10000;
const defaultReserve = 100;

module.exports = (size, reserve) => {
  const bufferSize = size || defaultSize;
  const bufferReserve = reserve || defaultReserve;
  const bufferCapacity = bufferSize - bufferReserve;
  const buffer = Buffer.allocUnsafe(bufferSize);
  let cursor = 0;

  return new stream.Transform({
    transform (chunk, enc, next) {
      cursor += buffer.write(chunk.toString(), cursor);
      if (cursor > bufferCapacity) {
        this.push(buffer.slice(0, cursor).toString());
        cursor = 0;
      }
      next();
    },
    flush (done) {
      if (cursor) {
        this.push(buffer.slice(0, cursor).toString());
      }
      done();
    }
  });
};

