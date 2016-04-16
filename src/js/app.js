var app = angular.module("myApp",["ngRoute","firebase"]);

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
	});
});