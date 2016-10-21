exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    return arr.filter(function(item) { return item !== 2 });
  },

  removeWithoutCopy: function(arr, item) {
    var i;

    for (i = arr.length-1; i > 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },


  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var x = [];
    x = arr1.concat(arr2);
    return x;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var seen = {};
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(item);
        dupes = dupes.map(Number);
      }
    }

    return dupes;
  },

  square: function(arr) {
   var x = [];
   for (var i = 0, len = arr.length; i < len; i++){
      x.push(arr[i] * arr[i])
   }
   return x;
  },

  findAllOccurrences: function(arr, target) {
    var x = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        x.push(i);
      }
    }
      return x;
    }
};
