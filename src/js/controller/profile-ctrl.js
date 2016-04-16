app.controller("ProfileCtrl",["$scope","$location","$http",function($scope,$location,$http){

    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });  

    $http.get("../assets/issues.json").then(function(response){
      $scope.issues = response.data;
    })
}]);
