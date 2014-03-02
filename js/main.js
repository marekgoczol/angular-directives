angular
	.module('customDirectives', [])
	
	.controller('Ctrl1', function($scope){
		$scope.name = "Joe";
		$scope.newName;
		$scope.names = ['Joe', 'Samanta', 'Emil'];

		$scope.addName = function(name) {
			if(name) {
				$scope.names.push(name);
				$scope.newName = "";
			} else {
				console.warn('can\'t add empty');
			}
		}

		$scope.remove = function(name, $event) {
			var confirm = window.confirm("really?")

			if(confirm) {
				$scope.names = _.without($scope.names, name);
			}
		}

	});