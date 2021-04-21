var app = angular.module("StoreListApp", []);

app.controller("ListController", function($scope) {
    $scope.List = [
        "football",
        "Tennis",
        "Vollyball",
       "beach volleyball",
       "hockey",        
    ];

    $scope.addGame = function(z){
        $scope.List.push(z);
    }
    $scope.remove = function(y) {
        var removeGame =$scope.List.indexOf(y);
        $scope. List.splice(removeGame,1);
    }
});