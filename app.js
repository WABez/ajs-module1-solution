(function() {
    'use strict';
    var comma = ",";

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchMessage = "";
        $scope.LunchMnu = "";

        $scope.showMessage = function() {
            var arrLen = splitString($scope.LunchMnu, comma);
            $scope.lunchMessage = "";
            if (arrLen == 0) {
                $scope.lunchMessage = "Please enter data first";
            } else {
                if (arrLen <= 3) {
                    $scope.lunchMessage = "Enjoy!";
                } else {
                    if (arrLen > 3) {
                        $scope.lunchMessage = "Too much!";
                    }
                }
            }
            return $scope.lunchMessage;
        };

        function splitString(stringToSplit, separator) {
            var arrayOfStrings = stringToSplit.split(separator);
            if (arrayOfStrings == "") {
                arrayOfStrings.length = 0;
            }
            return arrayOfStrings.length;
        };
    };
})();