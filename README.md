# Run-length encoding

A tiny (150 bytes) binary run-length encoding (RLE) packer/unpacker

[![CircleCI](https://circleci.com/gh/shevchenkonik/rle-data.svg?style=shield)](https://circleci.com/gh/shevchenkonik/rle-data) [![codecov](https://codecov.io/gh/shevchenkonik/rle-data/branch/master/graph/badge.svg)](https://codecov.io/gh/shevchenkonik/rle-data) ![GitHub](https://img.shields.io/github/license/shevchenkonik/rle-data)

The article about Run Length Algorithm is [here](https://shevchenkonik.com/blog/rle). My usecase of `rle-data` is create binary matrix for image segmentation (Canvas) to reduce data size.

## Encoding format

#### Incoming data

```javascript
[0, 0, 0, 0, 0, 1, 1, 0, 0];
```

#### Outgoing data

```javascript
[5, 0, 2, 1, 2, 0];
```

## Decoding format

#### Incoming data

```javascript
[4, 0, 4, 1, 3, 0];
```

#### Outgoing data

```javascript
[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
```

## Installation

```shell
npm i rle-data
```

## API

```javascript
let rle = require("rle-data");

rle.encode([0, 0, 0, 0, 0, 1, 1, 0, 0]);
rle.decode([4, 0, 4, 1, 3, 0]);
```

### Roadmap

- Add other formats to compression
- Use smart data compression
- R&D best practices of RLE
