app.controller("QuizCtrl",["$scope","$location","$http",function($scope,$location,$http){
  $scope.ans = [{issue_id:1,answer:""},{issue_id:2,answer:""},{issue_id:3,answer:""},{issue_id:4,answer:""},{issue_id:5,answer:""},
                    {issue_id:6,answer:""},{issue_id:7,answer:""},{issue_id:8,answer:""},{issue_id:9,answer:""},{issue_id:10,answer:""},
                    {issue_id:11,answer:""},{issue_id:12,answer:""},{issue_id:13,answer:""},{issue_id:14,answer:""},{issue_id:15,answer:""},
                    {issue_id:16,answer:""},{issue_id:17,answer:""},{issue_id:18,answer:""},{issue_id:19,answer:""},{issue_id:20,answer:""},
                    {issue_id:21,answer:""}];
  $scope.selection = [{"can_id":1,score:0},{"can_id":2,score:0},{"can_id":3,score:0},{"can_id":4,score:0},{"can_id":5,score:0}];
  $scope.getSOI = function(){
    $http.get("../assets/president.json").then(function(response){
      $scope.pres = response.data;
    });

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
  } 

  $scope.sortRank = function(){
    for(var i=0;i<5;i++){
      for(var j=0;j<5;j++){
        if($scope.selection[j].score<$scope.selection[i].score){
          var temp = $scope.selection[j];
          $scope.selection[j] = $scope.selection[i];
          $scope.selection[i] = temp;
        }
      }
    }
  }

  $scope.getTop = function(){
    $scope.top = [];
    for(var i=0;i<3;i++){
      for(var j=0;j<5;j++){
        if($scope.selection[i].can_id==$scope.pres[j].can_id){
          $scope.top.push($scope.pres[j]);
          break;
        }
      } 
    }
  }

  $scope.check = function(){
    $scope.count = 0;
    console.log($scope.ans);
    for(var i=0;i<$scope.ans.length;i++){
      if($scope.ans[i].answer != ""){
        $scope.count++;
      }
    }
  }

  $scope.submitQuiz = function(){
    $scope.check();
    if($scope.count > 15){
      $scope.generateCandidate();
      $scope.sortRank();
      $scope.getTop();
      $http.post("http://localhost/ELECTIONPH/addVote.php",{can:$scope.top[0].can_id}).then(function(response){

      });
      console.log("yehey");
      $('#modal1').closeModal();
      $scope.openModal2();
    }
  }
  $scope.getSOI();

 
 $scope.openModal = function(){
    $('#modal1').openModal({dismissible: false,opacity:0.8});
  }

$scope.openModal2 = function(){
    $('#modal2').openModal({dismissible: false,opacity:0.8});
  }



}]);