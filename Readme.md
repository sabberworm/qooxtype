# qooxtype

qx2ts is a small node.js utility that takes a folder full of JSON files (as generated by qooxdoo’s `./generate.py api` command) and turns them into a TypeScript declaration source file.

It also contains some useful aliases for the types used by qooxdoo itself.

Generated files for the most recent versions of qooxdoo are also included

## Usage

run `node qx2ts /path/to/qooxdoo/app [generated-file-name.d.ts]`. When leaving out the output file name, output goes to ./appname.d.ts. The builder is special-cased not to output `framework` when used with the qooxdoo source but take the name of the parent folder (`qooxdoo-v-sdk.d.ts`).

## Known issues

* Some qooxdoo classes extend Error, which is not a legal class type in TS.
* Return and argument types in the qooxdoo API are not always correctly scoped. qooxtype does not yet fix these.
* Overloaded methods do not yet work.

## License

qooxtype is freely distributable under the terms of an MIT-style license.

Copyright (c) 2012-2013 Vertec AG, http://vertec.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
