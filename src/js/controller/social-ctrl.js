app.controller("SocialCtrl",["$scope","$location","$firebaseArray",function($scope,$location,$firebaseArray){
  var ref = new Firebase("https://halalan2016.firebaseio.com/");
  $scope.messages = $firebaseArray(ref.limitToFirst(50));
  console.log($scope.messages);
  $('.tooltipped').tooltip({delay: 50});

  $scope.openModal = function(){
  	 $('#modal1').openModal(); 
  }

  $scope.closeModal = function(){
     $('#modal1').closeModal();
  }


}]);
