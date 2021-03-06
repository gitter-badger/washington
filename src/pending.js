// Pending
// =======
//
// Class representing an example in a pending status.
//
// #### Properties
//
// - message: `String`
// - original: `Washington`
//
// #### Constructor arguments
//
// - `Washington` original
//
"use strict";

var Pending = function (original) {
  this.message  = original.message
  this.original = original
}

module.exports = Pending
