// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
es5id: 15.4.4.19-1-12
description: Array.prototype.map - applied to RegExp object
---*/

function callbackfn(val, idx, obj) {
  return obj instanceof RegExp;
}

var obj = new RegExp();
obj.length = 1;
obj[0] = 1;

var testResult = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(testResult[0], true, 'testResult[0]');

reportCompare(0, 0);
