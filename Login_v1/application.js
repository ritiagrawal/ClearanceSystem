var app = angular.module('postserviceApp', [ 'ngRoute' ]);


app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'login.html',
		controller: 'postserviceCtrl'
	})
	.when('/home', {
		templateUrl : 'home.html',
		controller: 'homeCtrl'
	})
	
	.otherwise({ redirectTo: '/' });
	
});

app.controller('homeCtrl',function($scope, $http, $location)
{
	
});

app.controller('postserviceCtrl', function($scope, $http, $location) {
	$scope.name = null;
	$scope.pass = null;
	$scope.lblMsg = null;
	
	$scope.postdata = function(form ,username, pass,profile) {
		var data = {
			username : username,
			pass : pass
		};

		if(username=="a" && pass == "a" ){
			$scope.name = null;
			$scope.pass = null;
			$scope.msg = "successful";
			$location.path('/home')
		}
		else{
			$scope.msg = "Invalid User";
		}		
			
			

		/*$http.post('/connect', JSON.stringify(data)).then(
				function(response) {
					if (response.data) {
						$scope.msg = "Post Data Submitted Successfully!";
						$location.path('/home')
						
						$scope.name = null;
						$scope.password = null;
						$scope.lblMsg = null;
						$scope.msg = "Welcome Mr."+$scope.username;
					} else {
						$scope.msg = "Invalid User";
						$location.path('/')
					}
				}, function(response) {
					$scope.msg = "Unsuccessful";
					$scope.statusval = response.status;
					$scope.statustext = response.statusText;
					$scope.headers = response.headers();
				});*/
	};
	
});

