// Test fixture for Fleet M13 (KIT-197): a small JavaScript file so CodeQL default setup has
// something to analyse. Nothing here is deployed or run.
"use strict";

function greet(name) {
  return `Hello, ${String(name)}`;
}

module.exports = { greet };
