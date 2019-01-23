// add ui.router and ngStorage 3rd party modules to angular
var app = angular.module('crudApp',['ui.router','ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8080/',
    USER_SERVICE_API : 'http://localhost:8080/api/user/'
});

// ui.router setup
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // configure home
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/list',
                controller:'UserController',
                controllerAs:'ctrl',
                resolve: {
                    // $q -> promise constructor
                    users: function ($q, UserService) {
                        console.log('Load all users');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    }]);

