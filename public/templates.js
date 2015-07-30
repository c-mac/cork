angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("projectLanding/projectLanding.html","<h1>Project Landing</h1>");
$templateCache.put("projectList/projectList.html","<div class=\"projectList-heading\">Project List</div>\n<crk-project-list ng-repeat=\"project in projectList.projects\" display=\"project.display\" due=\"project.due\"\n    type=\"project.type\"></crk-project-list>\n<button class=\"projectList-addProjectButton\" ng-click=\"projectList.createProject()\">\n  + New Project\n</button>");
$templateCache.put("projectList/projectListDirective.html","<div class=\"projectList-container\">\n  <div class=\"block b-1-2\">\n    {{ display }}\n  </div>\n  <div class=\"block b-1-4\">\n    {{ due }}\n  </div>\n  <div class=\"block b-1-4\">\n    {{ type }}\n  </div>\n</div>");}]);