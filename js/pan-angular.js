var panyuan=angular.module('panyuan', []);
panyuan.controller('panctl', ['$scope','$rootScope' ,function($scope,$rootScope){
	$scope.arr=arr;
 	$scope.xuanran=function(i){
     $rootScope.index=i;
     $scope.value=arr[i];
     console.log($scope.value)
	}
}])
