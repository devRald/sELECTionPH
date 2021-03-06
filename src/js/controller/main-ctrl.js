app.controller("MainCtrl",["$scope","$rootScope","$location","$http",function($scope,$rootScope,$location,$http){
    var host ="192.168.1.10";
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
    $scope.logout = function(){
        console.log("logout");
      FB.logout(function(response) {
        // user is now logged out
        console.log(response);
        $rootScope.setLogin(true);
        sessionStorage.removeItem("userdata");
      });  
    }

    function statusChangeCallback(response) {
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          testAPI();
        } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
          document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
        } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
          document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook.';
        }
      }

      function checkLoginState() {
        FB.getLoginStatus(function(response) {
          FB.api(
              "/{user-id}/picture",
              function (response) {
                if (response && !response.error) {
                  /* handle the result */
                }
              }
          );
          statusChangeCallback(response);
        });
      }

      window.fbAsyncInit = function() {
      FB.init({
        appId      : '1009198079162183',
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.6', // use graph api version 2.5
        cookie     : true
      });

      // Now that we've initialized the JavaScript SDK, we call 
      // FB.getLoginStatus().  This function gets the state of the
      // person visiting this page and can return one of three states to
      // the callback you provide.  They can be:
      //
      // 1. Logged into your app ('connected')
      // 2. Logged into Facebook, but not your app ('not_authorized')
      // 3. Not logged into Facebook and can't tell if they are logged into
      //    your app or not.
      //
      // These three cases are handled in the callback function.

      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });

      };

     /*function login_fb(){
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
     }*/

      // Load the SDK asynchronously
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

      // Here we run a very simple test of the Graph API after login is
      // successful.  See statusChangeCallback() for when this call is made.
      function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me',{fields: ['name','picture']}, function(response) {
          console.log(response);
          if(sessionStorage.getItem("userdata")===null){
              $http.post("http://"+host+"/ELECTIONPH/__getUserdata.php",{mydata:response}).then(function(res){
                console.log(res.data);
                sessionStorage.setItem("userdata",JSON.stringify(res.data));
                $rootScope.setLogin(false);
              });
          }
          console.log('Successful login for: ' + response.name);
          document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        });
      }


    $scope.login_fb = function(){
        FB.login(function(response) {
          if (response.authResponse) {
           console.log('Welcome!  Fetching your information.... ');
           FB.api('/me',{fields: ['name','picture']}, function(response) {
             console.log('Good to see you, ' + response.name + '.');
                $http.post("http://"+host+"/ELECTIONPH/__checkUser.php",{mydata:response}).then(function(res){
                    if(res.data=="done"){
                        $http.post("http://"+host+"/ELECTIONPH/__getUserdata.php",{mydata:response}).then(function(res){
                            console.log(res.data);
                            sessionStorage.setItem("userdata",JSON.stringify(res.data));
                            $rootScope.setLogin(false);
                          });
                    }
                });
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