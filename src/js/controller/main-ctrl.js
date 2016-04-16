app.controller("MainCtrl",["$scope","$rootScope","$location","$http",function($scope,$rootScope,$location,$http){
	 var key = "H5qWcTYm5" , token = "hmXtL0GEKjG5WFdN68pYOKBSU1oq";
	 $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.testData = function(){
    	$http.get("http://api.bilangpilipino.com/api-bilang-pilipino/api/candidates/2016?key=H5qWcTYm5&token=hmXtL0GEKjG5WFdN68pYOKBSU1oq").then(function(response){
    		
    	});
    }

    $scope.testData();
}]);