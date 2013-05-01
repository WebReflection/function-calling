function-calling
================

[![build status](https://secure.travis-ci.org/WebReflection/function-calling.png)](http://travis-ci.org/WebReflection/function-calling)

### WUT?

Partial applications are great! Code can be reused in many ways and new APIs could born on each line.

This module is about a better alternative to `Function.prototype.bind(context, arg1, argN)`


### The Problem

`.bind()` traps the context forever, as well as any argument.

This means we cannot recycle a bound object in order to use a different context but same fixed amount of arguments.

```javascript
var slice = [].slice.bind(
  // here we chose the context once
  arguments,
  // we also chose a predefined amount
  2
);

// we can only use above function like this
slice();

// optionally change the second argument
slice(3);
// equivalent of
[].slice.call(arguments, 2, 3);
```

### The Solution
`.calling()` makes the resulting object smarter and reusable in a billion of combinations.
```javascript
var slice = [].slice.calling(
  // here we chose to not bind
  // any context
  null,
  // here we specify arguments
  // that should be used per each call
  [2],
  // we can force the resulting function
  // to NOT accept any arbitrary amount of
  // extra arguments (blocked amount of args)
  true
);

// we can now do same thing done before
// specifying a different context at any time
slice.call(arguments);
slice.call(otherContext);

// optionally use the second arg
slice.call(arguments, 3);
// equivalent of
[].slice.call(arguments, 2, 3);
```
Confused? It's easier than it looks like, check this out!

### Understanding The API
First thing to understand is this: properties used to define the behavior are quantic: `undefined`, `null`, `anyValue`.

This is probably the first library where `undefined` and `null` have a very different meaning: hooozaaaaa!

`undefined`, if explicitly set, means that no context or argument should be considered or used.

`null` means that the context or the argument will be filled up with what's provided by the user.

`anyValue` means any value except null or undefined.

All these possibilities are called `options` in the following API description.

```javascript
Function.prototype.calling(
  options, // the context
  [options0, options1, ..., optionsN], // 0 or more arguments
  boolean=false // optional boolean value to block all extra arguments
);
```
Still confused? Here few **examples**:

```javascript
// parseInt with blocked 10 radix
var ten = parseInt.calling(
  undefined, // global context, no need to accept different context
  [
    null,    // argument[0] is accepted and used
    10       // arguments[1] is set as 10
  ]
  // no need to block arguments
  // parseInt accepts only 2 args in any case
  // however, if we are sure we are good
  // blocking arguments will speed up execution!
);

ten('08') === 8; // true
ten('08', 2) === 8; // true
ten('08', 8) === 8; // true
ten('08', 16) === 8; // true
ten('0a', 16) === 0; // true

// similar bind behavior
// (example only since you might just use bind here)
var args = [].slice.calling(arguments, []);
args(); // slice.call(arguments)
args(1); // slice.call(arguments, 1)
args(1, 2); // slice.call(arguments, 1, 2)

// with blocked signature, no second arg
var args = [].slice.calling(arguments, [null], true);
args(); // slice.call(arguments)
args(1); // slice.call(arguments, 1)
args(1, 2); // **still** slice.call(arguments, 1)
```
