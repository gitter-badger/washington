// TimeoutError
// ============
//
// Represents an error generated by timeout
"use strict";

var TimeoutError = function (message) {

  //! Set the error message
  this.message = message

  //! Set the name. Used for logging the stack trace
  this.name    = "TimeoutError"

  //! Get the stack trace from Error
  //! This is a weird thing to do but it turns out that it is the only
  //! way around
  Error.captureStackTrace(this, TimeoutError)
}

//! Inherit from Error
TimeoutError.prototype = Object.create(Error.prototype)

module.exports = TimeoutError
