angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {
	$scope.currentUser = userInfo.data.currentUser.name;
	$scope.friends = userInfo.data.friends;
	console.log(userInfo);
});