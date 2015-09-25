var signIn = angular.module('signIn', ['ui.router']);

//renders home page and inserts home.html partial into the index.HTML
signIn.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '',
        templateUrl:'partials/home.html'
    });

//enables students button to navigate to the students.html partial
    $stateProvider.state('students', {
        url:'/students',
        templateUrl: 'partials/students.html',
        controller: 'StudentsCtrl'
    });

    $stateProvider.state('teachers', {
        url:'/teacher',
        templateUrl: 'partials/teacher.html',
        controller: 'StudentsCtrl'
    });
});
