exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  var def = $.Deferred(); // reg's mult callbacks into queues and relays sucess/failure state
    setTimeout(function() {
      def.resolve(value); //resolve a Deferred object and call any done Callbacks with the given args
    }, 10);
      return def.promise();// return a Deferred's Promise object
  },


  manipulateRemoteData: function(url) {
    var def = $.Deferred();

    $.get(url).then(function(data) {
      var people = $.map(data.people, function(person) {
        return person.name;
      });
      def.resolve(people.sort());
    });

    return def.promise();
  }
};

