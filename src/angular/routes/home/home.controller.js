HomeController.$inject = ["ApiService"];

export default HomeController;

function HomeController(ApiService) {

  const vm = this;

  ApiService.getCommits()
    .then((commits) => {
      vm.commitList = commits;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });

  console.log("Home Controller Initialized");

}
