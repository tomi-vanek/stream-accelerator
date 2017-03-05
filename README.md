# Stream Accelerator

Node stream with in-memory buffering of text content.

If stream is fragmented to many small chunks, the write operation is slow. Buffering decreases number of IO operations, and so can dramatically increase the write throughput.

The _stream-accelerator_ is a [Transform stream](https://nodejs.org/api/stream.html#stream_class_stream_transform) and uses [Node Buffer](https://nodejs.org/api/buffer.html) for temporary in-memory buffer that "defragments" the stream. No dependencies to external libraries.

## Quick Start

Install _stream-accelerator_

``` JavaScript
npm install --save stream-accelerator
```

Import the library in JavaScript code

``` JavaScript
const accelerate = require('stream-accelerator');
```

Use the stream accelerator for buffering before write operation or before calling OS commands with pipe stream.

In the [example code](./example.js) the buffering minimizes the number of IO operations and speeds up writing.

## License

_stream-accelerator_ is free and unencumbered public domain software. For more information, see the accompanying UNLICENSE file.
