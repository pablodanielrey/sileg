
app.controller("DesignacionesCtrl", ["$scope", "$resource", function ($scope, $resource) {

  var Designacion = $resource('http://127.0.0.1:5001/sileg/api/v1.0/designaciones/');
  $scope.designaciones = Designacion.query();

}]);
