HomeController.$inject = ["ApiService"];

export default HomeController;

function HomeController(ApiService) {

  const vm = this;

  ApiService.getRepos()
    .then((repos) => {
      vm.repoList = repos;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });

  console.log("Home Controller Initialized");

}
