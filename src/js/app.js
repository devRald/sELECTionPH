var app = angular.module("myApp",["ngRoute","firebase"]);

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
      var i = 0;
        angular.element($window).bind("scroll", function() {
            /*if(i>-195 && pageYOffset <=120){
            	i-=5;
            }
            if(i<-194 && pageYOffset >= 121){
            	i+=5;
            }
            var str = i + "px";
            document.querySelector(".logo-img").style.top = str;
            scope.$apply();*/
        });
    };
});

app.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when("/", {
		templateUrl: "templates/home.html",
		controller: "HomeCtrl"
	})
	.when("/social",{
		templateUrl: "templates/social.html",
		controller: "SocialCtrl"
	})
	.when("/heat",{
		templateUrl: "templates/heat.html",
		controller: "HeatCtrl"
	})
	.when("/fb",{
		templateUrl: "templates/fb.html",
		controller: "FbCtrl"
	})

	.when("/profile/:presid",{
		templateUrl: "templates/profile.html",
		controller: "ProfileCtrl"
	})

	.when("/quiz",{
		templateUrl:"templates/issues.html",
		controller:"QuizCtrl"

	});
});