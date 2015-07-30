(function (angular) {

  function ProjectListDirective() {
    return {
      templateUrl: 'projectList/projectListDirective.html',
      scope: {
        display: '=',
        due: '=',
        type: '='
      }
    }
  }

  angular.module('Cork')
      .directive('crkProjectList', ProjectListDirective)

})(angular);