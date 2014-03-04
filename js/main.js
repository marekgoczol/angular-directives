angular.module('customDirectives', [])
    
    .controller('ctrl1', function($scope){
        $scope.plane = 'Boeing 747';
    })

    .directive('chStepper', function() {
        return {
            restrict: 'AE',
            scope: {},
            template: '<button ng-click="decrement()">-</button>' +
                      '<div>{{ value }}</div>' +
                      '<button ng-click="increment()">+</button>',
            link: function(scope, element, attrs) {
                scope.value = 0;
                scope.increment = function() {
                    scope.value++;
                }
                scope.decrement = function() {
                    scope.value--;
                }
            }
        };
    });
