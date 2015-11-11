angular.module('notely')
  .service('NotesService', NotesService);

NotesService.$inject = ['$http'];
function NotesService($http) {
  var self = this;

  self.notes = [];

  self.fetch = function() {
    return $http.get('http://localhost:3000/notes')
      .then(
        function(resp){
          self.notes = resp.data;
        },
        function(resp){
          console.log("Notes Get Fail");
          console.log(resp);
        }
      );
  };

  self.get = function () {
    return self.notes;
  };

  self.findById = function (id) {
    for(note in self.notes){
      if(note._id === id){
        return note;
      }
    }
    return {};
  };

  self.save = function (note) {
    return $http.post('http://localhost:3000/notes', {
      note: note
    }).then(
      function (resp) {
        self.notes.unshift(resp.data.note);
      }
    );
  };
}
