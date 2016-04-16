app.controller("HomeCtrl",["$scope","$rootScope","anchorSmoothScroll","$location","$http","$interval",function($scope,$rootScope,anchorSmoothScroll,$location,$http,$interval){
	$('.slider').slider();
	$scope.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');
 
      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);
      
    };

    $scope.rt = function(id){
      window.open('https://twitter.com/intent/retweet?tweet_id='+ id +'&related=twitterapi,twittermedia,twitter,support&original_referer=https://dev.twitter.com/web/intents', '_blank', 'location=yes');
    }
    $scope.tweet = function(){
    	window.open('https://twitter.com/intent/tweet?text=%23Halalan2016');
    }

    $http.get("http://iligtas.ph/intELECT/get_feeds.php").then(function(response){
    	$scope.tweets = response.data;
    });

    $interval(function(){
    	$http.get("http://iligtas.ph/intELECT/get_feeds.php").then(function(response){
	    	$scope.tweets = response.data;
	    })
    },15000);

    $http.get("../assets/president.json").then(function(response){
      $scope.pres = response.data;
    });


    var deadline = new Date(2016,4,8,24,60,60,60);
    initializeClock('clockdiv', deadline);
}]);