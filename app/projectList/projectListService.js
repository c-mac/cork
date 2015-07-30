(function (angular) {

  function ProjectListService() {
    var projects = [
      {name: 'wireframe', display: 'Blank Wireframe Example', type: 'TV, Web, Static', due: '7/25/15'},
      {name: 'theoretical', display: 'A Theoretical Project That Doesn\'t Exit', type: 'Nothing', due: 'Never'},
      {name: 'another', display: 'Another Project That Doesn\'t Exit', type: 'Nothing', due: 'Never'}
    ];
    // TODO(cam): come up with a real schema / service
    this.getProjectList = function () {
      return projects;
    };

    this.createProject = function (name, display, type, due) {
      projects.push({name: name, display: display, type: type, due: due});
    }
  }

  angular.module('Cork')
      .service('projectListService', ProjectListService)

})(angular);