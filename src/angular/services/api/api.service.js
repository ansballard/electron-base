ApiService.$inject = ["$http"];

export default ApiService;

function ApiService($http) {
  return {
    getRepos() {
      return $http.get("https://api.github.com/users/ansballard/repos")
        .then((response) => response.data
          .map((repo) => repo.name)
        );
      ;
    }
  }
}
