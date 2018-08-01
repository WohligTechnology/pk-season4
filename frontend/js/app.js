// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'ui.select',
    'angularPromiseButtons',
    'toastr'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('digital-course', {
            url: "/digital-course",
            templateUrl: tempateURL,
            controller: 'DigitalCtrl'
        })
        .state('contest-hub', {
            url: "/contest-hub",
            templateUrl: tempateURL,
            controller: 'ContestCtrl'
        })
        .state('photo-gallery', {
            url: "/photo-gallery",
            templateUrl: tempateURL,
            controller: 'GalleryCtrl'
        })
        .state('latest-buzz', {
            url: "/latest-buzz",
            templateUrl: tempateURL,
            controller: 'LatestCtrl'
        })
        .state('links', {
            url: "/links",
            templateUrl: tempateURL,
            controller: 'LinksCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});