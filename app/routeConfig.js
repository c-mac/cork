(function (angular) {

  function routeConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('projectList', {
          url: '/projectList',
          templateUrl: 'projectList/projectList.html',
          controller: 'projectListController as projectList'
        })
        .state('projectLanding', {
          url: '/landing',
          templateUrl: 'projectLanding/projectLanding.html'
        });

    $urlRouterProvider.otherwise('/projectList');

  };

  angular.module('Cork')
      .config(routeConfig);

})(angular);