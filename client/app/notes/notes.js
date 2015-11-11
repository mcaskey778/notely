(function(){
  angular.module("notely.notes", [
    'ui.router'
  ])
  .config(notesConfig);

  notesConfig['$inject'] = ['$stateProvider'];
  function notesConfig ($stateProvider) {

    $stateProvider

    .state('notes', {
      url: '/notes',
      templateUrl: 'notes/notes.html',
      controller: NotesController
    })

    .state('notes.form', {
        url: '/:noteId',
        templateUrl: 'notes/notes-form.html'
    });
  }

  NotesController['$inject'] = ['$state', '$scope', 'NotesService'];
  function NotesController($state, $scope, NotesService) {
    $scope.note = {};

    $scope.saveNote = function() {
      NotesService.save($scope.note).then(function() {
        $scope.note = {};
      });
    };

    NotesService.fetch().then(
      function() {
        $scope.notes = NotesService.get();
      }
    );
  }
})();
