// to import something from a module we use require global variable

const names = require("./4-names");

const sayHi = require('./5-utils');
const isEligible = require("./5-utils");

// whenever you import a module it is invoked by default
require("./6-mindGrenade");

// isEligible(names.harry, 12);
// isEligible(names.david, 21);
// isEligible(names.john, 19);

