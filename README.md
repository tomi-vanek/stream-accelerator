# Stream Accelerator

Node stream with in-memory buffering of text content.
Buffering decreases number of IO operations, if previous stream processing results in many small chunks.

## Quick Start

1. Install _stream-accelerator_ with `npm install --save stream-accelerator`.
1. Add `const accelerate = require('stream-accelerator');` to JavaScript code.
1. Use the stream accelerator as in the [example code](./example.js) for buffering the chunks and so minimizing the number of IO operations by writing.

## License

_stream-accelerator_ is free and unencumbered public domain software. For more information, see the accompanying UNLICENSE file.
