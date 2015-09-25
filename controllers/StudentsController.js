signIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;

    $scope.toggleInClass = function(student) {
        if (student.in_class == true) {
            stuent.in_class = false;
        } else if (student.in_class == false) {
            student.in_class = true;
        }
    }
})
