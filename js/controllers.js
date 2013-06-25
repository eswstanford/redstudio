function NavCtrl($scope) {
	$scope.modules = ['Location','Community','System','Docs','Help'];
}

function HmCtrl($scope) {
	$scope.hmscrn = ['Load','New','Information','Settings'];
}

function SysCtrl($scope) {
	$scope.generators = ['Hydro','Solar','Wind','Biogas'];
}

function FormCtrl($scope) { 
	$scope.master= {};
	$scope.update = function(user) { 
		$scope.master= angular.copy(user);
	};
	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
	};
	$scope.reset();
}

function HomeCtrl($scope) {
	$scope.projects = ['Project 1','Project 2','Project 3','Project 3','Project 4'];
}