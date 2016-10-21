exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
   var message = fn(...arr);  // can also use apply() for this: return fn.apply(null, arr);
   return message;
  },

  speak: function(fn, obj) {
    return fn.apply(obj); // can also use call() for this in place of apply
  },

  functionFunction: function(str) {
    return function(secondPart) {
    return str + ', ' + secondPart;
   };
  },

  makeClosures: function(arr, fn) {
    var myArray = [];

    var makeFunc = function(val) {
      return function() { return fn(val); }; // not sure how this will square the values??
    };

    for (var i = 0, len = arr.length; i < len; i++) {
      myArray.push(makeFunc(arr[i])); // running makeFunc on the array values
    }

    return myArray;
  },

  partial: function(fn, str1, str2) {
     var partialFn = function(str3) { // passing segment !!! to this function
        return fn(str1, str2, str3)
     }
        return partialFn;
  },

  useArguments: function() {

    var sum = 0;
    for (i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }
     return sum;
  },

  callIt: function(fn) {
    var intake = function(...arguments) {
    for (var i=0; i<arguments.length; i++)
      fn.apply(null, arguments)
    }
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
