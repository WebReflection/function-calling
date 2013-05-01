/*!
Copyright (C) 2013 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
/*jslint plusplus: true, indent: 2 */
/**
 * Whenever some "guru" tells you something is evil,
 * remember that Lucifer is a fallen angel too.
 * Learn what to trust and stop listening to dogmas!
 */
(function(evil, calling, proto, undef) {
  'use strict';
  if (evil[proto][calling]) {
    return;
  }
  evil[proto][calling] = function (context, args, allOfThem) {
    var
      NULL = 'null',
      $arguments = [],
      length = (args || $arguments).length,
      i = 0,
      j = 0;
    while (i < length) {
      if (args[i] === undef) {
        $arguments[i] = typeof undef;
      } else if (args[i] === null) {
        $arguments[i] = 'arguments[' + (j++) + ']';
      } else {
        $arguments[i] = 'a[' + i + ']';
      }
      i++;
    }
    if (allOfThem) {
      $arguments[0] = '[' + $arguments[0];
      $arguments[length - 1] += (
        '].concat(Array.prototype.slice.call(arguments,' + length + '))'
      );
    }
    return evil(
      'f,a,c',
      [
        'return function ',
        this.name || '',
        '(){return f.',
        allOfThem ? 'apply' : 'call',
        '(',
        context === undef ? NULL : context === null ? 'this' : 'c',
        length ? ',' : '',
        length ? $arguments.join(',') : ',[]',
        ')}'
      ].join('')
    )(this, args, context);
  };
}(Function, 'calling', 'prototype'));