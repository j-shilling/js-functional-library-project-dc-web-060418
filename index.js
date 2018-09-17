fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === 'object') {
        for (key in collection) {
          callback(collection[key], key, collection);
        }
      } else if (typeof collection === 'array') {
        for (let i = 0; i < collection.length; i++) {
          callback (collection[i], i, collection);
        }
      }

      return collection;
    },

    map: function(collection, callback) {
      arr = [];

      for (elm of collection) {
        arr.push(callback(elm));
      }

      return arr;
    },

    reduce: function(collection, callback, acc) {
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
