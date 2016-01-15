/**
 * Created by samanthamusselman on 1/15/16.
 */

var app = angular.module('practiceApp', []);

app.controller('myController', ['$scope', '$http', 'ThetaService', function($scope, $http, ThetaService) {
    $scope.name = ThetaService.cohortName;
    $scope.size = ThetaService.numStudents;
    $scope.gradDate = ThetaService.gradDate;
    $scope.instructors = ThetaService.instructors;
    $scope.mascot = ThetaService.mascot;
    $scope.fuel = ThetaService.fuel;
    $scope.goal = ThetaService.goal;
    $scope.classroom = ThetaService.classroom;
    $scope.passtimes = ThetaService.passtimes;
    $scope.supportSystem = ThetaService.supportSystem;
}]);


app.factory('ThetaService', function(){
    function hobbies() {
        return "Playing Sheepshead and reading StackOverflow"
    }

    var theta = {
        cohortName: 'Theta',
        gradDate: 'March 11, 2016',
        instructors: ['Joel', 'Kristy'],
        numStudents: 22,
        mascot: 'Wolverine',
        fuel: "Coffee",
        goal: "Get sweet jobs!",
        classroom: 3,
        passtimes: hobbies(),
        supportSystem: "Fred, Taylor, and Aesop"
    };

    return theta;

});

