angular.module('customDirectives', [])
    
    .controller('ctrl1', function($scope){
        $scope.plane = 'Boeing 747';
    })

    .directive('myDirective', function() {
        return {
            scope: {}, // own isolated scope
            template: '<input ng-model="plane"> {{plane}}',
            link: function(scope, element, attrs) {
                console.log(scope);
            }
        }
    });
