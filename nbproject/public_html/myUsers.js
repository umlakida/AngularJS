angular.module('myApp', [])
    .directive('validGender', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
                ngModelCtrl.$validators.validGender = function(modelValue, viewValue) {
                    return viewValue === 'female' || viewValue === 'male';
                };
            }
        };
    })


.controller('memberCtrl', function ($scope) {

        $scope.passw1 = '';
        $scope.passw2 = '';
        $scope.members = [
            { id: 1, fName: 'Lee', lName: "Arien", Age: "21 y.", gender: "male", role: "son" },
            { id: 2, fName: 'Lee', lName: "Lida", Age: "20 y.", gender: "female", role: "daughter" },
            { id: 3, fName: 'Kim', lName: "Hesu", Age: "32 y.", gender: "female", role: "mother" },
            { id: 4, fName: 'So', lName: "Zhanna", Age: "19 y.", gender: "female", role: "sister" },
            { id: 5, fName: 'Jeon', lName: "Anna", Age: "11 y.", gender: "female", role: "daughter" },
            { id: 6, fName: 'So', lName: "Andry", Age: "45 y.", gender: "male", role: "father" },
            { id: 7, fName: 'Kim', lName: "Marta", Age: "39 y.", gender: "female", role: "wife" },
            { id: 8, fName: 'So', lName: "Sehun", Age: "27 y.", gender: "male", role: "brother" },
            { id: 9, fName: 'Jeon', lName: "Dan", Age: "29 y.", gender: "male", role: "son" },
            { id: 10, fName: 'Kim', lName: "Ron", Age: "50 y.", gender: "male", role: "father" },
        ];

        $scope.hideform = true;

        $scope.editMember = function (id) {
            $scope.hideform = false;
            if (id === 'new') {
                $scope.edit = true;
                $scope.fName = '';
                $scope.lName = '';
                $scope.Age = '';
                $scope.gender = '';
                $scope.role = '';
            } else {
                $scope.edit = false;
                $scope.index = id - 1;
                $scope.fName = $scope.members[$scope.index].fName;
                $scope.lName = $scope.members[$scope.index].lName;
                $scope.Age = $scope.members[$scope.index].Age;
                $scope.gender = $scope.members[$scope.index].gender;
                $scope.role = $scope.members[$scope.index].role;
            }
        };

        $scope.saveMember = function () {
            $scope.hideform = false;
            if ($scope.edit === true) {
                $scope.LENGTH = $scope.members.length;
                $scope.members.push({ id: $scope.LENGTH + 1, fName: $scope.fName, lName: $scope.lName, Age: $scope.Age, gender: $scope.gender, role: $scope.role });
            } else {
                $scope.members[$scope.index].fName = $scope.fName;
                $scope.members[$scope.index].lName = $scope.lName;
                $scope.members[$scope.index].Age = $scope.Age;
                $scope.members[$scope.index].gender = $scope.gender;
                $scope.members[$scope.index].role = $scope.role;
            }
        };

        $scope.$watch('passw1', function () {$scope.test();});
        $scope.$watch('passw2', function () {$scope.test();});
        $scope.$watch('fName', function () {$scope.test();});
        $scope.$watch('lName', function () { $scope.test(); });
        $scope.$watch('Age', function () { $scope.test(); });
        $scope.$watch('gender', function () { $scope.test(); });
        $scope.$watch('role', function () { $scope.test(); });

        $scope.sortColumn = function (columnName) {
            $scope.sortBy = columnName;
            $scope.reverse = ($scope.sortBy === columnName) ? !$scope.reverse : false;
        };

        $scope.test = function () {
            $scope.error = $scope.passw1 !== $scope.passw2;
            $scope.incomplete = !$scope.fName || !$scope.lName || !$scope.Age || !$scope.gender || !$scope.role ||
                !$scope.passw1 || !$scope.passw2 || !(/^\d+\sy\.$/.test($scope.Age));
        };
        $scope.lastClicked = null;

        $scope.toggleColor = function(member) {
            if ($scope.lastClicked === member.id) {
                member.textColor = 'blue';
                $scope.lastClicked = null;
            } else {
                member.textColor = '';
                $scope.lastClicked = member.id;
            }
        };

        $scope.hideTable = false;

        $scope.toggleTable = function() {
            $scope.hideTable = !$scope.hideTable;
        };

});
