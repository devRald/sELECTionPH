app.run(function($rootScope,$http){
    console.log("Page has been loaded");  
	$rootScope.setLogin = function(status){
        $rootScope.showLogin = status;   
    }
	if(sessionStorage.getItem("userdata")===null){
		$rootScope.setLogin(true);
	}    
	else{
		$rootScope.setLogin(false);
	}
})