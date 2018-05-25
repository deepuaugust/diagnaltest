var myApp = null;
(function () {
    myApp = angular.module("app", ['infinite-scroll'])


        .controller("videoController", ["$scope", "$http", function ($scope, $http) {
            console.log("in videoController");
            var array = [];

            $http.get("../app/model/CONTENTLISTINGPAGE-PAGE1.json")
                .then(function (response) {
                    $scope.videoData = response.data;
                    array.push(response.data.page['content-items'].content);
                    //$scope.tiles.push();
                });

            $http.get("../app/model/CONTENTLISTINGPAGE-PAGE2.json")
                .then(function (response) {
                    $scope.videoData = response.data;
                    array.push(response.data.page['content-items'].content);
                });

            $http.get("../app/model/CONTENTLISTINGPAGE-PAGE2.json")
                .then(function (response) {
                    $scope.videoData = response.data;
                    array.push(response.data.page['content-items'].content);
                    $scope.tiles = array;
                    $scope.counter = array[0].length + array[1].length + array[2].length;
                });

            // $scope.loadMore = function () {
            //     var last = $scope.tiles[$scope.counter - 1];
            //     for (var i = 1; i <= 8; i++) {
            //         $scope.tiles.push(last + i);
            //     }
            // };
        }])

}());