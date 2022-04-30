var app = angular.module("myApp", []);

app.controller('MainCtrl', ['$scope','$filter', function ($scope, $filter){

  $scope.employees = [{
    "id": 1,
    "name": "book 1",
    "author":"book's author",
    "dateAdded":"date",
    "DateModified": "date"
},{
  "id": 2,
  "name": "book 2",
  "author":"book's author",
  "dateAdded":"date",
  "DateModified": "date"
},{
  "id": 3,
  "name": "book 3",
  "author":"book's author",
  "dateAdded":"date",
  "DateModified": "date"
},{
  "id": 4,
  "name": "book 4",
  "author":"book's author",
  "dateAdded":"date",
  "DateModified": "date"
},{
  "id": 5,
  "name": "book 5",
  "author":"book's author",
  "dateAdded":"date",
  "DateModified": "date"
},








]
  $scope.errorMessage = false;
  
  
  
  $scope.edit = function() {
    if(!!$scope.employees.find(x => x.name === DataTransfer.name && x.author === $scope.data.author)) {
        alert('already eixsts');
      $scope.errorMessage = true;
      return;
    }
    var employeeToEdit = $scope.employees.find(x => x.id === $scope.data.id);
    employeeToEdit.name = $scope.data.name;
    employeeToEdit.author = $scope.data.author;
    employeeToEdit.dataAdded = $scope.data.date;
    employeeToEdit.DateModified== $scope.data.md;

  }

}]);