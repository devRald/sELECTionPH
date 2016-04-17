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

    $http.get("http://localhost/ELECTIONPH/getAnalytics.php").then(function(response){
      sessionStorage.setItem("chart",JSON.stringify(response.data));
    });

    var deadline = new Date(2016,4,8,24,60,60,60);
    initializeClock('clockdiv', deadline);

    //var ctx = $("#myChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    //var myNewChart = new Chart(ctx);
    //new Chart(ctx).PolarArea(data, options);
    var data = [{"value":10,"color":"#ff6f00","highlight":"#ffa000","label":"Jejomar Binay"},{"value":11,"color":"#b71c1c","highlight":"#ef5350","label":"Mirian Defensor Santiago"},{"value":30,"color":"#1a237e","highlight":"#3949ab","label":"Rodrigo Duterte"},{"value":20,"color":"#2196f3","highlight":"#64b576","label":"Grace Poe"},{"value":5,"color":"#ffca28","highlight":"#fff176","label":"Mar Roxas"}];
    var ctx = document.getElementById("myChart").getContext("2d");
    //var myNewChart = new Chart(ctx).PolarArea(data);
    var myDoughnutChart = new Chart(ctx).Doughnut(data);

}]);