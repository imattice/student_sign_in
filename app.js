var signIn = angular.module('signIn', ['ui.router']);

courseRoster.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '',
        templateUrl:'partials/home.html'
    });
});
