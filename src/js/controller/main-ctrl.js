app.controller("MainCtrl",["$scope","$rootScope","$location","$http",function($scope,$rootScope,$location,$http){
	 var key = "H5qWcTYm5" , token = "hmXtL0GEKjG5WFdN68pYOKBSU1oq";
	 $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    /*$scope.testData = function(){
    	$http.get("../assets/runners.json").then(function(response){
    		$scope.presidents = [];
    		for(var i=0;i<response.data.length;i++){
    			if(response.data[i].running_position=="President"){
    				$scope.presidents.push(response.data[i]);
    			}
    		}
//    		console.log($scope.presidents);
    	});
    }*/
    $scope.login_fb = function(){
        FB.login(function(response) {
          if (response.authResponse) {
           console.log('Welcome!  Fetching your information.... ');
           FB.api('/me',{fields: ['name','picture']}, function(response) {
             console.log('Good to see you, ' + response.name + '.');
           });
          } else {
           console.log('User cancelled login or did not fully authorize.');
          }
      });
     }

    $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23Halalan2016+OR+%23election2016&count=5"}).then(function(response){
    	console.log(response.data);
    });

    $scope.showMore = function() {
        console.log('show more triggered');  
    };
}]);