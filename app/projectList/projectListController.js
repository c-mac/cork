(function (angular) {

  function ProjectListController(projectListService) {
    this.projects = projectListService.getProjectList();
  }

  angular.module('Cork')
      .controller('projectListController', ProjectListController);

})(angular);