(function (angular) {

  function projectLandingController($stateParams) {
    if ($stateParams.project) {
      this.project = $stateParams.project;
    }
  }

  angular.module('Cork')
      .controller('projectLandingController', projectLandingController)

})(angular);