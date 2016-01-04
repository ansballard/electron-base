import homeTemplate from "../routes/home/home.template.html";

ModuleConfig.$inject = ["$routeProvider"];

export default ModuleConfig;

function ModuleConfig($routeProvider) {

  $routeProvider
    .when("/", {
      template: homeTemplate,
      controller: "HomeController",
      controllerAs: "vm",
      bindToController: true
    })
    .otherwise({
      redirectTo: "/"
    });

}
