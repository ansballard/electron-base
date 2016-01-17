import homeTemplate from "../routes/home/home.template.html";

ModuleConfig.$inject = ["$routeProvider", "$locationProvider"];

export default ModuleConfig;

function ModuleConfig($routeProvider, $locationProvider) {

  $routeProvider
    .when("/", {
      template: homeTemplate,
      controller: "HomeController",
      controllerAs: "vm",
      bindToController: true
    })
    .when("/hello", {
      template: "Hello World! <a ng-href=\"/\">Home</a>"
    })
    .otherwise({
      redirectTo: "/"
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}
