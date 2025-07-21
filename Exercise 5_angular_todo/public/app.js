angular.module('todoApp', [])
.controller('TodoController', function($scope, $http) {
  $scope.tasks = [];
  $scope.newTask = '';

  // Load tasks on startup
  $http.get('/tasks').then(function(res) {
    $scope.tasks = res.data;
  });

  $scope.addTask = function() {
    if ($scope.newTask.trim() === '') return;
    $scope.tasks.push($scope.newTask);
    $scope.newTask = '';
    saveTasks();
  };

  $scope.deleteTask = function(index) {
    $scope.tasks.splice(index, 1);
    saveTasks();
  };

  function saveTasks() {
    $http.post('/tasks', $scope.tasks);
  }
});
