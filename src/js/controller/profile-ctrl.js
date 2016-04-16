app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});
app.controller("ProfileCtrl",["$scope","$location","$http","$routeParams","$interval","$firebaseArray",function($scope,$location,$http,$routeParams,$interval,$firebaseArray){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    $scope.p_id = $routeParams.presid;
    //get issues
    $http.get("../assets/issues.json").then(function(response){
      $scope.issues = response.data;
    });
    $scope.sendComment = function(e){
      $scope.messages.$add({
        status: $scope.txt,
        name:"Joanna"
      });
    }
    //switch
    switch($scope.p_id){
      case '1':
        var ref = new Firebase("https://halalan2016.firebaseio.com/binay");
        $scope.messages = $firebaseArray(ref.limitToFirst(50));
        $scope.presimg = "img/binaycover.jpg";
        $http.get("../assets/binay.json").then(function(response){
           $scope.presissue = response.data;
           for(var i=0;i<$scope.presissue.length;i++){
              for(var j=0;j<$scope.issues.length;j++){
                if($scope.issues[j].id == $scope.presissue[i].issue_id){
                  $scope.presissue[i].issue = $scope.issues[j].issue;
                }
              }   
           }
           console.log($scope.presissue);
        });
        $interval(function(){
          $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23binay&count=5"}).then(function(response){
            $scope.prestweet = response.data;
          });
        },15000);

        $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23binay&count=5"}).then(function(response){
            $scope.prestweet=response.data;
        });
        break;
      case '2':
        $scope.presimg = "img/miriamcover.jpg";
        $http.get("../assets/miriam.json").then(function(response){
           $scope.presissue = response.data;
           for(var i=0;i<$scope.presissue.length;i++){
              for(var j=0;j<$scope.issues.length;j++){
                if($scope.issues[j].id == $scope.presissue[i].issue_id){
                  $scope.presissue[i].issue = $scope.issues[j].issue;
                }
              }   
           }
        });
        $interval(function(){
          $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23MiriamSantiago&count=5"}).then(function(response){
            $scope.prestweet = response.data;
          });
        },15000);

        $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23MiriamSantiago&count=5"}).then(function(response){
            $scope.prestweet=response.data;
        });
        break;
      case '3':
        $scope.presimg = "img/dutertecover.jpg";
        $http.get("../assets/duterte.json").then(function(response){
           $scope.presissue = response.data;
           for(var i=0;i<$scope.presissue.length;i++){
              for(var j=0;j<$scope.issues.length;j++){
                if($scope.issues[j].id == $scope.presissue[i].issue_id){
                  $scope.presissue[i].issue = $scope.issues[j].issue;
                }
              }   
           }
        });
        $interval(function(){
          $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23duterte2016&count=5"}).then(function(response){
              $scope.prestweet = response.data;
            });
          },15000);

          $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23duterte2016&count=5"}).then(function(response){
              $scope.prestweet=response.data;
          });
        break;
      case '4':
        $scope.presimg = "img/poecover.jpg";
        $http.get("../assets/poe.json").then(function(response){
           $scope.presissue = response.data;
           for(var i=0;i<$scope.presissue.length;i++){
              for(var j=0;j<$scope.issues.length;j++){
                if($scope.issues[j].id == $scope.presissue[i].issue_id){
                  $scope.presissue[i].issue = $scope.issues[j].issue;
                }
              }   
           }
           console.log($scope.presissue);
        });
        $interval(function(){
          $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23gracepoe&count=5"}).then(function(response){
              $scope.prestweet = response.data;
            });
          },15000);

          $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23gracepoe&count=5"}).then(function(response){
              $scope.prestweet=response.data;
          });
        break;
        case '5':
        $scope.presimg = "img/marcover.jpg";
        $http.get("../assets/mar.json").then(function(response){
           $scope.presissue = response.data;
           for(var i=0;i<$scope.presissue.length;i++){
              for(var j=0;j<$scope.issues.length;j++){
                if($scope.issues[j].id == $scope.presissue[i].issue_id){
                  $scope.presissue[i].issue = $scope.issues[j].issue;
                }
              }   
           }
        });
        $interval(function(){
          $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23duterte2016&count=5"}).then(function(response){
              $scope.prestweet = response.data;
            });
          },15000);

          $http.post("http://iligtas.ph/intELECT/get_presidents.php",{myurl:"q=%23duterte2016&count=5"}).then(function(response){
              $scope.prestweet=response.data;
          });
        break;
    } //end switch
}]);