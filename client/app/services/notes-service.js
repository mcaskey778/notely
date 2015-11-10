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
}
