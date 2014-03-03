angular.module('customDirectives', [])
    .controller('ctrl1', function($scope){
        $scope.scopeName = "Marianna";
        $scope.log = function(){
            console.log($scope);
        }
    })
    .directive('myDirective', function() {
        return {
            scope: {
                attributeName: '@',
                enclosingScopeAttribute: '=',
                done: '&'
            },
            template: 'Isolated scope: {{attributeName}} <br>' +
                      'Scope attr: {{enclosingScopeAttribute}} <br>'+
                      '<button ng-click="done()">Scope function</button>'
        }
    });
