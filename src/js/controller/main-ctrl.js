app.controller("MainCtrl",["$scope","$rootScope","$location",function($scope,$rootScope,$location){
	 $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);