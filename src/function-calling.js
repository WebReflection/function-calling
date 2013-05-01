/*jslint plusplus: true, indent: 2 */
/**
 * Whenever some "guru" tells you something is evil,
 * remember that Lucifer is a fallen angel too.
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
        '].concat(Array.prototype.slice.call(arguments,' + j + '))'
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