app.controller("MainCtrl",["$scope","$rootScope","$location","$http",function($scope,$rootScope,$location,$http){
	 var key = "H5qWcTYm5" , token = "hmXtL0GEKjG5WFdN68pYOKBSU1oq";
	 $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.testData = function(){
    	$http.get("../assets/runners.json").then(function(response){
    		$scope.presidents = [];
    		for(var i=0;i<response.data.length;i++){
    			if(response.data[i].running_position=="President"){
    				$scope.presidents.push(response.data[i]);
    			}
    		}
    		console.log($scope.presidents);
    	});
    }

    $scope.testData();
}]);