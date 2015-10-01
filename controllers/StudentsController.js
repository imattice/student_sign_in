signIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;

    $scope.toggleInClass = function(student) {
        if (student.in_class == true) {
            student.in_class = false;
        } else {
            student.in_class = true;
        }
    }

    // $scope.filterInClass = function(student) {
    //     return student.in_class == true;
    // }
    //
    // $scope.filterNotInClass = function(student) {
    //     return student.in_class == false;
    // }
})
