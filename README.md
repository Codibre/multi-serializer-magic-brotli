[![Actions Status](https://github.com/Codibre/multi-serializer-magic-brotli/workflows/build/badge.svg)](https://github.com/Codibre/multi-serializer-magic-brotli/actions)
[![Actions Status](https://github.com/Codibre/multi-serializer-magic-brotli/workflows/test/badge.svg)](https://github.com/Codibre/multi-serializer-magic-brotli/actions)
[![Actions Status](https://github.com/Codibre/multi-serializer-magic-brotli/workflows/lint/badge.svg)](https://github.com/Codibre/multi-serializer-magic-brotli/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/multi-serializer-magic-brotli/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/multi-serializer-magic-brotli/maintainability)
[![Packages](https://david-dm.org/Codibre/multi-serializer-magic-brotli.svg)](https://david-dm.org/Codibre/@multi-serializer/magic-brotli)
[![npm version](https://badge.fury.io/js/%40codibre%2Fmulti-serializer-magic-brotli.svg)](https://badge.fury.io/js/%40codibre%2Fmulti-serializer-magic-brotli)

This library delivers a brotli compression using magic numbers as a prefix to the generated stream, so the compression is identifiable.
The magic numbers are selecting following the proposal [here](https://github.com/madler/brotli/blob/master/br-format-v3.txt), yet only the magic numbers was considered to it, so it is not a perfect implementation

## How to Install

```
npm i @multi-serializer/magic-brotli
```

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
