function NavCtrl($scope) {
	$scope.modules = ['Location','Community','System','Docs','Help'];
}

function HomeCtrl($scope) {
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

function DBCtrl($scope) {
	$scope.projects = ['Curugagung','Cibitung','Cikalong','Prabugantungan','Cupunagara'];
}

function HelpCtrl($scope) {
	$scope.modules = ['Location','Community','System','Docs'];
}

function FinancialCtrl($scope) { 
	$scope.master= {};
	$scope.update = function(sys) { 
		$scope.master= angular.copy(sys);
	};
	$scope.reset = function() {
		$scope.sys = angular.copy($scope.master);
	};
	$scope.reset();
}