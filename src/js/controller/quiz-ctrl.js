app.controller("QuizCtrl",["$scope","$location","$http",function($scope,$location,$http){
  $scope.ans = [{issue_id:1,answers:""},{issue_id:2,answers:""},{issue_id:3,answers:""},{issue_id:4,answers:""},{issue_id:5,answers:""},
                    {issue_id:6,answers:""},{issue_id:7,answers:""},{issue_id:8,answers:""},{issue_id:9,answers:""},{issue_id:10,answers:""},
                    {issue_id:11,answers:""},{issue_id:12,answers:""},{issue_id:13,answers:""},{issue_id:14,answers:""},{issue_id:15,answers:""},
                    {issue_id:16,answers:""},{issue_id:17,answers:""},{issue_id:18,answers:""},{issue_id:19,answers:""},{issue_id:20,answers:""},
                    {issue_id:21,answers:""}];
  $scope.selection = [{"can_id":1,score:0},{"can_id":2,score:0},{"can_id":3,score:0},{"can_id":4,score:0},{"can_id":5,score:0}];
  $scope.getSOI = function(){
    //get binay
    $http.get("../assets/binay.json").then(function(response){
      $scope.binay = response.data;
    });

    //get santiago
    $http.get("../assets/miriam.json").then(function(response){
      $scope.miriam = response.data;
    });

    //get binay
    $http.get("../assets/duterte.json").then(function(response){
      $scope.duterte = response.data;
    });

    //get binay
    $http.get("../assets/poe.json").then(function(response){
      $scope.poe = response.data;
    });

    //get binay
    $http.get("../assets/mar.json").then(function(response){
      $scope.roxas = response.data;
    });
  }

  $scope.generateCandidate = function(){
    for(var i=0;i<$scope.ans.length;i++){
      for(var j=0;j<$scope.selection.length;j++){
        switch(j){
          case 0:
            if($scope.binay[i].summary == $scope.ans[i].answer){
              $scope.selection[j].score++;
            }
            break;
          case 1:
            if($scope.miriam[i].summary == $scope.ans[i].answer){
              $scope.selection[j].score++;
            }
            break;
          case 2:
            if($scope.duterte[i].summary == $scope.ans[i].answer){
              $scope.selection[j].score++;
            }
            break;
          case 3:
            if($scope.poe[i].summary == $scope.ans[i].answer){
              $scope.selection[j].score++;
            }
            break;
          case 4:
            if($scope.roxas[i].summary == $scope.ans[i].answer){
              $scope.selection[j].score++;
            }
            break;
        }  
      }
    }
    console.log($scope.selection);
  } 

  $scope.getTopThree = function(){
    
  }

  $scope.submitQuiz = function(){
    $scope.generateCandidate();
    $scope.getTopThree();
    $('#modal1').closeModal();
  }
  $scope.getSOI();

  $scope.openModal = function(){
    $('#modal1').openModal({dismissible: false,opacity:0.8});
  }
}]);