'use strict';

angular.module('myApp.view1', ['ngRoute', 'n3-line-chart'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
    var createDataSet = function(iterations, initialBalance) {
        var value = initialBalance;
        var dataSet = [];
        for (var i = 0; i < iterations; i++) {

            dataSet.push({x: i, val_0: i});
        }
        return dataSet;
    };

    var dataset1 = createDataSet(12, 6000);

    $scope.data = {
        dataset0: dataset1
    };

    $scope.options = {
        series: [
            {
                axis: "y",
                dataset: "dataset0",
                key: "val_0",
                label: "An area series",
                color: "#1f77b4",
                type: ['line', 'dot', 'area'],
                id: 'mySeries0'
            }
        ],
        axes: {x: {key: "x"}}
    };
});