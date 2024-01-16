(function () {
  'use strict';

  angular.module('Foodcheck',[])

  .controller('FoodController',FoodController);
  function FoodController($scope) {
    $scope.inputval="";
    $scope.message="";

    $scope.CheckTheResult = function (){
      var str= $scope.inputval;
      var splitted = str.split(",");
      var arraynum = splitted.length;
      
      if (arraynum == 1 && splitted[0].length == 0){
        $scope.message="Please enter data first";
      }
      else if (arraynum <= 3 && arraynum > 0) {
        $scope.message="Enjoy!";
      }
      else if(arraynum > 3) {
        $scope.message="Too Much!";
      }
      else {
        $scope.message="";
      }
    }


  };



})();
